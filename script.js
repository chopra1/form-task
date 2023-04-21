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
        /*Maximum allowed size in bytes 1MB Example.  Change first operand(multiplier) for your needs*/
        const maxAllowedSize = 1 * 1024 * 1024;  //means 1 MB
        if (target.files[0].size > maxAllowedSize) {
            target.value = '';
            alert("File size should be not more than 1 MB");
        }
    }
    var file = target.files[0];
    if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
        alert('Please select a valid JPEG or PNG image file.');
        input.value = '';
        return;
    }
})

//for image delete
function del() {
    var img = document.querySelector('img');
    img.src = "default-avatar.png";
    if(img.src = "default-avatar.png"){
        document.getElementById("").style.visibility = "hidden";
    }else{
        document.getElementById("").style.visibility = "visible";
    }
}

//validate password
var password = document.getElementById("emailPassword")
var confirm_password = document.getElementById("confirmPassword");

function checkPassword() 
{ 
    var password = document.getElementById("emailPassword")
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
if(password.value.match(decimal)) 
{ 
alert('Correct')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
} 

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
confirm_password.onmousedown = checkPassword;
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

