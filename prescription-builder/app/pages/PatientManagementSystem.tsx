"use client"
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Line } from '../../components/Line';
import { MediColumn } from '../../components/MediColumn';
import MedicationSelection from '../../components/MedicationSelection';
import jsPDF from 'jspdf'; // Import jsPDF library for PDF generation


interface MedicationDetails {
    selection: string;
    days: number;
    schedule: string;
    taking: string;
    notes: string;
    qty: number;
    price: number;
}

const newPage: React.FC = () => {
    const [medicationDetails, setMedicationDetails] = useState<MedicationDetails>({
        selection: '',
        days: 5,
        schedule: '1',
        taking: '1',
        notes: '',
        qty: 15,
        price: 150.00,
    });

    const [tableData, setTableData] = useState<MedicationDetails[]>([]);

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
            price: 150.00,
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
        // Logic to save prescription details
        console.log("Prescription details saved:", tableData);
        // You can send an API request to save data to the server, or store it locally
    };

    return (
        <div className='p-4 grid grid-cols-1 gap-4 bg-midnight text-tahiti'>
            <div className="bg-blue-100 text-white p-2">
                <Header />
            </div>
            <Line />
            <div>
                <div className='grid md:grid-cols-7 gap-4'>
                    <MedicationSelection onSelect={(selection) => setMedicationDetails({ ...medicationDetails, selection })} />
                    <MediColumn label={"No of Days"} columnFor="days">
                        <input
                            type="number"
                            defaultValue="5"
                            name="days"
                            id="days"
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="5"
                            onChange={(e) => setMedicationDetails({ ...medicationDetails, days: parseInt(e.target.value, 10) })}
                        />
                    </MediColumn>
                    <MediColumn label="Schedule" columnFor="schedule">
                        <select
                            title='schedule'
                            defaultValue={"1"}
                            id="schedule"
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                            defaultValue={"1"}
                            title="taking"
                            id="taking"
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <div className='p-4 grid md:grid-cols-7 pt-2 gap-4'>
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
                        <div className='grid md:col-span-2 sm:col-span-2'>
                            <button
                                type="button"
                                className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-5 mb-2 bg-blue-600 hover:bg-blue-700 outline-none focus:ring-blue-800"
                                onClick={handleAdd}
                            >
                                Add
                            </button>
                        </div>
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
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-4 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
        onClick={handlePrint}
    >
        Print Prescription
    </button>
    <button
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-4 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
        onClick={handleDownload}
    >
        Download Prescription
    </button>
    <button
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
        onClick={handleSave}
    >
        Save Prescription
    </button>
</div>


            </div>
        </div>
    );
};

export default newPage;
