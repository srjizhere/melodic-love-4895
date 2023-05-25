let sort_by_price = () => {
  let sortValue = document.getElementById("sortbyvalue").value;
  let type = document.getElementById("type").value;
  getData(sortValue, type);
};
let filterbycategory = () => {
  let sortValue = document.getElementById("sortbyvalue").value;
  let type = document.getElementById("type").value;
  getData(sortValue, type);
};
let genderFilter = ()=>{
    let sortValue = document.getElementById("sortbyvalue").value;
    let type = document.getElementById("type").value;
    let gender = document.getElementById("gender").value;
    getData(sortValue, type,gender);
}

let add_to_cart = async (id) => {
  let successmsg = document.getElementById("SucessfullMessage");
  let btn = successmsg.querySelector("#SucessfullMessagebtn");
  let token = localStorage.getItem("token");
  if (token) {
    try {
      let data = await fetch("http://localhost:8080/api/cart/post", {
        method: "POST",
        body: JSON.stringify({ productid: id }),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
      });
      data = await data.json();
      if (data.err) {
        successmsg.style.display = "flex";
        btn.style.backgroundColor = "red";
        btn.innerText = `${data.err}`;
        setTimeout(() => {
          btn.style.backgroundColor = "#4CAF50";
          successmsg.style.display = "none";
        }, 3000);
      } else {
        successmsg.style.display = "flex";
        btn.innerText = `Added Successfully`;
        setTimeout(() => {
          successmsg.style.display = "none";
        }, 1500);
      }
    } catch (error) {
      console.log("error visited");
      console.log(error.message);
      successmsg.style.display = "flex";
      btn.style.backgroundColor = "red";
      btn.innerText = `${error.message}`;
      setTimeout(() => {
        btn.style.backgroundColor = "#4CAF50";
        successmsg.style.display = "none";
      }, 3000);
    }
  } else {
    let loginPopup = document.getElementById("loginPopup");
    loginPopup.style.display = "block";
  }
};
let show_clothes = (data) => {
  let clothes = document.getElementById("clothes");
  clothes.innerHTML = null;
  data.forEach(function (el, i) {
    let card = document.createElement("div");

    let img_div = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = el.logo;
    let brand = document.createElement("p");
    brand.innerText = el.brand;

    let name = document.createElement("h2");
    name.innerText = el.title;
    let price = document.createElement("h3");

    price.innerText = `INR ${el.price}`;

    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.className = "addcart";
    btn.addEventListener("click", () => add_to_cart(el._id));
    img_div.append(img1);
    card.append(img_div, brand, name, price, btn);
    clothes.append(card);
  });
};

// pi.example.com/endpoint?param1=value1&param2=value2
let getData = async (sort_by_price, filter_type,gender) => {
  let gender = "?category=Kids";
  filter_type =
    filter_type == "shirts"
      ? "&type=shirts"
      : filter_type == "pants"
      ? "&type=pants"
      : filter_type == "shoes"
      ? "&type=shoes"
      : filter_type == "skirts"
      ? "&type=skirts"
      : "";
  let data = await fetch("http://localhost:8080" + cate + filter_type, {
    method: "GET",
  });
  data = await data.json();
  if (sort_by_price == "low-high") {
    data.sort((a, b) => a.price - b.price);
  } else if (sort_by_price == "high-low") {
    data.sort((a, b) => b.price - a.price);
  }
  show_clothes(data);
};
getData();
