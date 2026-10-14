
const form = document.getElementById("employeeForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim();
    let department = document.getElementById("department").value;

    let valid = true;

    // Clear old errors
    document.querySelectorAll("small").forEach(function(error) {
        error.innerText = "";
    });

    document.getElementById("success").innerText = "";

    // 1. Name: only letters and spaces, 3–50 characters
    if (name === "") {
        document.getElementById("nameError").innerText =
            "Name is required.";
        valid = false;
    }
    else if (!/^[A-Za-z ]{3,50}$/.test(name)) {
        document.getElementById("nameError").innerText =
            "Name must contain only letters and spaces.";
        valid = false;
    }

    // 2. Email: valid email format
    if (email === "") {
        document.getElementById("emailError").innerText =
            "Email is required.";
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email address.";
        valid = false;
    }

    // 3. Password: 8 characters, uppercase, number, special character
    if (password === "") {
        document.getElementById("passwordError").innerText =
            "Password is required.";
        valid = false;
    }
    else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
        document.getElementById("passwordError").innerText =
            "Use 8+ characters, one uppercase letter, one number and one special character.";
        valid = false;
    }

    // 4. Phone: exactly 10 digits, starting from 6–9
    if (phone === "") {
        document.getElementById("phoneError").innerText =
            "Phone number is required.";
        valid = false;
    }
    else if (!/^[6-9]\d{9}$/.test(phone)) {
        document.getElementById("phoneError").innerText =
            "Enter a valid 10-digit Indian phone number.";
        valid = false;
    }

    // 5. Department: selection required
    if (department === "") {
        document.getElementById("departmentError").innerText =
            "Please select a department.";
        valid = false;
    }

    // Final result
    if (valid) {
        document.getElementById("success").innerText =
            "Employee registered successfully!";

        form.reset();
    }
});
