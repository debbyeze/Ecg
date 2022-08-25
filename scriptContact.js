let contactPerson = document.getElementById('contactpersonform');
let FirstName1 = document.getElementById('firstname1');
let FirstNamen1err = document.getElementById('firstNameErr');
let LastName1 = document.getElementById('lastname'); 
let LastName1err = document.getElementById('LastNameErr');
let Phone11 = document.getElementById('tel');
let Phoneerr = document.getElementById('numberror');
let NatID = document.getElementById('Nattid');
let NatIDerr = document.getElementById('Natiderr')

 FirstName1.addEventListener('input', function(e){

    let pattern22 = /^[\w]{6,8}$/;
    let currentValue22 = e.target.value;
    let valid = pattern22.test(currentValue22);

    if(valid){
        FirstNamen1err.style.display = 'block'

    }
    else{
        FirstNamen1err.style.display = 'none'
    }
    
 });

 LastName1.addEventListener('input', function(e){

    let pattern2 = /^[\w]{6,8}$/;
    let currentValue2 = e.target.value;
    let valid = pattern2.test(currentValue2);

    if(valid){
        LastName1err.style.display = 'block'

    }
    else{
        LastName1err.style.display = 'none'
    }
    
 });

Phone11.addEventListener('input', function(e){

    let pattern23 =  /^\d{0,12}$/;
    let currentValue23 = e.target.value;
    let valid = pattern23.test(currentValue23);

    if(valid){
       Phoneerr.style.display = 'none'

    }
    else{
        Phoneerr.style.display = 'block'
    }
    
 });
 NatID.addEventListener('input', function(e){

    let pattern24 =  /^\d{0,16}$/;
    let currentValue24 = e.target.value;
    let valid = pattern24.test(currentValue24);

    if(valid){
       NatIDerr.style.display = 'none'

    }
    else{
        NatIDerr.style.display = 'block'
    }
    
 });
