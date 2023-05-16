function regit(){
   let name =  document.getElementById("name").value;
   let email =  document.getElementById("email").value;
   let password =  document.getElementById("Password").value;
   let role =  document.getElementById("role").value;
let obj = {
    name,
    email,
    password,
    role
}
   fetch("http://localhost:8080/signup", {
     method: "POST",
     body: JSON.stringify(obj),
     headers: {
       "Content-Type": "application/json",
     },
   })
     .then(function (response) {
       return response.json();
     })
     .then(function (data) {
       console.log(data);
     })
     .catch((error) => {
       console.log(error);
     });
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
    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        localStorage.setItem("token", data.token);
        if (data.role == "admin") {
          window.location.href = "../admin/admin.html";
        } else if (data.role == "user") {
          window.location.href = "../index.html";
        }
      })
      .catch((error) => {
        console.log(error);
      });

   document.getElementById("email").value=null;
    document.getElementById("Password").value=null;

 }

