// Get references to the HTML elements we will need
const form = document.getElementById("studentForm");
const tableContainer = document.getElementById("studentTableContainer");
const tableBody = document.getElementById("studentDataTableBody");

// Listen for the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the form from reloading the page

  // Hide any previous error messages
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.style.display = "none"));

  // Run the validation function
  if (validateForm()) {
    // If the form is valid, get all the data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Clear the existing table body before adding new data
    tableBody.innerHTML = "";

    // Define a mapping of field names to human-readable labels
    const fieldLabels = {
      name: "Name",
      dob: "Date of Birth",
      email: "Email",
      phone: "Phone No",
      address: "Address",
      gender: "Gender",
      favFood: "Favourite Foods",
      fatherName: "Father's Name",
      fatherOccupation: "Father's Occupation",
      fatherMobile: "Father's Mobile No",
      motherName: "Mother's Name",
      motherOccupation: "Mother's Occupation",
      motherMobile: "Mother's Mobile No",
    };

    // Loop through the data and create a new row for each field
    for (const field in data) {
      if (data.hasOwnProperty(field)) {
        const newRow = tableBody.insertRow();

        // Create the cell for the field name
        const labelCell = newRow.insertCell();
        labelCell.textContent = fieldLabels[field] || field; // Use the mapped label or the field name

        // Create the cell for the value
        const valueCell = newRow.insertCell();
        valueCell.textContent = data[field];
      }
    }

    // Show the table and clear the form for the next entry
    tableContainer.style.display = "block";
    form.reset();
  }
});

// Function to check if the form inputs are correct
function validateForm() {
  let isValid = true;

  // Fields that should only contain letters (no numbers)
  const charFields = [
    "name",
    "fatherName",
    "fatherOccupation",
    "motherName",
    "motherOccupation",
  ];
  charFields.forEach((fieldId) => {
    const input = document.getElementById(fieldId);
    // Check if the input value contains any digits
    if (/\d/.test(input.value)) {
      document.getElementById(fieldId + "-error").style.display = "block";
      isValid = false;
    }
  });

  // Fields that should only contain numbers (no letters)
  const numFields = ["phone", "fatherMobile", "motherMobile"];
  numFields.forEach((fieldId) => {
    const input = document.getElementById(fieldId);
    // Check if the input value contains any letters
    if (/[a-zA-Z]/.test(input.value)) {
      document.getElementById(fieldId + "-error").style.display = "block";
      isValid = false;
    }
  });

  return isValid;
}
