const drugNames = [
    'Aspirin', 
    'Paracetamol', 
    'Ibuprofen', 
    'Lisinopril', 
    'Simvastatin', 
    'Metformin',
    'Zinc oxide',
    'Zinc sulfate',
    'Zolendronic acid',
    'Vinblastine',
    'Vincristine',
    'Vinorelbine',
    'Vitamin A + Vitamin D',
    'Vitamin B complex',
    'Vitamin D3+ Calcium Carbonate',
    'Voriconazole',
    'Warfarin',
    'Water for injection',
    'Xylometazoline',
    'Yellow fever vaccine',
    'Zidovudine',
    'Zidovudine+ Lamivudine',
    'Zidovudine+ Lamivudine+ Nevirapine',
    'Abacavir',
    'Acetazolamide',
    'Acetylcysteine',
    'Acetylsalicylic acid',
    'Aciclovir',
    'Adenosine',
    'Albendazole',
    'Alendronic acid',
    'Alfacalcidol',
    'Allopurinol',
    'Aluminium hydroxide',
    'Amikacin',
    'Aminoacid',
    'Aminophylline',
    'Amiodarone',
    'Amitriptyline',
    'Amoxicillin',
    'Amoxicillin + clavulanic acid',
    'Amphotericin B',
    'Ampicillin',
    'Anastrazole',
    'Anti D immunoglobulin (human)',
    'Antirabies equine serum',
    'Antitetanus immunoglobulin',
    'Antivenom serum',
    'Aqueous cream',
    'Artemether with Lumefantrine',
    'Ascorbic acid',
    'Asparaginase',
    'Atenolol',
    'Atorvastatin',
    'Atracurium',
    'Atropine',
    'Azathioprine',
    'Azithromycin',
    'Baclofen',
    'Balanced salt',
    'Barium sulfate',
    'BCG vaccine',
    'Beclometasone',
    'Benzathine benzylpenicillin',
    'Benzoic acid + salicylic acid',
    'Benztropin mesylate',
    'Benzyl benzoate',
    'Benzyl peroxide',
    'Benzylpenicillin',
    'Beractant',
    'Betahistine',
    'Betametasone',
    'Betametasone + Neomycin',
    'Betaxalol',
    'Bicalutamide',
    'Bisacodyl',
    'Bleomycin sulfate',
    'Bupivacaine',
    'Calamine',
    'Calcitriol',
    'Calcium carbonate/ lactate',
    'Calcium folinate',
    'Calcium gluconate',
    'Capecitabine',
    'Captopril',
    'Carbamazepine',
    'Carbimazole',
    'Carboplatin',
    'Carvedilol',
    'Cefalexin',
    'Cefipime',
    'Cefotaxime',
    'Ceftazidime',
    'Ceftriaxone',
    'Cefuroxime',
    'Cetirizine',
    'Cetrimide',
    'Charcoal, activated',
    'Chloral Hydrate',
    'Chlorambucil',
    'Chloramphenicol',
    'Chlordiazepoxide',
    'Chlorhexidine',
    'Chlorine base compound',
    'Chloroquine',
    'Chlorphenamine',
    'Chlorpromazine',
    'Ciclosporin',
    'Cinnarizine',
    'Ciprofloxacin',
    'Cisplatin',
    'Clarithromycin',
    'Clindamycin',
    'Clofazimine',
    'Clomifene',
    'Clomipramine',
    'Clonazepam',
    'Clopidogrel',
    'Clotrimazole',
    'Cloxacillin',
    'Clozapine',
    'Coal tar',
    'Coconut oil compound',
    'Codeine phosphate',
    'Cold compounds to prepare radio pharmaceuticals',
    'Co‐magaldrox',
    'Compound Sodium lactate',
    'Condoms',
    'Conjugated estrogens',
    'Copper containing device',
    'Cyanocobalamin',
    'Cyclopentolate',
    'Cyclophosphamide',
    'Cycloserine',
    'Cyproheptadine',
    'Cytarabine',
    'Dacarbazine',
    'Dactinomycin',
    'Deferiprone',
    'Deferoxamine',
    'Desmopressin',
    'Dexamethasone',
    'Dextran 70',
    'Diaphragms (male/female)',
    'Diazepam',
    'Diclofenac sodium',
    'Didanosine',
    'Diethylcarbamazine citrate',
    'Digoxin',
    'Diltiazem',
    'Dimercaprol',
    'Dinoprostone',
    'Diphtheria and tetanus (Adult) (aDT) vaccine',
    'Diphtheria and tetanus (DT) vaccine',
    'Diphtheria, Pertussis and Tetanus (DPT) vaccine',
    'Dithranol',
    'DL‐methionine',
    'Dobutamine',
    'Docetaxel',
    'Domperidone',
    'Dopamine',
    'Dopamine agonist',
    'Dorzolamide',
    'Doxorubicin',
    'Doxycycline',
    'Duloxetine',
    'Edrophonium',
    'Efavirenz',
    'Emtricitabine + tenofovir',
    'Emtricitabine + tenofovir + Efavirenz',
    'Emulsifying ointment',
    'Enalapril',
    'Enoxaparin',
    'Ephedrine',
    'Epirubicin',
    'Ergocalciferol',
    'Ergometrine',
    'Erythromycin',
    'Erythropoetin',
    'Esmolol',
    'Ethambutol',
    'Ethanol',
    'Ethinylestradiol',
    'Ethinylestradiol + Levonorgestrel',
    'Ethionamide',
    'Ethosuximide',
    'Etonogestrel',
    'Etoposide',
    'Exemestane',
    'Factor IX complex concentrate',
    'Factor VII concentrate',
    'Factor VIII concentrate',
    'Famotidine',
    'Fat Emulsion',
    'Fentanyl',
    'Fentanyl citrate',
    'Ferrous salt',
    'Filgastrim',
    'Finasteride',
    'Flucinolone/Clobetasol',
    'Fluconazole',
    'Fludrocortisone',
    'Flumazenil',
    'Flunarazine',
    'Fluorescein',
    'Fluorometholone',
    'Fluorouracil',
    'Fluoxetine',
    'Fluphenazine',
    'Flutamide',
    'Folic acid',
    'Follitropin Alfa/beta',
    'Framycetin',
    'Fuller’s earth',
    'Furazolidone',
    'Furosemide',
    'Fusidic Acid',
    'Gadolinium',
    'Gemcitabine',
    'Gemfibrozil',
    'Gentamicin',
    'Glibenclamide',
    'Glucagon',
    'Glucose',
    'Glucose with sodium chloride',
    'Glutetaldehyde',
    'Glyceryl trinitrate',
    'Gosereline',
    'Griseofulvin',
    'Haemophilus influenzae type B (Hib) conjugate vaccine',
    'Haloperidol',
    'Halothane',
    'Heparin',
    'Hepatitis A vaccine',
    'Hepatitis A vaccine(adult)',
    'Hepatitis A vaccine (paediatric)',
    'Hepatitis B vaccine',
    'Homotropine',
    'Human Growth Hormone',
    'Human Menopausal Gonadotrophin (Follicle stimulating hormone + Lutenising hormone)',
    'Hydralazine',
    'Hydrochlorothiazide',
    'Hydrocortisone',
    'Hydrogen peroxide',
    'Hydroxocobalamin',
    'Hydroxychloroquine',
    'Hydroxyurea',
    'Hyoscine butylbromide',
    'Ibandronic Acid',
    'Ibuprofen',
    'Ichthammol',
    'Ifosfomide with Mesna',
    'Imatinib',
    'Imipramine',
    'Indinavir',
    'Insulin (soluble)',
    'Interferon',
    'Intermediate‐acting insulin',
    'Intraperitoneal dialysis',
    'Iohexol',
    'Ipratropium Bromide',
    'Irinotecan',
    'Isoflurane',
    'Isoniazid',
    'Isoniazid + Rifampicin',
    'Isoniazid + Rifampicin + Ethambutol',
    'Isoniazid + Rifampicin + Ethambutol + Pyrazinamide',
    'Isoprenaline',
    'Isosorbide dinitrate',
    'Isosorbide mononitrate',
    'Isotretinoin',
    'Itraconazole',
    'Japanese encephalitis vaccine',
    'Kanamycin',
    'Ketamine',
    'Ketorolac',
    'Labetalol',
    'Lactulose',
    'Lamivudine',
    'Lamotrigine',
    'Lead',
    'Leflunomide',
    'Letrozole',
    'Levodopa + Carbidopa',
    'Levofloxacin',
    'Levonorgestrel IUD',
    'Levonorgestrel',
    'Moxifloxacin',
    'Mycophenolate',
    'Levothyroxine',
    'Nalidixic acid',
    'Lidocaine',
    'Naloxone',
    'Lidocaine',
    'Natamycin',
    'Lidocaine + Epinephrine',
    'Neostigmine',
    'Lidocaine + epinephrine',
    'Netilmicin sulfate',
    'Nevirapine',
    'Lidocaine + Prilocaine',
    'Nifedipine',
    'Liquid paraffin',
    'Nitrofurnatoin',
    'Lithium carbonate',
    'Nitrous oxide',
    'Lomustine',
    'Noradrenaline',
    'Loperamide',
    'Norethisterone',
    'Lopinavir + Ritonavir',
    'Norfloxacin',
    'Lorazepam',
    'Normal immunoglobulin (human)',
    'Losartan',
    'Nystatin',
    'Magenta paint',
    'Octreotide',
    'Magnesium sulfate',
    'Ofloxacin',
    'Malathion',
    'Olanzapine',
    'Mannitol',
    'Omeprazole',
    'Measles Rubella vaccine',
    'Ondansetron',
    'Measles vaccine',
    'Oral rehydration salts',
    'Mebendazole',
    'Oxalop',
    'Paracetamol',
    'Methotrexate',
    'Paracetamol + Codeine',
    'Methotrexate',
    'Paracetic acid',
    'Methyldopa',
    'Penicillamine',
    'Methylphenidate',
    'Permethrin',
    'Methylprednisolone',
    'Pethidine',
    'Methylthioninium chloride (methylene blue)',
    'Phenobarbital',
    'Phenolic compound',
    'Metoclopramide',
    'Phenoxymethylpenicillin',
    'Metronidazole',
    'Phenylephrine',
    'Mexiletine',
    'Phenytoin',
    'Miconazole',
    'Phosphate',
    'Mitomycin',
    'Phytomenadione',
    'Morphine',
    'Pilocarpine',
    'Rubella vaccine',
    'Pizotifen',
    'Salbutamol',
    'Pneumococcal conjugate 7 valent vaccine',
    'Salicylic acid',
    'Salmeterol (as xinafoate) + Fluticasone (as propionate) vaccine 23 valent',
    'Sildenafil',
    'Silver nitrate',
    'Podophyllum resin',
    'Silver sulphadiazine',
    'Poliomyelitis vaccine',
    'Sodium aurothiomalate',
    'Polyvidone iodine',
    'Sodium bicarbonate',
    'Potassium chloride',
    'Sodium calcium edentate',
    'Potassium Iodide',
    'Sodium Chloride',
    'Potassium permanganate',
    'Sodium chloride',
    'Povidone iodine',
    'Sodium citrate',
    'Pralidoxime',
    'Sodium nitrite',
    'Prasozin',
    'Sodium stibogluconate',
    'Praziquantel',
    'Sodium tetradecyl sulphate',
    'Prazosin',
    'Sodium thiosulfate',
    'Prednisolone',
    'Soft paraffin',
    'Spironolactone',
    'Primaquine',
    'Starch solution for iv use',
    'Procarbazine',
    'Stavudine+Lamivudine',
    'Prochlorperazine',
    'Stavudine+Lamivudine+ Nevirapine',
    'Progesterone',
    'Streptokinase',
    'Promethazine',
    'Streptomycin',
    'Propantheline',
    'Sulfadoxine + Pyrimehtamine',
    'Propofol',
    'Sulfamethoxazole + Trimethoprim',
    'Propranolol',
    'Sulfamethoxazole+Trimethoprim',
    'Propylthiouracil',
    'Sulfasalazine',
    'Protamine sulfate',
    'Sulphasalazine',
    'Protamine sulfate',
    'Sulphur',
    'Pyrantel',
    'Sunitinib',
    'Pyrazinamide',
    'Surgical spirit',
    'Pyridostigmine',
    'Suxamethonium',
    'Pyridoxine',
    'Tamoxifen',
    'Pyrimethamine',
    'Tatracosactrin acetate',
    'Quinine',
    'Rabies cell culture vaccine',
    'Tear preparation',
    'Rabies immunoglobulin (Human)',
    'Technitium 99 m generator',
    'Radio‐labelled iodine',
    'Temozolomide',
    'Ranitidine',
    'Testosterone',
    'Retinol',
    'Tetanus Toxoid',
    'Rifampicin',
    'Tetracycline',
    'Rifampicin',
    'Theophylline',
    'Risperidone',
    'Thiamine',
    'Ritonavir',
    'Thiopental',
    'Rituximab',
    'Timolol',
    'Tobramycin + Dexamethasone',
    'Topiramate',
    'Tramadol',
    'Tranexamic acid',
    'Trastuzumab',
    'Tretinoin',
    'Triflouperazine',
    'Trihexyphenidyl (Benzhexol)',
    'Trimethoprim',
    'Tropicamide',
    'Tropicamide + Phenylephrine',
    'Tuberculin, purified protein derivative (PPD)',
    'Typhoid VI polysaccharide vaccine',
    'Urea',
    'Ursodeoxycholic acid',
    'Valproic acid',
    'Vancomycin',
    'Varicella vaccine',
    'Vasopressin',
    'Vecuronium',
    'Venlafaxine',
    'Verapamil',
    'Vericella‐Zoster specific Immunoglobulin',
    'Vinblastine',
    'Vincristine',
    'Vinorelbine',
    'Vitamin A + Vitamin D',
    'Vitamin B complex',
    'Vitamin D3+ Calcium Carbonate',
    'Voriconazole',
    'Warfarin',
    'Water for injection',
    'Xylometazoline',
    'Yellow fever vaccine',
    'Octreotide',
  'Magnesium sulfate',
  'Ofloxacin',
  'Malathion',
  'Olanzapine',
  'Mannitol',
  'Omeprazole',
  'Measles Rubella vaccine',
  'Ondansetron',
  'Measles vaccine',
  'Oral rehydration salts',
  'Mebendazole',
  'Oxaloplatin',
  'Medroxyprogesterone',
  'Oxybutinin',
  'Megestrol acetate',
  'Oxygen',
  'Melphalan',
  'Oxymetazoline',
  'Meningococcal meningitis',
  'Oxytocin',
  'Oxytocin + Ergometrine',
  'Mercaptopurine',
  'Paclitaxel',
  'Meropenem',
  'Pamidronate',
  'Metformin',
  'Pancreatin',
  'Methadone',
  'Pancuronium',
  'Methimazole',
  'Pantaprazole',
  'Methionine',
  'Paracetamol',
  'Methotrexate',
  'Paracetamol + Codeine',
  'Methotrexate',
  ];

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
        foodOption.value = option; 
        foodOption.textContent = option;
        foodInstructionsSelect.appendChild(foodOption);
    });

    const medInstructionsSelect = document.createElement('select');
    const medOptions = ['Every 1 Hours', 'Every 2 Hours','Every 3 Hours', 'Every 4 Hours','Every 5 Hours', 'Every 6 Hours','Every 7 Hours', 'Every 8 Hours'];
    medOptions.forEach(option => {
        const medOption = document.createElement('option');
        medOption.value = option;
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

function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); 
    mywindow.focus(); 

    mywindow.print();
    mywindow.close();

    return true;
}


function printPrescription() {

    PrintElem('prescriptionList');
    return;
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