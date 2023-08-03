import User from './User.js'


let users = [];

function validRegistor(){
    let username=document.getElementById('username').value;
    let pwd=document.getElementById('pwd').value;
    let cpwd=document.getElementById('cpwd').value;

    let errorname='';
    const regex = /^[a-zA-Z0-9_-]{3,20}$/;
    if (!regex.test(username)) {
        errorname.concat('invalid username');
        
      }

      const pwdregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/;
      if (pwdregex.test(pwd)) 
       {
         if(pwd!==cpwd)
         {
            errorname.concat("entered ummatch pwd ")
            
         }
       
      else
      {
         
        errorname.concat("invalid pwd")
        
      }
      document.getElementById('nameError').innerHTML(`${errorname}`)
    
}
  let user = new User(username,pwd);
  users.push(user);

}