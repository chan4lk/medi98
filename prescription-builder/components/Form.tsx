import React, { useState, useEffect } from 'react';
import drugNames from './drugNames';

interface FormProps {
  onAddMedicine: (medicine: Omit<Medicine, 'id'>) => void; // Omit 'id' property
  patientName: string;
  patientAge: string;
  setPatientName: React.Dispatch<React.SetStateAction<string>>;
  setPatientAge: React.Dispatch<React.SetStateAction<string>>;
}

interface Medicine {
  drugName: string;
  tabletCount: string;
  foodInstructions: string;
  medInstructions: string;
}

const Form: React.FC<FormProps> = ({ onAddMedicine, patientName, patientAge, setPatientName, setPatientAge }) => {
  const [medicine, setMedicine] = useState<Medicine>({
    drugName: '',
    tabletCount: '1', // Default to 1
    foodInstructions: 'Before Meal',
    medInstructions: 'Every 1 Hour',
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    setSuggestions(drugNames);
  }, []);

  const handleTabletCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      tabletCount: e.target.value,
    }));
  };

  const handleDrugNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDrugName = e.target.value;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      drugName: inputDrugName,
    }));
  };

  const handleFoodInstructionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFoodInstruction = e.target.value;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      foodInstructions: selectedFoodInstruction,
    }));
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrequency = e.target.value;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      medInstructions: selectedFrequency,
    }));
  };

  const handleDrugNameSuggestionClick = (suggestion: string) => {
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      drugName: suggestion,
    }));
  };

  const handleAddMedicine = () => {
    if (patientName === '' || patientAge === '' || medicine.drugName === '') {
      alert('Please Enter Patient Name, Age, and Select a Drug Name Before Adding Medicine.');
      return;
    }

    onAddMedicine(medicine);

    setMedicine({
      drugName: '',
      tabletCount: '1',
      foodInstructions: 'Before Meal', // Reset to default
      medInstructions: 'Every 1 Hour', // Reset to default
    });
  };

  return (
    <form className="grid gap-4 w-full max-w-md">
      <label htmlFor="patientName" className="font-bold">
        Patient Name:
      </label>
      <input
        type="text"
        id="patientName"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        required
        className="input-field"
      />

      <label htmlFor="patientAge" className="font-bold">
        Age:
      </label>
      <input
        type="number"
        id="patientAge"
        value={patientAge}
        onChange={(e) => setPatientAge(e.target.value)}
        required
        className="input-field"
      />

      <label htmlFor="drugName" className="font-bold">
        Drug Name:
      </label>
      <input
        type="text"
        id="drugName"
        value={medicine.drugName}
        onChange={handleDrugNameChange}
        list="drugNamesList"
        className="input-field"
      />
      <datalist id="drugNamesList">
        {drugNames.map((name) => (
          <option key={name} value={name} />
        ))}
      </datalist>

      <label htmlFor="tabletCount" className="font-bold">
        Tablet Count:
      </label>
      <select
        id="tabletCount"
        value={medicine.tabletCount}
        onChange={handleTabletCountChange}
        className="input-field"
      >
        <option value="1">1</option>
        <option value="1/2">1/2</option>
        <option value="1/4">1/4</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="foodInstructions" className="font-bold">
        Food Instructions:
      </label>
      <select
        id="foodInstructions"
        value={medicine.foodInstructions}
        onChange={handleFoodInstructionsChange}
        className="input-field"
      >
        <option value="Before Meal">Before Meal</option>
        <option value="After Meal">After Meal</option>
      </select>

      <label htmlFor="frequency" className="font-bold">
        Frequency:
      </label>
      <select
        id="frequency"
        value={medicine.medInstructions}
        onChange={handleFrequencyChange}
        className="input-field"
      >
        <option value="Every 1 Hour">Every 1 Hour</option>
        <option value="Every 2 Hours">Every 2 Hours</option>
        <option value="Every 3 Hours">Every 3 Hours</option>
        <option value="Every 5 Hours">Every 5 Hours</option>
        <option value="Every 6 Hours">Every 6 Hours</option>
        <option value="Every 7 Hours">Every 7 Hours</option>
        <option value="Every 8 Hours">Every 8 Hours</option>
      </select>

      <button
        type="button"
        onClick={handleAddMedicine}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Add Medicine
      </button>
    </form>
  );
};

export default Form;
