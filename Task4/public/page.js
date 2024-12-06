console.log('page.js is loaded');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');

form.addEventListener('submit',(e)=>{


     var email_check = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

     if(name.value==="" || name.value==null){
          e.preventDefault();
          name_error.innerHTML="Name is required";
     }

     if(!email_check.test(email.value)){
          e.preventDefault();
          email_error.innerHTML = "Valid email is required";
     }
     
     if(password.value.length <= 5){
          e.preventDefault();
          pass_error.innerHTML = "Password must be more than 6 character and strong"
     }
})


/*document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    document.getElementById('password').addEventListener('password', function() {
        const password = this.value;
        const strengthIndicator = document.getElementById('passwordStrength');
        
        const strength = validatePasswordStrength(password);
        strengthIndicator.textContent = strength.message;
        strengthIndicator.className = strength.class;
    });
    
    document.querySelector('form').addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        const strength = validatePasswordStrength(password);

        if (strength.class === 'weak') {
            event.preventDefault();
            alert('Your password is too weak. Please choose a stronger password.');
        }
    });
});

function validatePasswordStrength(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecial = /[!@#\$%\^\&*\)\(+=._-]/.test(password);

    if (password.length < minLength) {
        return { message: 'Too short', class: 'weak' };
    } else if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecial) {
        return { message: 'Weak', class: 'weak' };
    } else if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecial) {
        return { message: 'Strong', class: 'strong' };
    } else {
        return { message: 'Medium', class: 'medium' };
    }
}*/

 