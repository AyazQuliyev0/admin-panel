const addRowBtn = document.getElementById('addRowBtn');
const tableBody = document.getElementById('tableBody');
let tableNum = 1;
const createRow = () => {
    const row = document.createElement('tr');

    const idPart = document.createElement('td');
    const idP = document.createElement('p');
    idPart.appendChild(idP);

    const namePart = document.createElement('td');
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Ad...';
    nameInput.style.width = '100%';
    namePart.appendChild(nameInput);

    const surnamePart = document.createElement('td');
    const surnameInput = document.createElement('input');
    surnameInput.type = 'text';
    surnameInput.placeholder = 'Soyad...';
    surnameInput.style.width = '100%';
    surnamePart.appendChild(surnameInput);

    const salaryPart = document.createElement('td');
    const salaryInput = document.createElement('input');
    salaryInput.type = 'text';
    salaryInput.placeholder = 'Maaş...';
    salaryInput.style.width = '100%';
    salaryPart.appendChild(salaryInput);

    const actionPart = document.createElement('td');
    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-save';
    saveButton.textContent = 'Save';
    const cancelButton = document.createElement('button');
    cancelButton.className = 'btn btn-cancel';
    cancelButton.textContent = 'Cancel';

    actionPart.appendChild(saveButton);
    actionPart.appendChild(cancelButton);

    row.appendChild(idPart);
    row.appendChild(namePart);
    row.appendChild(surnamePart);
    row.appendChild(salaryPart);
    row.appendChild(actionPart);
    tableBody.appendChild(row);

    cancelButton.addEventListener("click", () => {
        tableBody.removeChild(row);
    });

    saveButton.addEventListener("click", () => {
        let idnum = tableNum;
        const name = nameInput.value;
        const surname = surnameInput.value;
        const salary = salaryInput.value;

        if (name==='' || surname==='' || salary==='') {
            alert('Inputları tam doldurun');
            return;
        }

        createSavedRow(idnum, name, surname, salary, row);
    });
};

const createSavedRow = (id, name, surname, salary, oldRow) => {
    const row = document.createElement('tr');

    const idPart = document.createElement('td');
    idPart.textContent = id;

    const namePart = document.createElement('td');
    namePart.textContent = name;

    const surnamePart = document.createElement('td');
    surnamePart.textContent = surname;

    const salaryPart = document.createElement('td');
    salaryPart.textContent = salary;

    const actionPart = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.className = 'btn btn-save';
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-cancel';
    deleteButton.textContent = 'Delete';

    actionPart.appendChild(editButton);
    actionPart.appendChild(deleteButton);

    row.appendChild(idPart)
    row.appendChild(namePart);
    row.appendChild(surnamePart);
    row.appendChild(salaryPart);
    row.appendChild(actionPart);

    if (oldRow) {
        tableBody.replaceChild(row, oldRow);
    } else {
        tableBody.appendChild(row);
    }

    deleteButton.addEventListener('click', () => {
        tableBody.removeChild(row);
    })

    editButton.addEventListener('click', () => {
        const tempRow = document.createElement('tr');

        const namePart = document.createElement('td');
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = name;
        nameInput.style.width = '100%';
        namePart.appendChild(nameInput);

        const surnamePart = document.createElement('td');
        const surnameInput = document.createElement('input')
        surnameInput.type = 'text';
        surnameInput.value = surname;
        surnameInput.style.width = '100%';
        surnamePart.appendChild(surnameInput);

        const salaryPart = document.createElement('td');
        const salaryInput = document.createElement('input');
        salaryInput.type = 'text';
        salaryInput.value = salary;
        salaryInput.style.width = '100%';
        salaryPart.appendChild(salaryInput)

        const actionPart = document.createElement('td');
        const saveButton = document.createElement('button');
        saveButton.className = 'btn btn-save';
        saveButton.textContent = 'Save';

        actionPart.appendChild(saveButton);

        tempRow.appendChild(namePart);
        tempRow.appendChild(surnamePart);
        tempRow.appendChild(salaryPart);
        tempRow.appendChild(actionPart);

        tableBody.replaceChild(tempRow, row);

        saveButton.addEventListener('click', () => {
            const newName = nameInput.value;
            const newSurname = surnameInput.value;
            const newSalary = salaryInput.value;

            if (newName==='' || newSurname==='' || newSalary==='') {
                alert('Bütün inputları doldurun');
                return;
            }

            createSavedRow(newName, newSurname, newSalary, tempRow);
        });
    });

    tableNum++;
};

addRowBtn.addEventListener('click', createRow);
