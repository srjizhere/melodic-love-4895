let token = localStorage.getItem("token");
let getData = async () => {
  try {
    let data = await fetch("http://localhost:8080/api/cart", {
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
// brand: "rebok";
// category: "Mens";
// editorID: "644eda9e7bc0660f67f1bebd";
// logo: "https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700";
// price: 2000;
// title: "Plain White";
// type: "shirts";
// __v: 0;
// _id: "644edc967bc0660f67f1bec5";

function show_product(data) {
  let append_div = document.getElementById("product_container");
  let subtotal = document.getElementById("amount");
  let total =0;
  append_div.innerHTML = null;
  data.forEach(function (element, i) {
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
    total+=el.price
    let price = document.createElement("h3");
    price.innerText = `INR ${el.price}`;
    price.style.color = "red";
    let remov = document.createElement("button");
    remov.innerText = "Remove";
    remov.addEventListener("click", function () {
      product_remove(element._id);
    });
    //if(img_div.style.hover)
    img_div.append(img1);
    card.append(img_div, tag, brand, name, price, remov);
    append_div.append(card);
  });
  subtotal.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${total}`;
}

let product_remove = async (id) => {
  console.log(id);
  try {
    let data = await fetch("http://localhost:8080/api/cart/remove/"+id, {
        method:"DELETE",
      headers: {
           'Content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    data = await data.json();
    if(data.msg){
        getData()
    }
  } catch (error) {
    console.log(error);
  }
};


let buy = document.getElementById("buy");
buy.addEventListener("click", function () {
 
});
