"use client"
import { Header } from '../../components/Header';
import { Line } from '../../components/Line';
import { MediColumn } from '../../components/MediColumn';
import MedicationSelection from '../../components/MedicationSelection';
import jsPDF from 'jspdf';
import React, { useState, useEffect } from 'react';


interface MedicationDetails {
    selection: string;
    days: number;
    schedule: string;
    taking: string;
    notes: string;
    qty: number;
    price: number;
}

const NewPage: React.FC = () => {
    const [medicationDetails, setMedicationDetails] = useState<MedicationDetails>({
        selection: '',
        days: 5,
        schedule: '1',
        taking: '1',
        notes: '',
        qty: 15,
        price: 0,
    });

    const [tableData, setTableData] = useState<MedicationDetails[]>([]);

    useEffect(() => {
        const newPrice = parseInt(medicationDetails.taking) * parseInt(medicationDetails.schedule) * medicationDetails.days;
        setMedicationDetails({ ...medicationDetails, price: newPrice });
    }, [medicationDetails.taking, medicationDetails.schedule, medicationDetails.days]);

    const handleAdd = () => {
        const newMedicationDetails = { ...medicationDetails };
        setTableData([...tableData, newMedicationDetails]);
        setMedicationDetails({
            selection: '',
            days: 5,
            schedule: '1',
            taking: '1',
            notes: '',
            qty: 15,
            price: 0,
        });
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text('Prescription Details', 10, 10);
        let y = 20;
        tableData.forEach((data, index) => {
            doc.text(`Medication: ${data.selection}`, 10, y);
            doc.text(`Days: ${data.days}`, 10, y + 10);
            doc.text(`Schedule: ${data.schedule}`, 10, y + 20);
            doc.text(`Taking: ${data.taking}`, 10, y + 30);
            doc.text(`Notes: ${data.notes}`, 10, y + 40);
            doc.text(`Qty: ${data.qty}`, 10, y + 50);
            doc.text(`Price: ${data.price}`, 10, y + 60);
            y += 70;
        });
        doc.save('prescription.pdf');
    };

    const handleSave = () => {
        console.log("Prescription details saved:", tableData);
        // You can send an API request to save data to the server, or store it locally
    };

    return (
        <div className="p-4 bg-midnight text-tahiti">
            <div className="bg-blue-100 text-white p-2">
                <Header />
            </div>
            <Line />
            <div className="grid md:grid-cols-7 gap-4">
                <MedicationSelection onSelect={(selection) => setMedicationDetails({ ...medicationDetails, selection })} />
                <MediColumn label="No of Days" columnFor="days">
    <select
        id="days"
        className="input-field"
        onChange={(e) => setMedicationDetails({ ...medicationDetails, days: parseInt(e.target.value, 10) })}
        defaultValue="3" // Set the default value to "3"
    >
        <option value="1">Day 1</option>
        <option value="2">Day 2</option>
        <option value="3">Day 3</option> {/* Defaulted to Day 3 */}
        <option value="4">Day 4</option>
        <option value="5">Day 5</option>
        <option value="6">Day 6</option>
        <option value="7">Day 7</option>
    </select>
</MediColumn>


                <MediColumn label="Schedule" columnFor="schedule">
                    <select
                        defaultValue="1"
                        id="schedule"
                        className="input-field"
                        onChange={(e) => setMedicationDetails({ ...medicationDetails, schedule: e.target.value })}
                    >
                        <option value="1">Once</option>
                        <option value="2">TD</option>
                        <option value="3">TTD</option>
                        <option value="4">QD</option>
                    </select>
                </MediColumn>
                <MediColumn label="Taking" columnFor="taking">
                    <select
                        defaultValue="1"
                        id="taking"
                        className="input-field"
                        onChange={(e) => setMedicationDetails({ ...medicationDetails, taking: e.target.value })}
                    >
                        <option value="1">AC</option>
                        <option value="2">BC</option>
                    </select>
                </MediColumn>
                <MediColumn label="Qty" columnFor="qty">
                    <span>{medicationDetails.qty}</span>
                </MediColumn>
                <MediColumn label="Price" columnFor="price">
                    <span>{medicationDetails.price}</span>
                </MediColumn>
            </div>
            <div className="grid md:grid-cols-7 gap-4 p-4">
            <div className='p-4 md:col-span-5 sm:col-span-7'>
                        <textarea
                            id="notes"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Notes..."
                            value={medicationDetails.notes}
                            onChange={(e) => setMedicationDetails({ ...medicationDetails, notes: e.target.value })}
                        ></textarea>
                    </div>
                    <div className='grid md:grid-cols-1 sm:grid-cols-1 md:col-span-2 sm:col-span-7'>
                        <div className='grid md:grid-cols-2 sm:grid-cols-2 pt-2'>
                            <div className="block text-md font-medium leading-6 text-gray-900">Availability</div>
                            <div className="relative rounded-md shadow-sm md:pl-2 pb-2">300</div>
                        </div>
                        <div className="p-4 grid grid-cols-1 gap-4 bg-midnight text-tahiti justify">
    {/* Content */}

                        <button
          className="text-black font-medium text-sm px-5 py-2.5 bg-white border border-black hover:bg-blue-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-200"
          onClick={handleAdd}
        >
          Add Medication
        </button>
                        </div>
                    </div>
                </div>
            
                <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-400">
                    <thead>
                        <tr className="bg-blue-200 text-blue-800">
                            <th className="border border-gray-400 p-2">MEDICATION</th>
                            <th className="border border-gray-400 p-2">DAYS</th>
                            <th className="border border-gray-400 p-2">SCHEDULE</th>
                            <th className="border border-gray-400 p-2">TAKING</th>
                            <th className="border border-gray-400 p-2">NOTES</th>
                            <th className="border border-gray-400 p-2">QTY</th>
                            <th className="border border-gray-400 p-2">PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index} className="text-center">
                                <td className="border border-gray-400 p-2">{data.selection}</td>
                                <td className="border border-gray-400 p-2">{data.days}</td>
                                <td className="border border-gray-400 p-2">{data.schedule}</td>
                                <td className="border border-gray-400 p-2">{data.taking}</td>
                                <td className="border border-gray-400 p-2">{data.notes}</td>
                                <td className="border border-gray-400 p-2">{data.qty}</td>
                                <td className="border border-gray-400 p-2">{data.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-end pt-4s pt-4">
                <button
    className="text-blue-900 font-medium text-sm px-5 py-2.5 bg-blue-100 border border-black hover:bg-blue-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-200 mr-2"
    onClick={handlePrint}
>
    Print Prescription
</button>
<button
    className="text-blue-900 font-medium text-sm px-5 py-2.5 bg-blue-100 border border-black hover:bg-blue-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-200 mr-2"
    onClick={handleDownload}
>
    Download Prescription
</button>
<button
    className="text-blue-900 font-medium text-sm px-5 py-2.5 bg-blue-100 border border-black hover:bg-blue-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-200"
    onClick={handleSave}
>
    Save Prescription
</button>

                </div>
            </div>
        </div>
    );
};

export default NewPage;
