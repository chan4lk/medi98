"use client"
import React, { useState, useEffect } from 'react';
import Form from './Form';
import { Medicine } from '../models/types';


const OldPage: React.FC = () => {

  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [counter, setCounter] = useState(1);
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');

  const addMedicine = (medicine: Medicine) => {
    setMedicines([...medicines, { ...medicine, id: counter }]);
    setCounter(counter + 1);
  };
  const editMedicine = (id: number, updatedMedicine: Medicine) => {
    const updatedMedicines = medicines.map((medicine) =>
      medicine.id === id ? { ...medicine, ...updatedMedicine } : medicine
    );
    setMedicines(updatedMedicines);
  };

  const deleteMedicine = (id: number) => {
    const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(updatedMedicines);
  };
  
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
  
    const currentDate = new Date();
    const localDate = currentDate.toLocaleDateString();
    const currentTime = currentDate.toLocaleTimeString();
  
    const printContent = `
      <html>
        <head>
          <title>Medicine Prescription</title>
          <style>
            /* Add your print styles here */
            body {
              font-family: Arial, sans-serif;
            }
            h1, h2 {
              color: #333;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 10px;
            }
            th, td {
              border: 1px solid #000;
              padding: 8px;
              text-align: center;
            }
            th {
              background-color: #ddd; /* Light gray background for header */
            }
            tr:nth-child(even) {
              background-color: #fff; /* Light gray background for even rows */
            }
            tr:nth-child(odd) {
              background-color: #fff; /* White background for odd rows */
            }
            * Set print dimensions */
        @media print {
          body {
            width: 8.5in;
            height: 11in;
            margin: 0; /* Reset margin for print */
          }
        }
          </style>
        </head>
        <body>
          <h1>Patient Information</h1>
          <h3>Patient Name: ${patientName}</h3>
          <h3>Patient Age: ${patientAge}</h3>
          <p>Local Date: ${localDate}</p>
          <p>Current Date/Time: ${currentDate}</p>
  
          <h2>Prescribed Medicines</h2>
          <table>
            <thead>
              <tr>
                <th>Drug Name</th>
                <th>Tablet Count</th>
                <th>Food Instructions</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              ${medicines.map((medicine) => (
                `<tr>
                  <td>${medicine.drugName}</td>
                  <td>${medicine.tabletCount}</td>
                  <td>${medicine.foodInstructions}</td>
                  <td>${medicine.medInstructions}</td>
                </tr>`
              )).join('')}
            </tbody>
          </table>
  
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `;
  
    printWindow!.document.open();
    printWindow!.document.write(printContent);
    printWindow!.document.close();
  };
  
  const handleClear = () => {
    setPatientName('');
    setPatientAge('');
    setMedicines([]);
    setCounter(1);
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center text-black justify-center min-h-screen bg-blue-200 p-4">
      <header className="bg-blue-400 p-4 text-center w-1/4">
        <h1 className="text-2xl font-bold">Prescription Builder</h1>
        <p className="text-sm mt-2">
          Current Date and Time: {currentTime.toLocaleString()}
        </p>
      </header>

      <Form onAddMedicine={addMedicine} patientName={patientName} patientAge={patientAge} setPatientName={setPatientName} setPatientAge={setPatientAge} />
      <MedicineTable medicines={medicines} onEdit={editMedicine} onDelete={deleteMedicine} />
      <button onClick={handlePrint} className="bg-purple-300  text-black p-2 rounded hover:bg-blue-400 mt-4 w-full max-w-md">
        Print Prescription
      </button>
      <button onClick={handleClear} className="bg-red-500 text-black p-2 rounded hover:bg-red-800 mt-4 w-full max-w-md">
        Clear
      </button>
    </div>
  );
};

interface MedicineTableProps {
  medicines: Medicine[];
  onEdit: (id: number, updatedMedicine: Medicine) => void;
  onDelete: (id: number) => void;
}

const MedicineTable: React.FC<MedicineTableProps> = ({ medicines, onEdit, onDelete }) => {
  return (
    <div className="mt-8 w-full max-w-md ">
      <h2 className="text-xl font-bold mb-4">Medicine List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-900 p-2">Drug Name</th>
            <th className="border border-gray-900 p-2">Tablet Count</th>
            <th className="border border-gray-900 p-2">Food Instructions</th>
            <th className="border border-gray-900 p-2">Frequency</th>
            <th className="border border-gray-900 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr  className="bg-gray-200 text-align: center" key={medicine.id}>
              <td className="border border-gray-900 p-2">{medicine.drugName}</td>
              <td className="border border-gray-900 p-2">{medicine.tabletCount}</td>
              <td className="border border-gray-900 p-2">{medicine.foodInstructions}</td>
              <td className="border border-gray-900 p-2">{medicine.medInstructions}</td>
              <td className="border border-gray-900 p-2">
                <button
                  onClick={() => {
                    const updatedMedicine     = prompt('Edit Medicine:', medicine.drugName);
                    if (updatedMedicine !== null) {
                      onEdit(medicine.id, { ...medicine, drugName: updatedMedicine });
                    }
                  }}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(medicine.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OldPage;