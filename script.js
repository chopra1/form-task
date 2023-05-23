//for preview image and url
window.addEventListener('load', function () {
    document.querySelector("input[type='file']").addEventListener('change', function () {
            if (this.files && this.files[0]) {
                var img = document.querySelector('img');
                img.src = URL.createObjectURL(this.files[0]);
            }
            return
        })
})

//for file size
const input = document.getElementById('input')
input.addEventListener('change', (event) => {
    const target = event.target;
    if (target.files && target.files[0]) {
        //Maximum allowed size in bytes 1MB Example.  Change first operand(multiplier) for your needs
        const maxAllowedSize = 1 * 1024 * 1024; //means 1 MB
        if (target.files[0].size > maxAllowedSize) {
            target.value = '';
            alert('File size should be not more than 1 MB');
        }
    }

    //for allowing jpg and png only
    var file = target.files[0];
    if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
        alert('Please select a valid JPEG or PNG image file.');
        input.value = '';
        return //return keyword will tale control out of method.
    }
})

//for deleting the selected image
function del() {
    var img = document.getElementById('uploaded-image');
    img.src = 'default-avatar.png';
    document.getElementById('delete').style.display = 'none';
    document.getElementById('input').value = '';
} //call in html

//for displaying delete button when the image is uploaded.
function showDelBtn() {
    document.getElementById('delete').style.display = 'block';
} //called in html

// Add an event listener to the form to handle form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form inputs
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmInput = document.getElementById('confirmPassword');

    // Alert for invalid email
    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }

    // Alert for invalid password
    if (!isValidPassword(passwordInput.value)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.");
        passwordInput.focus();
        return false;
    }

    // Check that passwords match
    if (passwordInput.value !== confirmInput.value) {
        alert('Passwords do not match.');
        passwordInput.focus();
        return false;
    }

    // Helper function to validate email
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to validate password
    function isValidPassword(passwordInput) {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
        return passwordRegex.test(passwordInput);
}

// confirmation that form is Submitted
alert('Form submitted!');
this.submit();
})
