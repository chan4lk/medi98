"use client"
import React, { useState } from 'react';
import { Header } from './Header';
import { MediColumn } from './MediColumn';

interface TreatmentDetail {
    description: string;
    unitPrice: number;
    discount: number;
    price: number;
}

const PrescriptionApp: React.FC = () => {
    const [treatmentDetails, setTreatmentDetails] = useState<TreatmentDetail[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [finalPrice, setFinalPrice] = useState<number>(0);

    // Function to handle adding treatment details
    const handleAddTreatment = () => {
        const newTreatmentDetails: TreatmentDetail = {
            description: "",
            unitPrice: 0,
            discount: 0,
            price: 0
        };
        setTreatmentDetails([...treatmentDetails, newTreatmentDetails]);
    };

    // Function to calculate final price
    const calculateFinalPrice = () => {
        let totalPrice = 0;
        treatmentDetails.forEach(treatment => {
            totalPrice += treatment.unitPrice - treatment.discount;
        });
        setFinalPrice(totalPrice);
    };

    // Function to handle description input change
    const handleDescriptionChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newTreatmentDetails = [...treatmentDetails];
        newTreatmentDetails[index].description = e.target.value;
        setTreatmentDetails(newTreatmentDetails);
    };

    // Function to handle unit price input change
    const handleUnitPriceChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newTreatmentDetails = [...treatmentDetails];
        newTreatmentDetails[index].unitPrice = parseFloat(e.target.value);
        setTreatmentDetails(newTreatmentDetails);
        calculateFinalPrice();
    };

    // Function to handle discount input change
    const handleDiscountChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newTreatmentDetails = [...treatmentDetails];
        newTreatmentDetails[index].discount = parseFloat(e.target.value);
        setTreatmentDetails(newTreatmentDetails);
        calculateFinalPrice();
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-row flex-grow">
                <div className="flex-1 p-4">
                    <button onClick={handleAddTreatment} className="bg-blue-500 text-white px-4 py-2 mb-4">Add Treatment</button>
                    {/* Render treatment details in four columns */}
                    {treatmentDetails.map((treatment, index) => (
                        <div key={index} className="grid grid-cols-4 gap-2">
                            <MediColumn label="Treatment" columnFor={`treatment-description-${index}`}>
                                <input type="text" value={treatment.description} onChange={(e) => handleDescriptionChange(index, e)} />
                            </MediColumn>
                            <MediColumn label={index === 0 ? "Unit Price (LKR)" : ""} columnFor={`unit-price-${index}`}>
                                <input type="number" value={treatment.unitPrice} onChange={(e) => handleUnitPriceChange(index, e)} />
                            </MediColumn>
                            <MediColumn label={index === 0 ? "Discount (%)" : ""} columnFor={`discount-${index}`}>
                                <input type="number" value={treatment.discount} onChange={(e) => handleDiscountChange(index, e)} />
                            </MediColumn>
                            <MediColumn label={index === 0 ? "Price (LKR)" : ""} columnFor={`price-${index}`}>
                                <span>{(treatment.unitPrice - treatment.discount).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
                            </MediColumn>
                        </div>
                    ))}
                </div>
                <div className="p-4">
                    <button onClick={handleAddTreatment} className="bg-blue-500 text-white px-4 py-2 mb-4">Add Medication</button>
                </div>
            </div>
            <div className="flex flex-row justify-between p-4">
                <div>
                    <label className="block mb-2">Discount:</label>
                    <input type="number" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value))} />
                </div>
                <div>
                    <label className="block mb-2">Final Price (LKR):</label>
                    <span>{finalPrice.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
                </div>
            </div>
        </div>
    );
};

export default PrescriptionApp;
