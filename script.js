
 let userName = document.getElementById('firstname');
 let LastName = document.getElementById('lastname');
 let loginForm = document.getElementById("login-form");
 let usernameErr = document.getElementById("usernameErr")
 let usernameErr1 = document.getElementById("usernameErr1")


 

 userName.addEventListener('input', function(e){
    let pattern = /^[\w]{6,8}$/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue);

    if(valid){
usernameErr.style.display = 'block'

    }
    else{
        usernameErr.style.display = 'none'
    }
    
 });
 LastName.addEventListener('input', function(e){
    let pattern = /^[\w]{6,8}$/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue);

    if(valid){
        usernameErr1.style.display = 'block'

    }
    else{
        usernameErr1.style.display = 'none'
    }
    
 });
 function validation()
 {
     
     let Email = document.getElementById('email').value;
     let EmailText = document.getElementById('Emailtext');
     let PatternEmail = /^[^]+@[^]+\.[A-Z]{2,3}$/;

       

     if (Email.match(PatternEmail))
     {
        loginForm.classList.add("valid");
        loginForm.classList.remove("invalid");
        EmailText.innerHTML= "Your Email Adress is Invalid";
        EmailText.style.color = 'red';
     }
else{
    loginForm.classList.remove("valid");
    loginForm.classList.add("invalid");
    EmailText.innerHTML= "Please Enter a Valid Email Address";
    EmailText.style.color = 'red';

} 
if (Email ==""){
    loginForm.classList.remove("valid");
    loginForm.classList.add("invalid");
    EmailText.innerHTML= "";
    EmailText.style.color = 'red'; 
} 
 }