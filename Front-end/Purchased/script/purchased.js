let token = localStorage.getItem("token");
let getData = async () => {
  try {
    let data = await fetch("http://localhost:8080/api/cart/history", {
      method: "GET",
      headers: {
        authorization: `bearer ${token}`,
      },
    });

    data = await data.json();
    console.log(data);
    show_product(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

function show_product(data) {
  data.reverse()
  let append_div = document.getElementById("product_container");
  let subtotal = document.getElementById("amount");
  let total = 0;
  append_div.innerHTML = null;
  data.forEach(function (element, i) {
    let purchasedDate  =new Date(element.createdAt)
    console.log(purchasedDate.getDate());
    purchasedDate = purchasedDate.getDate().toString() +"/"+ (purchasedDate.getMonth()+1)+ "/" +purchasedDate.getFullYear()
    console.log(purchasedDate);

    let el = element.productid;

    let card = document.createElement("div");

    let img_div = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = el.logo;

    let tag = document.createElement("h4");
    tag.innerText = el.title;
    tag.style.color = "green";

    let brand = document.createElement("h3");
    brand.innerText = el.brand;

    let name = document.createElement("p");
    name.innerText = el.title;
    total += el.price;
    let price = document.createElement("h3");
    price.innerText = `INR ${el.price}`;
    price.style.color = "red";
    let time = document.createElement("p");
    time.innerText = `Purchased on:  ${purchasedDate}`
    //if(img_div.style.hover)
    img_div.append(img1);
    card.append(img_div, tag, brand, name, price, time);
    append_div.append(card);
  });
  subtotal.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${total.toFixed(
    2
  )}`;
}



