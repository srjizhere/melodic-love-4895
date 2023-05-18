window.onload = () => {
  console.log("sd");
  var loginBtn = document.getElementById("loginBtn");
  var loginPopup = document.getElementById("loginPopup");
  var signupPopup = document.getElementById("signupPopup");

  // Get the close buttons for the popups
  var loginClose = loginPopup.querySelector(".close");
  var signupClose = signupPopup.querySelector(".close");

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
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  // .querySelectorAll("input")
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

// function logit(){
//     let e =  document.getElementById("lemail");
//        let email= e.value;
//     let psd =  document.getElementById("lpass");
//     let password = psd.value;
//  let obj = {
//      email,
//      password
//  }
//     fetch("http://localhost:8080/login", {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         localStorage.setItem("token", data.token);
//         if (data.role == "admin") {
//           window.location.href = "../admin/admin.html";
//         } else if (data.role == "user") {
//           window.location.href = "../index.html";
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//    document.getElementById("email").value=null;
//     document.getElementById("Password").value=null;

//  }
