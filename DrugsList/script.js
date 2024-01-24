const drugNames = ['Aspirin', 'Paracetamol', 'Ibuprofen', 'Lisinopril', 'Simvastatin', 'Metformin'];

const patientNameInput = document.getElementById('patientName');
const patientAgeInput = document.getElementById('patientAge');
const medicineListContainer = document.getElementById('medicineList');
const prescriptionList = document.getElementById('prescriptionList');
const printedPrescriptionList = document.getElementById('printedPrescriptionList');
const currentDateTimeContainer = document.getElementById('currentDateTime');

let patientDetailsAdded = false;

updateCurrentDateTime();

setInterval(updateCurrentDateTime, 1000);

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
        foodOption.value = option.toLowerCase();
        foodOption.textContent = option;
        foodInstructionsSelect.appendChild(foodOption);
    });

    const medInstructionsSelect = document.createElement('select');
    const medOptions = ['Every 1 Hours', 'Every 2 Hours','Every 3 Hours', 'Every 4 Hours','Every 5 Hours', 'Every 6 Hours','Every 7 Hours', 'Every 8 Hours'];
    medOptions.forEach(option => {
        const medOption = document.createElement('option');
        medOption.value = option.toLowerCase();
        medOption.textContent = option;
        medInstructionsSelect.appendChild(medOption);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Medicine';
    removeButton.type = 'button';
    removeButton.onclick = function() {
        medicineContainer.remove();
    };

    medicineContainer.appendChild(drugInput);
    medicineContainer.appendChild(suggestionsList);
    medicineContainer.appendChild(tabletCountInput);
    medicineContainer.appendChild(foodInstructionsSelect);
    medicineContainer.appendChild(medInstructionsSelect);
    medicineContainer.appendChild(removeButton);

    medicineListContainer.appendChild(medicineContainer);

    drugInput.addEventListener('input', function() {
        handleInput(drugInput, suggestionsList);
    });

    suggestionsList.addEventListener('click', function(event) {
        handleSuggestionClick(event, drugInput, suggestionsList);
    });
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

        medicines.forEach((medicine, index) => {
            const drugName = medicine.querySelector('input').value.trim();
            const tabletCount = medicine.querySelector('input[type="number"]').value.trim();
            const foodInstructions = medicine.querySelector('select').value;
            const medInstructions = medicine.querySelector('select:nth-child(5)').value;

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

        const downloadPrintButtons = document.getElementById('downloadPrintButtons');
        downloadPrintButtons.style.display = 'block';

        medicines.forEach(medicine => {
            medicine.remove();
        });

        patientDetailsAdded = true;
    }
}

function printPrescription() {
    const printedPrescriptionContent = document.getElementById('printedPrescriptionList').innerHTML;
    const printContainer = document.getElementById('printUserInputResultsContainer');
    printContainer.innerHTML = printedPrescriptionContent;

    html2canvas(printContainer, {
        allowTaint: true,
        useCORS: true
    }).then(canvas => {
        const dataURL = canvas.toDataURL();

        const printWindow = window.open();
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write('<img src="' + dataURL + '" />');
        printWindow.document.write('</body></html>');

        printWindow.print();
        printWindow.close();
    });

    printContainer.innerHTML = '';
}

function clearForm() {
    document.getElementById('prescriptionForm').reset();
    medicineListContainer.innerHTML = '';
    prescriptionList.innerHTML = '';
    printedPrescriptionList.innerHTML = '';
    patientDetailsAdded = false;
}

function updateCurrentDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    currentDateTimeContainer.textContent = now.toLocaleString('en-US', options);
}

function handleInput(input, suggestionsList) {
    const inputValue = input.value.toLowerCase();
    const suggestions = drugNames.filter(name => name.toLowerCase().includes(inputValue));

    suggestionsList.innerHTML = '';

    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;

        li.addEventListener('mouseover', function() {
            li.style.backgroundColor = 'lightblue';
            li.style.borderColor = 'darkblue';
        });

        li.addEventListener('mouseout', function() {
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

function handleSuggestionClick(event, input, suggestionsList) {
    if (event.target.tagName === 'LI') {
        input.value = event.target.textContent;
        suggestionsList.innerHTML = '';
    }
}
