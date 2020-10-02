let fullname=document.getElementById("name-input")

let email=document.getElementById("email-input")

let password=document.getElementById("password-input")

let male_radio=document.getElementById("radio-male")
let female_radio=document.getElementById("radio-female")

let select_payment=document.getElementById("Payment")

let terms_conditions=document.getElementById("terms")

let submit_button=document.getElementById("register-btn")

function OnRegister(){
   

if(fullname.value.length==0)
    alert("Name can't be blank")



else if(!email.value.endsWith(".com") || email.value.indexOf("@") <=0 || email.value.lastIndexOf("@") <=0 || email.value.indexOf("@.") !== -1 || email.value.lastIndexOf("@") !== email.value.indexOf("@"))
    alert("Please input the right email")

else if(password.value.length <5)
    alert("Please input password more than 5 characters")

else if(!male_radio.checked && !female_radio.checked)
    alert("Please choose your gender")

else if(select_payment.selectedIndex == 0)
    alert("Please choose your payment method")

else if(!terms_conditions.checked)
    alert("You must agree terms and conditions")

else 
    alert("You're All Set")



}