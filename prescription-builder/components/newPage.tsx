import React from 'react';
import { Header } from './Header';
import { Line } from './Line';
import { MediColumn } from './MediColumn';

const NewPage: React.FC = () => {
    return <div className='p-4 grid grid-cols-1 gap-4 bg-midnight text-tahiti'>
        <Header />
        <Line />
        <div>
            <div className='grid md:grid-cols-7 gap-4'>
                <MediColumn label="Medication" columnFor="medication" span={2}>
                    <input type="text" name="medication" id="medication" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="aspirin" />
                </MediColumn>
                <MediColumn label={"No of Days"} columnFor="days">
                    <input type="number" defaultValue="5" name="days" id="days" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="5" />
                </MediColumn>
                <MediColumn label="Schedule" columnFor="schedule">
                    <select title='schedule' defaultValue={"1"} id="schedule" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option value="1">Once</option>
                        <option value="2">TD</option>
                        <option value="3">TTD</option>
                        <option value="4">QD</option>
                    </select>
                </MediColumn>
                <MediColumn label="Taking" columnFor="taking">
                    <select defaultValue={"1"} title="taking" id="taking" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option value="1">AC</option>
                        <option value="2">BC</option>
                    </select>
                </MediColumn>
                <MediColumn label="Qty" columnFor="qty">
                    <span>15</span>
                </MediColumn>
                <MediColumn label="Price" columnFor="price">
                    <span>150.00</span>
                </MediColumn>
            </div>
            <div className='grid md:grid-cols-7 pt-2 gap-4'>
                <div className='md:col-span-5 sm:col-span-7'>
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Notes..."></textarea>
                </div>
                <div className='grid md:grid-cols-1 sm:grid-cols-1 md:col-span-2 sm:col-span-7'>
                    <div className='grid md:grid-cols-2 sm:grid-cols-2 pt-2'>
                        <div className="block text-md font-medium leading-6 text-gray-900">Availability</div>
                        <div className="relative rounded-md shadow-sm md:pl-2 pb-2">300</div>
                    </div>
                    <div className='grid md:col-span-2 sm:col-span-2'><button type="button" className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-5 mb-2 bg-blue-600 hover:bg-blue-700 outline-none focus:ring-blue-800">Add</button></div>
                </div>
            </div>
        </div>

        <Line />
        <div></div>
    </div>
};

export default NewPage;