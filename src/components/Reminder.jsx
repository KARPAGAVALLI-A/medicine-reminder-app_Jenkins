import { useEffect } from "react";

function Reminder({ medicines }) {

  useEffect(() => {

    if ("Notification" in window) {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {

      const now = new Date();

      const currentTime =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0");

      medicines.forEach((medicine) => {

        if (medicine.time === currentTime) {

          if (Notification.permission === "granted") {
            new Notification("💊 Medicine Reminder", {
              body: `Time to take ${medicine.name}`,
            });
          }

          const audio = new Audio("/reminder.mp3");
          audio.play();

          const speech = new SpeechSynthesisUtterance(
            `Time to take ${medicine.name}`
          );
          speech.lang = "en-US";
          window.speechSynthesis.speak(speech);
        }

      });

    }, 60000);

    return () => clearInterval(interval);

  }, [medicines]);

  return (
    <div>
      <h2>Today's Reminders</h2>

      {medicines.length === 0 ? (
        <p>No medicines added.</p>
      ) : (
        medicines.map((medicine, index) => (
          <p key={index}>
            Take <b>{medicine.name}</b> at <b>{medicine.time}</b>
          </p>
        ))
      )}
    </div>
  );
}

export default Reminder;