
function regit(){
   let Name =  document.getElementById("name").value;
   let email =  document.getElementById("email").value;
   let password =  document.getElementById("Password").value;
   let role =  document.getElementById("role").value;
let obj = {
    Name,
    email,
    password,
    role
}
   fetch('https://uninterested-jewelry-fly.cyclic.app/signup', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function(response){
    return response.json()
  }).then(function(data){
    console.log(data);
  }).catch(error=>{console.log(error)})
}

function logit(){
    let e =  document.getElementById("email");
       let email= e.value;
    let psd =  document.getElementById("Password");
    let password = psd.value;
 let obj = {
     email,
     password
 }
    fetch('https://uninterested-jewelry-fly.cyclic.app//login', {
     method: 'POST',
     body: JSON.stringify(obj),
     headers: {
       'Content-Type': 'application/json'
     }
   })
   .then(function(response){
     return response.json()
   }).then(function(data){
     console.log(data);
    localStorage.setItem("token",data.token)

   }).catch(error=>{console.log(error)})

   document.getElementById("email").value=null;
    document.getElementById("Password").value=null;

 }

