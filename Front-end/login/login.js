let loginLogoutshow = ()=>{
  let isLogin = localStorage.getItem('token') || undefined;
  console.log("sad");
  let logoutbtn = document.getElementById("logOutBtn");
  let loginbtn = document.getElementById("loginBtn");
  isLogin?(loginbtn.style.display='none',logoutbtn.style.display='block'):(logoutbtn.style.display= 'none' ,loginbtn.style.display='block')
}

window.onload = () => {
  var loginBtn = document.getElementById("loginBtn");
  var loginPopup = document.getElementById("loginPopup");
  var signupPopup = document.getElementById("signupPopup");

  // Get the close buttons for the popups
  var loginClose = loginPopup.querySelector(".close");
  var signupClose = signupPopup.querySelector(".close");
  console.log(location);

  // Get the signup and login links inside the popups
  var signupLink = document.getElementById("signupLink");
  var loginLink = document.getElementById("loginLink");

  // When the login button is clicked, display the login popup
  loginBtn.onclick = function () {
    loginPopup.style.display = "block";
  };

  // When the close button is clicked, hide the login popup
  loginClose.onclick = function () {
    loginPopup.style.display = "none";
  };

  // When the signup link is clicked, hide the login popup and display the signup popup
  signupLink.onclick = function () {
    loginPopup.style.display = "none";
    signupPopup.style.display = "block";
  };

  // When the close button is clicked, hide the signup popup
  signupClose.onclick = function () {
    signupPopup.style.display = "none";
  };

  // When the login link is clicked, hide the signup popup and display the login popup
  loginLink.onclick = function () {
    signupPopup.style.display = "none";
    loginPopup.style.display = "block";
  };

  // submit for login

  let formLogin = document.querySelector("#loginPopup form");
  console.log(formLogin);
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
logit(e.target[0].value,e.target[1].value).then(data=>{
  console.log(data);
  let successmsg = document.getElementById("SucessfullMessage");
  let btn = successmsg.querySelector("#SucessfullMessagebtn")
  if(data.msg){
    successmsg.style.display = "flex"
   btn.innerText = `${data.msg} ${data.name}`
    setTimeout(() => {
      successmsg.style.display = "none";
    }, 1800);
    loginPopup.style.display = "none";
    if(data.role=="admin"){
      window.location.href = "./admin/admin.html"
    }
  }
})

  });
   let logoutbtn = document.getElementById("logOutBtn");
   logoutbtn.onclick = ()=>{
console.log("sdf");
localStorage.removeItem('token')
  let successmsg = document.getElementById("SucessfullMessage");
  let btn = successmsg.querySelector("#SucessfullMessagebtn");
    successmsg.style.display = "flex";
    setTimeout(() => {
      successmsg.style.display = "none";
    }, 1800);
    btn.innerText = "SucessFully Logged Out"
loginLogoutshow()
   }

  loginLogoutshow();
};

// function regit(){
//    let name =  document.getElementById("name").value;
//    let email =  document.getElementById("email").value;
//    let password =  document.getElementById("Password").value;
//    let role =  document.getElementById("role").value;
// let obj = {
//     name,
//     email,
//     password,
//     role
// }
//    fetch("http://localhost:8080/signup", {
//      method: "POST",
//      body: JSON.stringify(obj),
//      headers: {
//        "Content-Type": "application/json",
//      },
//    })
//      .then(function (response) {
//        return response.json();
//      })
//      .then(function (data) {
//        console.log(data);
//      })
//      .catch((error) => {
//        console.log(error);
//      });
// }

function logit(e,psd){
console.log(e,psd);
 return fetch("http://localhost:8080/api/login", {
      method: "POST",
      body: JSON.stringify({email:e,password:psd}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then( response=>{
        return response.json();
      })
      .then(data=> {
        localStorage.setItem("token", data.token);
        loginLogoutshow()
        return data
      })
      .catch((error) => {
        console.log(error);
      });

 }
