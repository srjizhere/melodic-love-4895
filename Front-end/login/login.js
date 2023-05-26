let loginLogoutshow = ()=>{
  let isLogin = localStorage.getItem('token') || undefined;
  let logoutbtn = document.getElementById("logOutBtn");
  let loginbtn = document.getElementById("loginBtn");
  isLogin?(loginbtn.style.display='none',logoutbtn.style.display='block'):(logoutbtn.style.display= 'none' ,loginbtn.style.display='block')
}

// <---------------window onload starts ----------->
window.onload = () => {
    loginLogoutshow();
       let successmsg = document.getElementById("SucessfullMessage");
       let btn = successmsg.querySelector("#SucessfullMessagebtn");

  let  loginBtn = document.getElementById("loginBtn");
  let  loginPopup = document.getElementById("loginPopup");
  let signupPopup = document.getElementById("signupPopup");

  // Get the close buttons for the popups
  let loginClose = loginPopup.querySelector(".close");
  let signupClose = signupPopup.querySelector(".close");

  // Get the signup and login links inside the popups
  let signupLink = document.getElementById("signupLink");
  let loginLink = document.getElementById("loginLink");

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

  //<-------------- submit for login starts------------------->
  let formLogin = document.querySelector("#loginPopup form");
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    logit(e.target[0].value,e.target[1].value).then(data=>{
      if(data?.msg && data?.token){
        console.log(data);
        localStorage.setItem('token',data.token)
        loginLogoutshow()
        successmsg.style.display = "flex"
   btn.innerText = `${data.msg} ${data.name}`
   console.log(btn.innerText);
    setTimeout(() => {
      successmsg.style.display = "none";
    }, 2000);
    loginPopup.style.display = "none";
    if(data.role=="admin"){
      window.location.href = "./admin/admin.html"
    }
  }else{
    console.log("else visitiod");
    successmsg.style.display = "flex";
    btn.style.backgroundColor = "red";
        data.err?btn.innerText = `${data.err}`:"something went worng"
        setTimeout(() => {
          btn.style.backgroundColor = "#4CAF50";
          successmsg.style.display = "none";
        }, 3000);
     loginPopup.style.display = "none";
  }
})
})
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
   let cartbtn = loginBtn.parentElement.querySelector("#cartbtn")
   let purchasebtn = loginBtn.parentElement.querySelector("#purchasebtn")
   cartbtn.addEventListener("click",(e)=>{
    if(localStorage.getItem("token")){
      window.location.href = "../cart/cart.html"
    }else{
      loginPopup.style.display  = "block"
    }
   })
   
   purchasebtn.addEventListener("click",(e)=>{
    if(localStorage.getItem("token")){
      window.location.href = "../Purchased/purchased.html"   //make purchase page
    }else{
      loginPopup.style.display  = "block"
    }
   })

  //<----------------------- submit for login ends------------------------------>

let formSignUp = document.querySelector("#signupPopup form");
formSignUp.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log(e);

 regit(e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value).then(data=>{
  console.log(data);
        if (data?.msg) {
          console.log(data);
          successmsg.style.display = "flex";
          btn.innerText = `${data.msg}`;
          setTimeout(() => {
            successmsg.style.display = "none";
          }, 2000);
          signupPopup.style.display = "none";
        } else {
          console.log("else visitiod");
          successmsg.style.display = "flex";
          console.log(btn);
          btn.style.backgroundColor = "red";
          data?.err? (btn.innerText = `${data.err}`) : "something went worng";
          setTimeout(() => {
            btn.style.backgroundColor = "#4CAF50";
            successmsg.style.display = "none";
          }, 3000);
          signupPopup.style.display = "none";
        }

 })
})
document.getElementById("guestuser").addEventListener("click", () => {
  logit("janedoe@gmail.com", "jane").then((data) => {
    if (data?.msg && data?.token) {
      console.log(data);
      localStorage.setItem("token", data.token);
      loginLogoutshow();
      successmsg.style.display = "flex";
      btn.innerText = `${data.msg} ${data.name}`;
      console.log(btn.innerText);
      setTimeout(() => {
        successmsg.style.display = "none";
      }, 2000);
      loginPopup.style.display = "none";
      if (data.role == "admin") {
        window.location.href = "./admin/admin.html";
      }
    } else {
      console.log("else visitiod");
      successmsg.style.display = "flex";
      btn.style.backgroundColor = "red";
      data.err ? (btn.innerText = `${data.err}`) : "something went worng";
      setTimeout(() => {
        btn.style.backgroundColor = "#4CAF50";
        successmsg.style.display = "none";
      }, 3000);
      loginPopup.style.display = "none";
    }
  });
});
document.getElementById("guestadmin").addEventListener("click", () => {
  logit("bhiapatil@gmail.com", "suraj").then((data) => {
    if (data?.msg && data?.token) {
      console.log(data);
      localStorage.setItem("token", data.token);
      loginLogoutshow();
      successmsg.style.display = "flex";
      btn.innerText = `${data.msg} ${data.name}`;
      console.log(btn.innerText);
      setTimeout(() => {
        successmsg.style.display = "none";
      }, 2000);
      loginPopup.style.display = "none";
      if (data.role == "admin") {
        window.location.href = "../admin/admin.html";
      }
    } else {
      console.log("else visitiod");
      successmsg.style.display = "flex";
      btn.style.backgroundColor = "red";
      data.err ? (btn.innerText = `${data.err}`) : "something went worng";
      setTimeout(() => {
        btn.style.backgroundColor = "#4CAF50";
        successmsg.style.display = "none";
      }, 3000);
      loginPopup.style.display = "none";
    }
  });
});
}
// <---------------window onload ends ----------->


let   regit = async(name,email,password,role)=>{
let obj = {
    name,
    email,
    password,
    role
}
   let successmsg = document.getElementById("SucessfullMessage");
   let btn = successmsg.querySelector("#SucessfullMessagebtn");
   let signupPopup = document.getElementById("signupPopup");
  return fetch("http://localhost:8080/api/signup", {
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
       return data
     })
     .catch((error) => {
        btn.style.backgroundColor = "red";
        successmsg.style.display = "flex";
        btn.innerText = `${error.message}`;
        setTimeout(() => {
          btn.style.backgroundColor = "#4CAF50";
          successmsg.style.display = "none";
        }, 3000);
        signupPopup.style.display = "none";
        throw new Error(error);
     });
}

async function logit(e,psd){
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
        return data
      })
      .catch((error) => {
          let successmsg = document.getElementById("SucessfullMessage");
          let btn = successmsg.querySelector("#SucessfullMessagebtn");
          btn.style.backgroundColor = "red";
         successmsg.style.display = "flex";
     btn.innerText = `${error.message}`
     setTimeout(() => {
       btn.style.backgroundColor = "#4CAF50";
       successmsg.style.display = "none";
      }, 3000);
      loginPopup.style.display = "none";
      throw new Error(error)
    });

 }

