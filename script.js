 let userName = document.getElementById('firstname');
 let LastName = document.getElementById('lastname');
 let loginForm = document.getElementById("personalinfo");
 let usernameErr = document.getElementById("usernameErr");
 let usernameErr1 = document.getElementById("usernameErr1");
 let Email = document.getElementById('email');
 let PhoneNumber = document.getElementById('tel');



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

 //Email Validation code starts here

 Email.addEventListener('input', function(e){
    const emailPattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    let currentValue = e.target.value;
    let EmailErr = document.getElementById('EmailError');
    let valid = emailPattern.test(currentValue);

    if(valid){
       EmailErr.style.display = 'none'

    }
    else{
       
        EmailErr.style.display = 'block'
    }
    
 });
let Phone = document.getElementById('phonenumber');

Phone.addEventListener('input', function(e){
    const phonePattern = /^\d{0,12}$/
    let currentValue = e.target.value;
    let PhoneErr = document.getElementById('phoneErr');
    let valid = phonePattern.test(currentValue);

    if(valid){
        PhoneErr.style.display = 'none'

    }
    else{
       
        PhoneErr.style.display = 'block'
    }
    
 });

 let PhoneTel = document.getElementById('tel');

 PhoneTel.addEventListener('input', function(e){
    const phonePattern = /^\d{0,12}$/
    let currentValue = e.target.value;
    let PhoneErr1 = document.getElementById('PhoneErr1');
    let valid = phonePattern.test(currentValue);

    if(valid){
        PhoneErr1.style.display = 'none'

    }
    else{
       
        PhoneErr1.style.display = 'block'
    }
    
 });

 let NatID = document.getElementById('Natid');

 NatID.addEventListener('input', function(e){
    const phonePattern = /^\d{0,16}$/
    let currentValue = e.target.value;
    let NatidErr = document.getElementById('NatidErr');
    let valid = phonePattern.test(currentValue);

    if(valid){
        NatidErr.style.display = 'none'

    }
    else{
       
        NatidErr.style.display = 'block'
    }
    
 });

 
 
