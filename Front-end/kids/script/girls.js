


// filter div

let filter_data=["Size","Color","Brand","Feature","Fit","Material","Occasion","Price","Sale","Sleeve Length","Sports League","Sports Team","Style"]
show_filter_data(filter_data)

// let append_div=document.getElementById("filter_div")
function show_filter_data(data){
    data.forEach(function(el){
//console.log(el)
        let div=document.createElement('div')
       
        div.setAttribute("class","filter_div")
        let div_a=document.createElement("div")
        div_a.innerText= el
        div_a.setAttribute("class","test")
        
        let div_b=document.createElement('div')
        div_b.innerText="+"
        div.append(div_a,div_b)
       document.querySelector("#filter_div").append(div)
    })
}
let testing_div=document.querySelectorAll(".test")
testing_div.forEach(function(el){
    el.addEventListener("click",function (){
        test(el)
    })
})

function test(el){
    // console.log(el.innerText)
    if(el.innerText=="Fit"){
        console.log("Hii i am fit")
    }
    else if(el.innerText=="Size"){
        console.log("Hii Iam Size")
    }
}


let clothes_data=[
    
    {
        name:"Kids' Hooded Long Sleeve Drop Waist Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/5346e8ce-4194-4c1d-8854-2e8a209b9892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/0d186b53-1530-4a40-bbab-d53a34236990.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1845.68,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Live In High Waist Leggings",
        img1:"https://n.nordstrommedia.com/id/sr3/1b9fd482-08c0-4c8a-8fae-e24822e4c287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a43140d8-dcb0-4588-91c0-1571408ff8b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3427.98,
        brand:"ZELLA GIRL",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Weekend French Terry Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/f077d139-e6d7-43de-931d-40cddb55d207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/dd6ff0ba-c245-41a6-872f-9cf468008df0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2003.98,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Mossbud Reversible Water Repellent Faux Fur Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/64f5f040-70d8-4930-9822-ac394b47c8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/137da316-b2ee-4335-b05e-171a31449816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5489.36,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    
    {
        name:"Kids' Hooded Long Sleeve Drop Waist Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/5346e8ce-4194-4c1d-8854-2e8a209b9892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/0d186b53-1530-4a40-bbab-d53a34236990.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1845.68,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Live In High Waist Leggings",
        img1:"https://n.nordstrommedia.com/id/sr3/1b9fd482-08c0-4c8a-8fae-e24822e4c287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a43140d8-dcb0-4588-91c0-1571408ff8b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3427.98,
        brand:"ZELLA GIRL",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Weekend French Terry Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/f077d139-e6d7-43de-931d-40cddb55d207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/dd6ff0ba-c245-41a6-872f-9cf468008df0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2003.98,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Mossbud Reversible Water Repellent Faux Fur Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/64f5f040-70d8-4930-9822-ac394b47c8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/137da316-b2ee-4335-b05e-171a31449816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5489.36,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Hooded Long Sleeve Drop Waist Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/5346e8ce-4194-4c1d-8854-2e8a209b9892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/0d186b53-1530-4a40-bbab-d53a34236990.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1845.68,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Live In High Waist Leggings",
        img1:"https://n.nordstrommedia.com/id/sr3/1b9fd482-08c0-4c8a-8fae-e24822e4c287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a43140d8-dcb0-4588-91c0-1571408ff8b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3427.98,
        brand:"ZELLA GIRL",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Weekend French Terry Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/f077d139-e6d7-43de-931d-40cddb55d207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/dd6ff0ba-c245-41a6-872f-9cf468008df0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2003.98,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Mossbud Reversible Water Repellent Faux Fur Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/64f5f040-70d8-4930-9822-ac394b47c8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/137da316-b2ee-4335-b05e-171a31449816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5489.36,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Hooded Long Sleeve Drop Waist Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/5346e8ce-4194-4c1d-8854-2e8a209b9892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/0d186b53-1530-4a40-bbab-d53a34236990.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1845.68,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Live In High Waist Leggings",
        img1:"https://n.nordstrommedia.com/id/sr3/1b9fd482-08c0-4c8a-8fae-e24822e4c287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a43140d8-dcb0-4588-91c0-1571408ff8b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3427.98,
        brand:"ZELLA GIRL",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Weekend French Terry Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/f077d139-e6d7-43de-931d-40cddb55d207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/dd6ff0ba-c245-41a6-872f-9cf468008df0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2003.98,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Mossbud Reversible Water Repellent Faux Fur Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/64f5f040-70d8-4930-9822-ac394b47c8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/137da316-b2ee-4335-b05e-171a31449816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5489.36,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Hooded Long Sleeve Drop Waist Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/5346e8ce-4194-4c1d-8854-2e8a209b9892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/0d186b53-1530-4a40-bbab-d53a34236990.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1845.68,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Live In High Waist Leggings",
        img1:"https://n.nordstrommedia.com/id/sr3/1b9fd482-08c0-4c8a-8fae-e24822e4c287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a43140d8-dcb0-4588-91c0-1571408ff8b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3427.98,
        brand:"ZELLA GIRL",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Weekend French Terry Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/f077d139-e6d7-43de-931d-40cddb55d207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/dd6ff0ba-c245-41a6-872f-9cf468008df0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2003.98,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Mossbud Reversible Water Repellent Faux Fur Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/64f5f040-70d8-4930-9822-ac394b47c8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/137da316-b2ee-4335-b05e-171a31449816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5489.36,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Hooded Long Sleeve Drop Waist Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/5346e8ce-4194-4c1d-8854-2e8a209b9892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/0d186b53-1530-4a40-bbab-d53a34236990.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1845.68,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Live In High Waist Leggings",
        img1:"https://n.nordstrommedia.com/id/sr3/1b9fd482-08c0-4c8a-8fae-e24822e4c287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a43140d8-dcb0-4588-91c0-1571408ff8b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3427.98,
        brand:"ZELLA GIRL",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Weekend French Terry Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/f077d139-e6d7-43de-931d-40cddb55d207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/dd6ff0ba-c245-41a6-872f-9cf468008df0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2003.98,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Mossbud Reversible Water Repellent Faux Fur Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/64f5f040-70d8-4930-9822-ac394b47c8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/137da316-b2ee-4335-b05e-171a31449816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5489.36,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Hooded Long Sleeve Drop Waist Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/5346e8ce-4194-4c1d-8854-2e8a209b9892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/0d186b53-1530-4a40-bbab-d53a34236990.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1845.68,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Live In High Waist Leggings",
        img1:"https://n.nordstrommedia.com/id/sr3/1b9fd482-08c0-4c8a-8fae-e24822e4c287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a43140d8-dcb0-4588-91c0-1571408ff8b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3427.98,
        brand:"ZELLA GIRL",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Weekend French Terry Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/f077d139-e6d7-43de-931d-40cddb55d207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/dd6ff0ba-c245-41a6-872f-9cf468008df0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2003.98,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Mossbud Reversible Water Repellent Faux Fur Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/64f5f040-70d8-4930-9822-ac394b47c8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/137da316-b2ee-4335-b05e-171a31449816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5489.36,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Hooded Long Sleeve Drop Waist Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/5346e8ce-4194-4c1d-8854-2e8a209b9892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/0d186b53-1530-4a40-bbab-d53a34236990.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1845.68,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Kids' Live In High Waist Leggings",
        img1:"https://n.nordstrommedia.com/id/sr3/1b9fd482-08c0-4c8a-8fae-e24822e4c287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a43140d8-dcb0-4588-91c0-1571408ff8b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3427.98,
        brand:"ZELLA GIRL",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Weekend French Terry Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/f077d139-e6d7-43de-931d-40cddb55d207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/dd6ff0ba-c245-41a6-872f-9cf468008df0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2003.98,
        brand:"TUCKER + TATE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Kids' Mossbud Reversible Water Repellent Faux Fur Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/64f5f040-70d8-4930-9822-ac394b47c8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/137da316-b2ee-4335-b05e-171a31449816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5489.36,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    // {
    //     name:"",
    //     img1:"",
    //     img2:"",
    //     price:1,
    //     brand:"",
    //     feature:"",
    //     rating:"",
    //     mfg:2,
    //     color:"",
    //     material:"",
    //     size:3
    // },
    


]
show_clothes(clothes_data)

function show_clothes(data){
    data.forEach(function(el){
        let card=document.createElement("div")
        let img_div=document.createElement("div")
        let img2=document.createElement("img")
        img2.src=el.img2
        let img1=document.createElement("img")
        img1.src=el.img1
        let tag=document.createElement("h4")
        tag.innerText="Arriving Before Chritmas"
        tag.style.color="green"
        let brand=document.createElement("h3")
        brand.innerText=el.brand
        let name=document.createElement("p")
        name.innerText=el.name
        let price=document.createElement("h3")
        price.innerText=`INR ${el.price}`
        console.log(tag)
        //if(img_div.style.hover)
        img_div.append(img1)
        card.append(img_div,tag,brand,name,price)
        document.querySelector("#clothes").append(card)
    })
}