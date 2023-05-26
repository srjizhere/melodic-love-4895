let fiarr = [
  "./landing/landing_img/caroimgwht.png",
  "./landing/landing_img/carofst2nd.png",
  "https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw4e75c839/images/mega-menu/blog/diva-dresses-m.jpg",
];
let fi = 0;
let fset;
fstart();
function fstart() {
  fset = setInterval(() => {
    let fimg = document.querySelector("#fcaroimg>img");
    if (fi > 2) {
      fi = 0;
    }
    fimg.src = fiarr[fi++];
  }, 3000);
}

function fgopre() {
  clearInterval(fset);
  if (fi > 0) {
    fi--;
    let fimg = document.querySelector("#fcaroimg>img");
    fimg.src = fiarr[fi];
  } else {
    fi = 2;
    let fimg = document.querySelector("#fcaroimg>img");
    fimg.src = fiarr[fi];
  }

  fstart();
}
function fgonxt() {
  clearInterval(fset);
  if (fi < 2) {
    fi++;
  } else {
    fi = 0;
  }
  let fimg = document.querySelector("#fcaroimg>img");
  fimg.src = fiarr[fi];
  fstart();
}

let objarr = [
  {
    img: "https://n.nordstrommedia.com/id/sr3/1c564392-3e5f-4ed9-ad52-20a0684e7ead.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "UGC",
    price: 8051.4,
    rating: 4.5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/6aee57d0-e10e-4904-9628-b5fdf2d0640b.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "BrinkerStock",
    price: 8051.4,
    rating: 3.5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/56478d5b-4363-4a23-a312-706637464f08.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "The North Face",
    price: 9051.4,
    rating: 4.5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/e67459fb-5776-4597-b1f7-af7106c0441d.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "Dyson",
    price: 12051.4,
    rating: 1.5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/b0199428-c87b-4786-8ffa-102e148aef3a.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "Nordstrom",
    price: 8051.4,
    rating: 4.5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/dea98c12-40e0-4e97-9017-979ff0fe2859.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "UGG®",
    price: 8051.4,
    rating: 4.5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/02a0f1a3-4b05-4cbf-8fa0-ee74707eecab.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "UGG®",
    price: 8051.4,
    rating: 4.5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/d3219a4f-0b52-4df1-818d-c1e13a9d2b5f.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "BP.®",
    price: 8051.4,
    rating: 4.5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/c593025f-227c-4adc-87f8-d30413f77db6.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "Revise!",
    brand: "Dipitique",
    price: 801.4,
    rating: 2,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/61e25487-c956-4f06-8ae8-3e3c9cb4532b.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "KGL.®",
    price: 7602.4,
    rating: 5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/bb08eea1-f884-487a-b077-16838db72eee.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "Sustainable Style!",
    brand: "Nordgump.®",
    price: 6001.4,
    rating: 3,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/d3d9a69a-42cd-4a17-b925-57fc0398548e.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "Sustainable Style!",
    brand: "Converse",
    price: 3001.4,
    rating: 1,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/75da7256-388b-4d3f-ac0e-010218f48e1d.jpeg",
    occasion: "Arrives On Christmas",
    tag: "high Style!",
    brand: "YFS.@",
    price: 3001.4,
    rating: 5,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/58e65ceb-a016-47a3-97ed-6e5752a1eafe.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "Night Style!",
    brand: "Longino",
    price: 657.4,
    rating: 4,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/43aede3d-e203-4203-8de6-fd7b3be65836.jpeg",
    occasion: "Arrives Before Christmas",
    tag: "New!",
    brand: "NODPOD",
    price: 657.4,
    rating: 4,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/8222eb9e-2d38-46ff-b6c7-1b8fa53b1eb5.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
    occasion: "Arrives Before Christmas",
    tag: "China!",
    brand: "Adibos",
    price: 6457.4,
    rating: 2,
  },
];
let deco_i = 0;
festiv_deco(deco_i);
function festiv_deco(deco_i) {
  let box = document.querySelectorAll(".obj_chunk");
  // console.log(box)
  box.forEach((e) => {
    e.innerHTML = null;
  });
  box.forEach((e) => {
    let imae = document.createElement("img");
    imae.setAttribute("src", objarr[deco_i].img);
    let occasion = document.createElement("h3");
    occasion.innerText = objarr[deco_i].occasion;
    occasion.setAttribute("class", "occasion");

    let tag = document.createElement("h4");
    tag.innerHTML = objarr[deco_i].tag;
    tag.setAttribute("class", "tag");

    let brand = document.createElement("h4");
    brand.innerText = objarr[deco_i].brand;
    brand.setAttribute("class", "brand");

    let price = document.createElement("h4");
    price.innerText = objarr[deco_i].price;
    price.setAttribute("class", "price");

    let rating = document.createElement("h2");
    let r = objarr[deco_i].rating;
    rating.innerText = r;

    if (r < 2) {
      rating.setAttribute("class", "worst");
    } else if (r < 3) {
      rating.setAttribute("class", "bad");
    } else if (r < 4) {
      rating.setAttribute("class", "good");
    } else if (r < 5) {
      rating.setAttribute("class", "best");
    } else if (r == 5) {
      rating.setAttribute("class", "impossible");
    }
    deco_i++;
    e.append(imae, occasion, tag, brand, price, rating);
  });
}
function obj_go_pre() {
  if (deco_i < 4) {
    deco_i = objarr.length - 4;
  } else {
    deco_i -= 4;
  }
  festiv_deco(deco_i);
}
function obj_go_nxt() {
  if (deco_i >= objarr.length - 4) {
    deco_i = 0;
  } else {
    deco_i += 4;
  }
  festiv_deco(deco_i);
}
let i2 = 4;
let partcaroarr = [
  "./landing/landing_img/banner_cover_7.jpeg",
  "./landing/landing_img/bottom_caraousel_16.jpeg",
  "./landing/landing_img/bottom_caraousel_13.jpeg",
  "./landing/landing_img/jean-luc-catarin-0TH0YGKS1iU-unsplash.jpg",
  "./landing/landing_img/omoda-nl-UDetRgBd0_Y-unsplash2.jpg",
];
let sec_half_detail = document.getElementById("details");
partialcaro();
function partialcaro() {
  sec_half_detail.innerHTML = null;
  if (i2 > partcaroarr.length - 1) {
    i2 = 0;
  }
  let img = document.querySelector("#fsthalfpart>img");
  img.src = partcaroarr[i2];
  if (i2 == 0) {
    let h1 = document.createElement("h1");
    h1.innerText = "Fasion in all ages";

    let h3 = document.createElement("h3");
    h3.innerText = "Make best choice that no one has";

    let h4 = document.createElement("h4");
    h4.innerText =
      "Why should youngster have all the fun \n be with us we always have best options \n for you \n";
    sec_half_detail.append(h1, h3, h4);
  }
  if (i2 == 1) {
    let h1 = document.createElement("h1");
    h1.innerText = "The Leather Fantom";

    let h3 = document.createElement("h3");
    h3.innerText = "Super comfort with the  attiude";

    let h4 = document.createElement("h4");
    h4.innerText =
      "Make a difference with new  style \n we are here for all comfort \n for you with all options you need \n";
    sec_half_detail.append(h1, h3, h4);
  }

  if (i2 == 2) {
    let h1 = document.createElement("h1");
    h1.innerText = "Super Light";

    let h3 = document.createElement("h3");
    h3.innerText = "Winter preparation ";

    let h4 = document.createElement("h4");
    h4.innerText =
      "Be close to the nature \n we bought for you \n new and natural wool made stuffs \n in the footwear options \n making shoes and the perfect wears\n why are you waiting \n order now";
    sec_half_detail.append(h1, h3, h4);
  }
  if (i2 == 3) {
    let h1 = document.createElement("h1");
    h1.innerText = "Bow With Style";

    let h3 = document.createElement("h3");
    h3.innerText = "Gentle always on your body ";

    let h4 = document.createElement("h4");
    h4.innerText =
      "The glossy look is always waiting \n for you \n be the change  \n that makes you unique \n making shoes and the perfect wears\n are waiting for you";
    sec_half_detail.append(h1, h3, h4);
  }

  if (i2 == 4) {
    let h1 = document.createElement("h1");
    h1.innerText = "Just Chill";

    let h3 = document.createElement("h3");
    h3.innerText = "Be the picture perfect";

    let h4 = document.createElement("h4");
    h4.innerText =
      "The glamour comes from the glamorus wear \n  always have lates set of clothings  \n be the one with choices \n get best deals \n which are waiting for you";
    sec_half_detail.append(h1, h3, h4);
  }

  i2++;
}
setInterval(partialcaro, 4000);

function to_women() {
  window.location.href = "./women/women.html";
}
function to_men() {
  window.location.href = "./men/men.html";
}
function to_kid() {
  window.location.href = "./kids/kid.html";
}
function to_kid() {
  window.location.href = "./kids/kid.html";
}
function to_beauty() {
  window.location.href = "./beauty/beauty.html";
}
