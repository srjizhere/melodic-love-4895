
import footer from "../components/foot/footer.js"
let ft = document.getElementById("footer");
ft.innerHTML=footer()

import navb from "../components/navbar/navbar.js"
let nb = document.getElementById("navbar");
nb.innerHTML = navb()

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
   fetch('https://healthy-bee-handbag.cyclic.app/signup', {
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
    let e =  document.getElementById("lemail");
       let email= e.value;
    let psd =  document.getElementById("lpass");
    let password = psd.value;
 let obj = {
     email,
     password
 }
    fetch('https://healthy-bee-handbag.cyclic.app/login', {
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
    if(data.role == "admin"){
      window.location.href = "../admin/admin.html"
    }else if(data.role=="user"){
      window.location.href = "../index.html"

    }

   }).catch(error=>{console.log(error)})

   document.getElementById("email").value=null;
    document.getElementById("Password").value=null;

 }

