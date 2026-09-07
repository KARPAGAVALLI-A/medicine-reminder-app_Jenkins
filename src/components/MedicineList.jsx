function MedicineList({ medicines }) {
  return (
    <div>
      <h2>Medicine List</h2>

      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            {medicine.name} - {medicine.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;