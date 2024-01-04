let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');
let phoneNumberInput = document.getElementById('phoneNumber');
let saveButton = document.getElementById('saveButton');

let contacts = [];

function PhoneBookEntry(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

saveButton.addEventListener('click', function() {
    let firstName = firstNameInput.value.trim();
    let lastName = lastNameInput.value.trim();
    let phoneNumber = phoneNumberInput.value.trim();

    if (!firstName || !lastName || !phoneNumber) {
        alert("Please fill all fields correctly.");
        return;
    }

    let newContact = new PhoneBookEntry(firstName, lastName, phoneNumber);
    
    contacts.push(newContact);
    renderContacts();

    firstNameInput.value = '';
    lastNameInput.value = '';
    phoneNumberInput.value = '';

});




function renderContacts() {
    let table = document.getElementById('contactsTable');
    table.innerHTML = `
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
        </tr>`;

        let index = 0;
        for (let contact of contacts) {
            let row = table.insertRow(-1);
            row.insertCell(0).innerText = contact.firstName;
            row.insertCell(1).innerText = contact.lastName;
            row.insertCell(2).innerText = contact.phoneNumber;

            let actionsCell = row.insertCell(3);
            actionsCell.innerHTML = `<button onclick="deleteContact(${index})">Delete</button>`;
            let actionsCell2 = row.insertCell(4);
            actionsCell2.innerHTML = `<button onclick="editContact(${index})">Edit</button>`;

    
            index++;
        }
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

function editContact(index) {
    contacts.splice(index, 1);
    










    renderContacts();
}
