 let token = localStorage.getItem("token") || undefined
getData();
document.getElementById("logoutbtn").addEventListener("click",(e)=>{
  localStorage.removeItem("token")
  window.location.reload()
})

async function getData() {
  try {
    let data = await fetch("http://localhost:8080/api/adminproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    data = await data.json();
    if(data.err){
      alert("Please Login First")
      window.location.href = "../index.html"
    }else{
      showCards(data);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// logo: { type: String, required: true }, done / partial
// title: { type: String, required: true }, done
// category: { type: String, required: true }, done
// type: { type: String, required: true }, done
// brand: { type: String, required: true },
// price: { type: Number, required: true },  done
function showCards(arr) {
  console.log(arr[0])
  arr.forEach((e, i) => {
    const card = document.createElement("div");
    card.setAttribute('key',e._id)
    card.classList.add("card");

    // Create the image element
    const image = document.createElement("img");
    image.src = e.logo;
    image.alt = "Product image" + (i + 1);

    // Create the card header element
    const header = document.createElement("div");
    header.classList.add("card-header");
    header.textContent = `Product : ${i + 1}`;

    // Create the card body element
    const body = document.createElement("div");
    body.classList.add("card-body");

    // Create the label and input elements for name
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "product-name-" + (i + 1);
    nameLabel.textContent = "Title:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "product-name-" + (i + 1);
    nameInput.value = e.title;
    nameInput.readOnly = true;

    // Create the label and input elements for price
    const priceLabel = document.createElement("label");
    priceLabel.htmlFor = "product-price-" + (i + 1);
    priceLabel.innerHTML =
      "Price: " + ' <i class="fas fa-rupee-sign fa-sm"></i>';
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.id = "product-price-" + (i + 1);
    priceInput.value = e.price;
    priceInput.readOnly = true;

    // for Category
    const labelcategory = document.createElement("label");
    labelcategory.setAttribute("for", "card-body-category-" + (i + 1));
    labelcategory.textContent = "Category:";

    const selectcategory = document.createElement("select");
    selectcategory.setAttribute("name", "card-body-category");
    selectcategory.setAttribute("id", "card-body-category-" + (i + 1));
    selectcategory.value = e.category;
    selectcategory.disabled = true;

    const option1category = document.createElement("option");
    option1category.setAttribute("value", "Mens");
    option1category.textContent = "Men";

    const option2category = document.createElement("option");
    option2category.setAttribute("value", "Womens");
    option2category.textContent = "Women";

    const option3category = document.createElement("option");
    option3category.setAttribute("value", "Kids");
    option3category.textContent = "Kids";

    selectcategory.appendChild(option1category);
    selectcategory.appendChild(option2category);
    selectcategory.appendChild(option3category);

    // Append the label and select element to the parent element of your choice

    // create a label element
    const labelType = document.createElement("label");
    labelType.setAttribute("for", "card-body-type-" + (i + 1));
    labelType.textContent = "Type:";

    // create a select element
    const selectType = document.createElement("select");
    selectType.setAttribute("name", "card-body-type");
    selectType.setAttribute("id", "card-body-type" + (i + 1));
    selectType.value = e.type;
    selectType.disabled = true;
    // create option elements and add them to select element
    const option1Type = document.createElement("option");
    option1Type.setAttribute("value", "shirts");
    option1Type.textContent = "Shirt";

    const option2Type = document.createElement("option");
    option2Type.setAttribute("value", "pants");
    option2Type.textContent = "Pant";

    const option3Type = document.createElement("option");
    option3Type.setAttribute("value", "shoes");
    option3Type.textContent = "Shoe";

    selectType.appendChild(option1Type);
    selectType.appendChild(option2Type);
    selectType.appendChild(option3Type);

    // Create the label and input elements for description
    const labelimageUrl = document.createElement("label");
    labelimageUrl.htmlFor = "product-url" + (i + 1);
    labelimageUrl.textContent = "Image Url:";
    const InputimageUrl = document.createElement("input");
    InputimageUrl.type = "text";
    InputimageUrl.id = "product-url" + (i + 1);
    InputimageUrl.value = e.logo;
    InputimageUrl.readOnly = true;

    // Create the label and input elements for rating
    const brandLabel = document.createElement("label");
    brandLabel.htmlFor = "product-brand-" + (i + 1);
    brandLabel.textContent = "Brand :";
    const brandInput = document.createElement("input");
    brandInput.type = "text";
    brandInput.id = "product-brand-" + (i + 1);
    brandInput.value = e.brand;
    brandInput.readOnly = true;

    // Append all the elements to the card body
    body.appendChild(nameLabel);
    body.appendChild(nameInput);
    body.appendChild(priceLabel);
    body.appendChild(priceInput);
    body.appendChild(labelcategory);
    body.appendChild(selectcategory);
    body.appendChild(labelType);
    body.appendChild(selectType);
    body.appendChild(labelimageUrl);
    body.appendChild(InputimageUrl);
    body.appendChild(brandLabel);
    body.appendChild(brandInput);

    // Create the card footer element
    const footer = document.createElement("div");
    footer.classList.add("card-footer");
    footer.textContent = "Edit";

    // Append the image, header, body, and footer to the card
    card.appendChild(image);
    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);
    // Append the card to the DOM
    const container = document.getElementById("cardcontainer");
    container.appendChild(card);
  });

  // Get all the edit buttons on the page
  const editButtons = document.querySelectorAll(".card-footer");
  // Loop through each edit button
  editButtons.forEach((button) => {
    // Add a click event listener to the button
    button.addEventListener("click", () => {
      // Get the card body and inputs
      const cardBody = button.parentElement.querySelector(".card-body");
      let productID = button.parentElement.getAttribute('key');
      const inputs = cardBody.querySelectorAll("input");
      const selects = cardBody.querySelectorAll("select");
      selects.forEach((select) => {
        // Toggle the edit mode on the select
        select.toggleAttribute("disabled");
        select.classList.toggle("edit-mode");
      });
      inputs.forEach((input) => {
        input.toggleAttribute("readonly");
        input.classList.toggle("edit-mode");
      });
      // Toggle the text on the edit button
      if (button.classList.contains("edit-mode")) {
        
        let obj = {}
        obj["title"] = inputs[0].value;
        obj["price"] = inputs[1].value;
        obj["logo"] = inputs[2].value;
        obj["brand"] = inputs[3].value;
        obj["category"] = selects[0].value;
        obj["type"] = selects[1].value;
        updateCard(obj,productID)
      }
      button.classList.toggle("edit-mode");
      button.textContent = button.classList.contains("edit-mode")
        ? "Update"
        : "Edit";
        
    });
  });
}
// logo: { type: String, required: true },
// title: { type: String, required: true },
// category: { type: String, required: true },
// type: { type: String, required: true },
// brand: { type: String, required: true },
// price: { type: Number, required: true },
// rating: { type: Number},
// editorID: {type:mongoose.Schema.Types.ObjectId,required:true,ref:"admin"}

function changeVisibility() {
  let toogleBtn = document.getElementById("hideseebtn");
  toogleBtn.innerText =
    toogleBtn.innerText == "SHOW ITEMS" ? "ADD MORE" : "SHOW ITEMS";
  let adminpanel = document.getElementById("adminpanel");
  let cardcontainer = document.getElementById("cardcontainer");
  if (toogleBtn.innerText === "ADD MORE") {
    adminpanel.style.display = "none";
    cardcontainer.style.display = "grid";
  } else {
    adminpanel.style.display = "block";
    cardcontainer.style.display = "none";
  }
}
document.getElementById("formdata").addEventListener("submit", async (e) => {
  e.preventDefault();
  let title = e.target[0].value;
  let price = e.target[1].value;
  let category = e.target[2].value;
  let type = e.target[3].value;
  let logo = e.target[4].value;
  let brand = e.target[5].value;
  let obj = {
    logo,
    title,
    category,
    type,
    price,
    brand,
  };

  try {
    const api = `http://localhost:8080/api/adminproducts/post`;
    const response = await fetch(api, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        //making sure the data wiil be appended or gone
        //server can only see json data
        "Content-Type": "application/json",
           Authorization: `bearer ${token}`,
      },
    });
    const data = await response.json();
    if(data.msg) alert(data.msg);
    else alert(data.err || "something went wrong")
  } catch (error) {
    alert(error.message)
    console.log(error.stack);
  }
});

let  updateCard = async(obj,productID)=>{
  try {
    let data = await fetch(
      `http://localhost:8080/api/adminproducts/update/${productID}`,
      {
        method: "PATCH",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    data = await data.json();
    console.log(data);
    if(data?.err) alert(data.err);  
    else if(data?.msg) alert(data.msg);
  } catch (error) {
    alert(error.message)
  }

}