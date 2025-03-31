
function comment() {
  const username = document.contact.username.value;
  const email = document.contact.email.value;
 

  const message = document.contact.message.value;
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");


  const messageError = document.getElementById("messageError");
  const alphaExp = /^[a-zA-Z]+$/;

  const mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const mssgExp = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  let nameStatus = false;
  let emailStatus = false;
  let mobileStatus = false;
  let messageStatus = false;

  //Name Validation

  if (username === "") {
    nameError.textContent = "*Please Enter Your  FullName";
  } else {
    if (username.match(alphaExp)) {
      nameError.textContent = "";
      nameStatus = true;
    } else {
      nameError.textContent = "*Name should be Only Characters";
    }
  }

  //Email Validation
  if (email === "") {
    emailError.textContent = "*Please Enter Email Address";
  } else {
    if (email.match(mailExp)) {
      emailError.textContent = "";
      emailStatus = true;
    } else {
      emailError.textContent = "*Please Enter Vaild Email ID";
    }
  }

 

  //Message Validation
  if (message === "") {
    messageError.textContent = "*Please Enter Message";
  } else {
    if (message.match(mssgExp)) {
      messageError.textContent = "";
      messageStatus = true;
    } else {
      messageError.textContent = "*Please Enter Your Opinion";
    }
  }

  //Return Validation

  if (nameStatus &&emailStatus  && messageStatus) {
    alert("Thankyou for you Message")
    document.getElementById("myForm").reset();
    document.getElementById("nameError").style.display="none"
    document.getElementById("emailError").style.display="none"
  
    document.getElementById("messageError").style.display="none"

   
    return true;
    
  } else {
    return false;
  }
  
}
document.getElementById("myForm").addEventListener("submit",function(event)
{
event.preventDefault();
validate()

})




