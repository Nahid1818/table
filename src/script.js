document.getElementById('personForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    var name = document.getElementById('name').value;

    // Check if the person's name already exists in the table
    var table = document.getElementById('personTable').getElementsByTagName('tbody')[0];
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells[1].textContent.trim() === name.trim()) {
            alert('This person already exists in the table.');
            return; // Exit function if person already exists
        }
    }

    // If the person doesn't exist, continue with adding the person to the table
    var age = parseInt(document.getElementById('age').value); // Parse age to integer
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var salary = parseFloat(document.getElementById('salary').value);
    var job = document.getElementById('job').value;

    // Check if any input field is blank
    if (name.trim() === '' || age.toString().trim() === '' || address.trim() === '' ||
        phone.trim() === '' || salary === '' || job.trim() === '') {
        alert('Please fill in all fields.');
        return; // Exit function if any field is blank
    }

    // Validate age
    if (age < 18 || age > 30) {
        alert('Age must be between 18 and 30.');
        return; // Exit function if age is invalid
    }

    // Create a new row in the table
    var newRow = table.insertRow(table.rows.length);
    var cellID = newRow.insertCell(0);
    var cellName = newRow.insertCell(1);
    var cellAge = newRow.insertCell(2);
    var cellAddress = newRow.insertCell(3);
    var cellPhone = newRow.insertCell(4);
    var cellSalary = newRow.insertCell(5);
    var cellJob = newRow.insertCell(6);

    // Add data to the cells
    cellID.textContent = table.rows.length;
    cellName.textContent = name;
    cellAge.textContent = age;
    cellAddress.textContent = address;
    cellPhone.textContent = phone;
    cellSalary.textContent = salary;
    cellJob.textContent = job;

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('job').value = '';
});

document.getElementById('resate').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from reseting

    document.getElementById('personTable').getElementsByTagName('tbody')[0].innerHTML = ``;


});