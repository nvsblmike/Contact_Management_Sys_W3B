let contact = []

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

