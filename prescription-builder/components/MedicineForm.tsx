"use client";

import { useEffect, useState } from "react";
import { drugNames } from "./drugNames";

export const MedicineForm = () => {
    let patientNameInput: HTMLInputElement;
    let patientAgeInput: HTMLInputElement;
    let medicineListContainer: HTMLElement;
    let prescriptionList: HTMLElement;
    let printedPrescriptionList: HTMLElement;
    let currentDateTimeContainer: HTMLElement;
    let addPrescriptionButton: HTMLElement;
    let patientDetailsAdded = false;
    const [time, setTime] = useState('00:00:00');

    useEffect(() => {
        patientNameInput = document.getElementById('patientName') as HTMLInputElement;
        patientAgeInput = document.getElementById('patientAge') as HTMLInputElement;
        medicineListContainer = document.getElementById('medicineList') as HTMLElement;
        prescriptionList = document.getElementById('prescriptionList') as HTMLElement;
        printedPrescriptionList = document.getElementById('printedPrescriptionList') as HTMLElement;
        currentDateTimeContainer = document.getElementById('currentDateTime') as HTMLElement;
        addPrescriptionButton = document.getElementById('addPrescriptionButton') as HTMLElement;
        

        updateCurrentDateTime();

        setInterval(updateCurrentDateTime, 1000);


        return () => {

        }
    }, [])


    function addMedicine() {
        const medicineContainer = document.createElement('div');
        medicineContainer.classList.add('medicine-container');

        const drugInput = document.createElement('input');
        drugInput.type = 'text';
        drugInput.placeholder = 'Drug Name';
        drugInput.autocomplete = 'off';

        const suggestionsList = document.createElement('ul');
        suggestionsList.classList.add('suggestions');

        const tabletCountInput = document.createElement('input');
        tabletCountInput.type = 'number';
        tabletCountInput.placeholder = 'Tablet Count';
        tabletCountInput.required = true;

        const foodInstructionsSelect = document.createElement('select');
        const foodOptions = ['Before Meal', 'After Meal'];
        foodOptions.forEach(option => {
            const foodOption = document.createElement('option');
            foodOption.value = option;
            foodOption.textContent = option;
            foodInstructionsSelect.appendChild(foodOption);
        });

        const medInstructionsSelect = document.createElement('select');
        const medOptions = ['Every 1 Hours', 'Every 2 Hours', 'Every 3 Hours', 'Every 4 Hours', 'Every 5 Hours', 'Every 6 Hours', 'Every 7 Hours', 'Every 8 Hours'];
        medOptions.forEach(option => {
            const medOption = document.createElement('option');
            medOption.value = option;
            medOption.textContent = option;
            medInstructionsSelect.appendChild(medOption);
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Medicine';
        removeButton.type = 'button';
        removeButton.onclick = function () {
            medicineContainer.remove();
        };

        medicineContainer.appendChild(drugInput);
        medicineContainer.appendChild(suggestionsList);
        medicineContainer.appendChild(tabletCountInput);
        medicineContainer.appendChild(foodInstructionsSelect);
        medicineContainer.appendChild(medInstructionsSelect);
        medicineContainer.appendChild(removeButton);

        medicineListContainer.appendChild(medicineContainer);

        drugInput.addEventListener('input', function () {
            handleInput(drugInput, suggestionsList);
        });

        suggestionsList.addEventListener('click', function (event) {
            handleSuggestionClick(event, drugInput, suggestionsList);
        });

        // Show the "Add Prescription" button after adding a medicine
        addPrescriptionButton.style.display = 'block';
    }

    function addPrescription() {
        if (patientDetailsAdded) {
            alert("Patient Details Can Only be Added Once.");
            return;
        }

        const patientName = patientNameInput.value.trim();
        const patientAge = patientAgeInput.value.trim();

        if (patientName !== '' && patientAge !== '') {
            const medicines = document.querySelectorAll('.medicine-container');
            const prescriptionItem = document.createElement('div');
            prescriptionItem.classList.add('prescription-details');

            const prescriptionTable = document.createElement('table');
            prescriptionTable.innerHTML = `
                <tr>
                    <th colspan="4" style="text-align: center;">Patient: ${patientName}, Age: ${patientAge}</th>
                </tr>
                <tr>
                    <th style="text-align: center;">Drug Name</th>
                    <th style="text-align: center;">Tablet Count</th>
                    <th style="text-align: center;">Meal Instructions</th>
                    <th style="text-align: center;">Frequency</th>
                </tr>
            `;

            medicines.forEach((medicine: Element, index) => {
                const drugName = medicine.querySelector('input')?.value.trim();
                const tabletCount = (medicine.querySelector('input[type="number"]') as HTMLInputElement).value.trim();
                const foodInstructions = medicine.querySelector('select')?.value;
                const medInstructions = (medicine.querySelector('select:nth-child(5)') as HTMLInputElement).value;

                if (drugName !== '' && tabletCount !== '') {
                    const newRow = prescriptionTable.insertRow(-1);
                    newRow.innerHTML = `
                        <td style="text-align: center;">${drugName}</td>
                        <td style="text-align: center;">${tabletCount}</td>
                        <td style="text-align: center;">${foodInstructions}</td>
                        <td style="text-align: center;">${medInstructions}</td>
                    `;
                }
            });

            prescriptionItem.appendChild(prescriptionTable);
            prescriptionList.appendChild(prescriptionItem);

            const downloadPrintButtons = document.getElementById('downloadPrintButtons') as HTMLDivElement;
            downloadPrintButtons.style.display = 'block';

            medicines.forEach(medicine => {
                medicine.remove();
            });

            patientDetailsAdded = true;

            // Hide the "Add Prescription" button after adding prescription
            addPrescriptionButton.style.display = 'none';
        }
    }

    function PrintElem(elem: string) {
        var mywindow = window.open('', 'PRINT', 'height=400,width=600') as Window;

        mywindow.document.write('<html><head><title>' + document.title + '</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<h1>' + document.title + '</h1>');
        mywindow.document.write((document.getElementById(elem) as HTMLElement).innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();

        return true;
    }

    function printPrescription() {
        PrintElem('prescriptionList');
    }

    function clearForm() {
        (document.getElementById('prescriptionForm') as HTMLFormElement).reset();
        medicineListContainer.innerHTML = '';
        prescriptionList.innerHTML = '';
        printedPrescriptionList.innerHTML = '';
        patientDetailsAdded = false;

        // Show the "Add Prescription" button after clearing the form
        addPrescriptionButton.style.display = 'block';
    }

    function updateCurrentDateTime() {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        setTime(now.toLocaleString('en-US', options));
    }

    function handleInput(input: HTMLInputElement, suggestionsList: HTMLElement) {
        const inputValue = input.value.toLowerCase();
        const suggestions = drugNames.filter(name => name.toLowerCase().includes(inputValue));

        suggestionsList.innerHTML = '';

        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;

            li.addEventListener('mouseover', function () {
                li.style.backgroundColor = 'lightblue';
                li.style.borderColor = 'darkblue';
            });

            li.addEventListener('mouseout', function () {
                li.style.backgroundColor = '';
                li.style.borderColor = '#ccc';
            });

            suggestionsList.appendChild(li);
        });

        if (suggestions.length === 1 && suggestions[0].toLowerCase() === inputValue) {
            input.value = suggestions[0];
            suggestionsList.innerHTML = '';
        }
    }

    function handleSuggestionClick(event: any, input: HTMLInputElement, suggestionsList: HTMLElement) {
        if (event.target?.tagName === 'LI') {
            input.value = event.target.textContent;
            suggestionsList.innerHTML = '';
        }
    }


    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <form id="prescriptionForm">
                    <label htmlFor="patientName">Patient Name:</label>
                    <input type="text" id="patientName" required />

                    <label htmlFor="patientAge">Age:</label>
                    <input type="number" id="patientAge" required />

                    <div id="medicineList"></div>
                </form>

                <div id="prescriptionList">
                </div>

                <div id="downloadPrintButtons" style={{ display: 'none' }}>
                    <button id="printButton" type="button" onClick={printPrescription}>
                        <span id="printIcon">🖨️</span> Print Prescription
                    </button>
                </div>
                <div>
                    <button id="addMedicineButton" onClick={addMedicine}>
                        <i className="fas fa-plus"></i> Add Medicine
                    </button>
                    <button id="addPrescriptionButton" onClick={addPrescription} style={{ display: 'none' }}>
                        <i className="fas fa-prescription"></i> Add Prescription
                    </button>

                    <button id="clearFormButton" onClick={clearForm}>
                        <i className="fas fa-trash"></i> Clear
                    </button>
                </div>
            </main>
            <div id="printContainer">
                <div id="printedPrescriptionList">

                </div>
            </div>

            <div id="printUserInputResultsContainer"></div>
        </>
    );
}