let contacts = []

function addContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if(!/^[a-zA-Z\s]*$/.test(name)) {
        alert('Invalid name. Only letters and spaces are allowed');
        return;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Invalid email address.');
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert('Invalid phone number. Please enter 10 digits.');
        return;
    }

    const contact = { name, email, phone };
    contacts.push(contact);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    displayContacts();
}


function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${contact.name} - ${contact.email} - ${contact.phone}
                            <button type="submit" onclick="editContact(${index})">Edit</button>
                            <button type="submit" onclick="deleteContact(${index})">Delete</button>`;
        contactList.appendChild(listItem);
    });
}

function editContact(index) {
    const updatedName = prompt('Enter updated name:', contacts[index].name);
    const updatedEmail = prompt('Enter updated email:', contacts[index].email);
    const updatedPhone = prompt('Enter updated phone number:', contacts[index].phone);

    // Update contact if the user didn't cancel the prompt
    if (updatedName !== null && updatedEmail !== null && updatedPhone !== null) {
        contacts[index] = { name: updatedName, email: updatedEmail, phone: updatedPhone };
        displayContacts();
    }
}

function deleteContact(index) {
    const confirmDelete = confirm('Are you sure you want to delete this contact?');

    if (confirmDelete) {
        contacts.splice(index, 1);
        displayContacts();
    }
}