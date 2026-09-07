import { useState } from "react";

function AddMedicine({ addMedicine }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !time) return;

    addMedicine({ name, time });

    setName("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medicine Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddMedicine;