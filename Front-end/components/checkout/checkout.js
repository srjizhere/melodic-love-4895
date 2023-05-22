const token = localStorage.getItem("token")
const  checkitout = async () => {

  try {
    let data = await fetch("http://localhost:8080/api/cart/buy", {
      method: "POST",
      headers: {
        authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    checkitout()
   let pop =  document.querySelector(".popup");
   pop.style.display  = "flex";
   setInterval(() => {
       pop.style.display  = "none";
       window.location.href = "../../index.html"
   },2000);
});
