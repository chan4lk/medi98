"use client"
import React, { useState } from 'react';
import { Header } from './Header';
import { Line } from './Line';
import { MediColumn } from './MediColumn';
import MedicationSelection from './MedicationSelection';
import jsPDF from 'jspdf';

interface TreatmentDetail {
    description: string;
    unitPrice: number;
    discount: number;
    price: number;
}

interface MedicationDetail {
    medication: string;
    quantity: number;
    unitPrice: number;
    discount: number;
    price: number;
}

const PatientManagementSystem: React.FC = () => {
    const [treatmentDetails, setTreatmentDetails] = useState<TreatmentDetail[]>([]);
    const [medicationDetails, setMedicationDetails] = useState<MedicationDetail[]>([]);
    const [discount, setDiscount] = useState<number>(0);

    const handleAddTreatment = () => {
        const newTreatmentDetails: TreatmentDetail = {
            description: "",
            unitPrice: 0,
            discount: 0,
            price: 0
        };
        setTreatmentDetails([...treatmentDetails, newTreatmentDetails]);
    };

    const handleAddMedication = () => {
        const newMedicationDetails: MedicationDetail = {
            medication: "",
            quantity: 0,
            unitPrice: 0,
            discount: 0,
            price: 0
        };
        setMedicationDetails([...medicationDetails, newMedicationDetails]);
    };

    const handleDescriptionChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newTreatmentDetails = [...treatmentDetails];
        newTreatmentDetails[index].description = e.target.value;
        setTreatmentDetails(newTreatmentDetails);
    };

    const handleUnitPriceChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newTreatmentDetails = [...treatmentDetails];
        newTreatmentDetails[index].unitPrice = parseFloat(e.target.value);
        newTreatmentDetails[index].price = newTreatmentDetails[index].unitPrice * (1 - newTreatmentDetails[index].discount / 100);
        setTreatmentDetails(newTreatmentDetails);
    };
    
    const handleDiscountChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newTreatmentDetails = [...treatmentDetails];
        newTreatmentDetails[index].discount = parseFloat(e.target.value);
        newTreatmentDetails[index].price = newTreatmentDetails[index].unitPrice * (1 - newTreatmentDetails[index].discount / 100);
        setTreatmentDetails(newTreatmentDetails);
    };
    

    const handleMedicationChange = (index: number, medication: string) => {
        const newMedicationDetails = [...medicationDetails];
        newMedicationDetails[index].medication = medication;
        setMedicationDetails(newMedicationDetails);
    };
    
    // In your JSX where you render MedicationSelection:
   
    

    const handleQuantityChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newMedicationDetails = [...medicationDetails];
        newMedicationDetails[index].quantity = parseInt(e.target.value);
        setMedicationDetails(newMedicationDetails);
    };

    const handleMedicationUnitPriceChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newMedicationDetails = [...medicationDetails];
        newMedicationDetails[index].unitPrice = parseFloat(e.target.value);
        setMedicationDetails(newMedicationDetails);
    };

    const handleMedicationDiscountChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newMedicationDetails = [...medicationDetails];
        newMedicationDetails[index].discount = parseFloat(e.target.value);
        setMedicationDetails(newMedicationDetails);
    };

    const handlePrintBill = () => {
        window.print();
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text('Prescription Details', 10, 10);
        let y = 20;
        medicationDetails.forEach((medication, index) => {
            const price = medication.quantity * medication.unitPrice * (1 - medication.discount / 100);
            doc.text(`Medication: ${medication.medication}`, 10, y);
            doc.text(`Quantity: ${medication.quantity}`, 10, y + 10);
            doc.text(`Unit Price: ${medication.unitPrice}`, 10, y + 20);
            doc.text(`Discount: ${medication.discount}`, 10, y + 30);
            doc.text(`Price: ${price}`, 10, y + 40);
            y += 50;
        });
        doc.save('prescription.pdf');
    };

    return (
        <div className='p-4 grid grid-cols-1 gap-4 bg-midnight text-tahiti'>
            <div className="bg-blue-100 text-white p-2">
                <Header />
            </div>
            <Line />
            <div className="flex justify-between pt-4">
                <button
                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-4 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
                    onClick={handleAddTreatment}
                >
                    Add Treatment
                </button>
                <button
                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
                    onClick={handleAddMedication}
                >
                    Add Medication
                </button>
            </div>
            <div className='p-4'>
                {treatmentDetails.map((treatment, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2">
                        <MediColumn label="Treatment" columnFor={`treatment-description-${index}`}>
                            <input type="text" value={treatment.description} onChange={(e) => handleDescriptionChange(index, e)} />
                        </MediColumn>
                        <MediColumn label="Unit Price" columnFor={`unit-price-${index}`}>
                            <input type="number" value={treatment.unitPrice} onChange={(e) => handleUnitPriceChange(index, e)} />
                        </MediColumn>
                        <MediColumn label="Discount" columnFor={`discount-${index}`}>
                            <input type="number" value={treatment.discount} onChange={(e) => handleDiscountChange(index, e)} />
                        </MediColumn>
                        <MediColumn label="Price" columnFor={`price-${index}`}>
                            <span>{treatment.price}</span>
                        </MediColumn>
                    </div>
                ))}
                {medicationDetails.map((medication, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2">
                        <MedicationSelection
                            onSelect={(selection) => handleMedicationChange(index, selection)}
                            // Here you can pass props like medication options if needed
                        />
                        <MediColumn label="Quantity" columnFor={`quantity-${index}`}>
                            <input type="number" value={medication.quantity} onChange={(e) => handleQuantityChange(index, e)} />
                        </MediColumn>
                        <MediColumn label="Unit Price" columnFor={`medication-unit-price-${index}`}>
                            <input type="number" value={medication.unitPrice} onChange={(e) => handleMedicationUnitPriceChange(index, e)} />
                        </MediColumn>
                        <MediColumn label="Discount" columnFor={`medication-discount-${index}`}>
                            <input type="number" value={medication.discount} onChange={(e) => handleMedicationDiscountChange(index, e)} />
                        </MediColumn>
                        <MediColumn label="Price" columnFor={`medication-price-${index}`}>
                            <span>{medication.price}</span>
                        </MediColumn>
                    </div>
                ))}
            </div>
            <div className="overflow-x-auto">
                <div className="flex justify-between pt-4">
                    <button
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
                        onClick={handleDownload}
                    >
                        Download Prescription
                    </button>
                    <button
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-4 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
                        onClick={handlePrintBill}
                    >
                        Print Bill
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PatientManagementSystem;
