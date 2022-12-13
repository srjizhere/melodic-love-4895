let fiarr = ["./landing/landing_img/caroimgwht.png","./landing/landing_img/carofst2nd.png","https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw4e75c839/images/mega-menu/blog/diva-dresses-m.jpg"]
let fi =0;
let fset;
fstart()
function fstart(){
    fset= setInterval(() => {
        let fimg = document.querySelector("#fcaroimg>img");
        if(fi>2){
            fi=0;
        }
        fimg.src= fiarr[fi++]
        
    }, 3000);
    
}

function fgopre(){
    clearInterval(fset)
    if(fi>0){
        fi--;
        let fimg = document.querySelector("#fcaroimg>img");
        fimg.src= fiarr[fi]
    }else{
        fi=2
        let fimg = document.querySelector("#fcaroimg>img");
        fimg.src= fiarr[fi]
    }

    fstart()
}
function fgonxt(){
    clearInterval(fset)
    if(fi<2){
        fi++
    }else{
        fi=0;
    }
    let fimg = document.querySelector("#fcaroimg>img");
    fimg.src= fiarr[fi]
    fstart()
}

let objarr = [
    {
        img:"https://n.nordstrommedia.com/id/sr3/1c564392-3e5f-4ed9-ad52-20a0684e7ead.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGC",
        price: 8051.40,
        rating:4.5
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1c564392-3e5f-4ed9-ad52-20a0684e7ead.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGC",
        price: 8051.40,
        rating:4.5
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1c564392-3e5f-4ed9-ad52-20a0684e7ead.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGC",
        price: 8051.40,
        rating:4.5
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1c564392-3e5f-4ed9-ad52-20a0684e7ead.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGC",
        price: 8051.40,
        rating:4.5
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1c564392-3e5f-4ed9-ad52-20a0684e7ead.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGC",
        price: 8051.40,
        rating:4.5
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/1c564392-3e5f-4ed9-ad52-20a0684e7ead.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGC",
        price: 8051.40,
        rating:4.5
    }

]
festiv_deco()
function festiv_deco(){
    let container = document.getElementById("objslider")

    let box = document.querySelectorAll(".obj_chunk");
    console.log(box)
    let deco_i = 0;
    box.forEach(e => {
        let imae = document.createElement("img")
        imae.setAttribute("src",objarr[deco_i].img)
        console.log(imae)
        let occasion = document.createElement("h3")
        occasion.innerText= objarr[deco_i].occasion;
        occasion.setAttribute("class","occasion")

        let tag = document.createElement("h4");
        tag.innerHTML= objarr[deco_i].tag;
    

        let brand = document.createElement("h2");
        brand.innerText=objarr[deco_i].brand;

        let price = document.createElement("h2");
        price.innerText=objarr[deco_i].price;

        let rating = document.createElement("h2");
         rating.innerText=objarr[deco_i].rating;

        deco_i++;
        e.append(imae,occasion,tag,brand,price,rating)
    });










}