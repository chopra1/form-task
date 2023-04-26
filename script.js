 //for preview image and url
 window.addEventListener('load', function () {
    document.querySelector("input[type='file']").addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.src = URL.createObjectURL(this.files[0]);
        }
        return;
    })
})

//for file size
const input = document.getElementById('input')
input.addEventListener('change', (event) => {
    const target = event.target;
    if (target.files && target.files[0]) {
        //Maximum allowed size in bytes 1MB Example.  Change first operand(multiplier) for your needs
        const maxAllowedSize = 1 * 1024 * 1024;  //means 1 MB
        if (target.files[0].size > maxAllowedSize) {
            target.value = '';
            alert("File size should be not more than 1 MB");
        }
    }
    //for allowing jpg and png only
    var file = target.files[0];
    if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
        alert('Please select a valid JPEG or PNG image file.');
        input.value = '';
        return;
    }
})

//for deleting the selected image
function del() {
    var img = document.getElementById('uploaded-image');
    img.src = "default-avatar.png";
    document.getElementById("delete").style.display = "none";
    document.getElementById('input').value=''
}

//for displaying delete button when the image is uploaded.
function showDelBtn(){
    document.getElementById("delete").style.display = "block";
}

//validate password
// var password = document.getElementById("password")
// var confirm_password = document.getElementById("confirmPassword");

// function checkPassword() { 
//     var password = document.getElementById("password")
// var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
// if(password.value.match(decimal)) 
// { 
// alert('Correct')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// } 

// function validatePassword(){
//   if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }
// confirm_password.onmousedown = checkPassword;
// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;


 // Add an event listener to the form to handle form submission
 document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form inputs
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmInput = document.getElementById("confirmPassword");

    // Check that email is valid
    if (!isValidEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
       return false;
    }

    // Check that password is valid
  if (!isValidPassword(passwordInput.value)) {
    alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    passwordInput.focus();
     return false;
  }

    // Check that passwords match
    if (passwordInput.value !== confirmInput.value) {
      alert("Passwords do not match.");
      passwordInput.focus();
       return false;
    }

    // Submit the form
     alert("Form submitted!");
     this.submit();
  });

  // Helper function to validate email
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

// Helper function to validate password
function isValidPassword(passwordInput) {
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(passwordInput);
  }

 // Get the form element
 var form = document.querySelector('form');

 // Get all the input fields in the form
 var inputs = form.querySelectorAll('input, textarea, select');
 
 // Add an event listener for the form submission
 form.addEventListener('submit', function(event) {
   var allFieldsFilled = true;
   
   // Loop through each input field and check if it has a value
   for (var i = 0; i < inputs.length; i++) {
     if (!inputs[i].value) {
       allFieldsFilled = false;
       inputs[i].classList.add('is-invalid');
     } else {
       inputs[i].classList.remove('is-invalid');
     }
   }
   
   // If any of the fields are empty, prevent the form from submitting
    if (!allFieldsFilled) {
      event.preventDefault();
    }
 });


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
          }

          form.classList.add('was-validated')
      }, false)
  })
})()
