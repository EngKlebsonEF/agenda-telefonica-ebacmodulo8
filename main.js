document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');

    var name = nameInput.value;
    var phone = phoneInput.value;
    var email = emailInput.value;

    if (name === '' || phone === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var tableBody = document.querySelector('#contactTable tbody');

    var newRow = tableBody.insertRow();
    var nameCell = newRow.insertCell();
    var phoneCell = newRow.insertCell();
    var emailCell = newRow.insertCell();
    var deleteCell = newRow.insertCell();

    nameCell.textContent = name;
    phoneCell.textContent = phone;
    emailCell.textContent = email;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', function() {
        newRow.remove();
    });

    deleteCell.appendChild(deleteButton);

    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
});