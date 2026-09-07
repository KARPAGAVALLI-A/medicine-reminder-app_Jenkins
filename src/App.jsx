import { useState } from "react";
import AddMedicine from "./components/AddMedicine";
import MedicineList from "./components/MedicineList";
import Reminder from "./components/Reminder";
import "./App.css";

function App() {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  return (
    <div className="container">
      <h1>Medicine Reminder</h1>

      <AddMedicine addMedicine={addMedicine} />

      <MedicineList medicines={medicines} />

      <Reminder medicines={medicines} />
    </div>
  );
}

export default App;