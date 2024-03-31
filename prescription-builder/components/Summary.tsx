import React from 'react';

export const Summary = () => (


<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Medication
                </th>
                <th scope="col" className="px-6 py-3">
                    Days
                </th>
                <th scope="col" className="px-6 py-3">
                    Schedule
                </th>
                <th scope="col" className="px-6 py-3">
                    Taking
                </th>
                <th scope="col" className="px-6 py-3">
                    Notes
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Aspirin
                </th>
                <td className="px-6 py-4">
                    5
                </td>
                <td className="px-6 py-4">
                    Once
                </td>
                <td className="px-6 py-4">
                    AC
                </td>
                <td className="px-6 py-4">
         
                </td>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Paracetamol
                </th>
                <td className="px-6 py-4">
                    5
                </td>
                <td className="px-6 py-4">
                    Once
                </td>
                <td className="px-6 py-4">
                    AC
                </td>
                <td className="px-6 py-4">
                    If Needed
                </td>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    $199
                </td>
            </tr>
            <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Panadol
                </th>
                <td className="px-6 py-4">
                    5
                </td>
                <td className="px-6 py-4">
                    Once
                </td>
                <td className="px-6 py-4">
                    AC
                </td>
                <td className="px-6 py-4">

                </td>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    $299
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr className="font-semibold text-black">
                <th scope="row" className="px-6 py-3 text-base">Total</th>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3">$21,000</td>
            </tr>
        </tfoot>
    </table>
</div>

);
