
function handleLogin1() {
 

  let username=document.getElementById('username').value;
  let pwd=document.getElementById('pwd').value;
  let cpwd=document.getElementById('cpwd').value;

  
  let errormessage='';
  const regex = /^[a-zA-Z0-9_-]{3,20}$/;
  const pwdregex = /^.{5,20}$/;

  if (!regex.test(username)) {
    errormessage.concat('invalid username');
      
    }
    
    if (pwdregex.test(pwd) ) 
     {
       if(pwd!==cpwd)
       {
        errormessage.concat("entered ummatch pwd ")
          
       }
     
    else
    {
       
      errorname.concat("invalid pwd")
      
    }
    document.getElementById('nameError').innerHTML
  

  // Return false to prevent form submission (since we already handled it)
 
}}


// logic.js

function handleLogin() {
 

  // Retrieve the input field values
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  // Get the error message containers
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  // Reset previous error messages and input borders
  usernameError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  usernameInput.style.border = "";
  passwordInput.style.border = "";
  confirmPasswordInput.style.border = "";

  // Validate username (between 3 and 20 characters)
  if (usernameInput.value.length < 3 || usernameInput.value.length > 20) {
      usernameError.textContent = "Username must be between 3 and 20 characters.";
      usernameInput.style.border = "2px solid red";
      return false;
  }

  // Validate password (between 5 and 20 characters)
  if (passwordInput.value.length < 5 || passwordInput.value.length > 20) {
      passwordError.textContent = "Password must be between 5 and 20 characters.";
      passwordInput.style.border = "2px solid red";
      return false;
  }

  // Validate confirm password
  if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordInput.style.border = "2px solid red";
      return false;
  }

  // Do your login logic here (e.g., API call to authenticate the user)
  // For demonstration purposes, let's just log the username and password
  console.log("Username:", usernameInput.value);
  console.log("Password:", passwordInput.value);

  // Return false to prevent form submission (since we already handled it)
  return true;
}
