


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
        name:"Chuck Taylor® All Star® High Top Platform Sneaker",
        img1:"https://n.nordstrommedia.com/id/sr3/025167c0-eb67-49af-ab34-f1a131481e1a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/0d6f4b2e-d75f-4802-bc8b-5a36c53f1778.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:6427.60,
        brand:"CONVERSE",
        feature:"",
         rating:1,
         mfg:2,
         color:"",
         mateial:"",
         size:2,
    },
    {
        name:"Laguna Waterproof Lug Sole Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/ab434c0b-ea08-45f3-94a1-315408a2791a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/defc1325-3661-483f-9c4a-0b7a1d8af1f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:8076.25,
        brand:"SAM EDELMAN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Neumel Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/ed295cca-0bb1-45f3-9080-040a37c25945.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/2639fd51-5179-492f-a434-8fec06a69e84.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:7076.25,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Quad plateform",
        img1:"https://n.nordstrommedia.com/id/sr3/b3b0bd47-b28c-4a23-a992-2c70950e4f23.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/4476bdfb-c284-4f8a-bf71-3f04b42af1b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:4076.25,
        brand:"DR Martens",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"UGG Classic Mini II Genuine Shearling Lined Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/f3333929-b6b6-4998-a734-e616bdd8d97d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/e9708532-faee-446c-8292-f70d7ae71a73.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:13076.25,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Classic Mini Waterproof Clear Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/510dab4b-79be-450f-b5ba-6216249684f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/3c9f28d3-c01c-46b4-8e46-89cabf1a7dfd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:10076.25,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Hayle Platform Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/f628d1bd-552b-401c-917c-1d5b3507fdcc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/f2e1f3ea-53e7-44ca-af71-8967e238ba1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:8076.25,
        brand:"STEVE MAIDEN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Original Series Water Resistant Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/c4f0ea6f-0ace-4b81-8ab6-af0fd31e739d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/c90423b6-a5dc-4ced-be8d-23150c125532.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:19076.25,
        brand:"BLUNDSTONE FOOTWEAR",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Dahlia Waterproof Bootie",
        img1:"https://n.nordstrommedia.com/id/sr3/7778324d-a695-4559-a85e-689b37e8b04b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/85b2def1-eb9c-45ab-bb8d-e95ad7b5b2eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:8076.25,
        brand:"BLONDO",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Adirondack III Waterproof Bootie",
        img1:"https://n.nordstrommedia.com/id/sr3/f7a68b19-c775-4519-b10d-77d160e7db76.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/13d9cf37-f3c2-4477-95d0-5d07adc3d643.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:21076.25,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Huey H2O Waterproof Bootie",
        img1:"https://n.nordstrommedia.com/id/sr3/8d79fd0e-89b4-449f-8a46-6d70fb9b9052.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/6c1e979d-3159-448a-8b0f-f7f503448cfe.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:7076.25,
        brand:"DOLCE VITA",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Chuck Taylor® All Star® High Top Platform Sneaker",
        img1:"https://n.nordstrommedia.com/id/sr3/025167c0-eb67-49af-ab34-f1a131481e1a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/0d6f4b2e-d75f-4802-bc8b-5a36c53f1778.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:6427.60,
        brand:"CONVERSE",
        feature:"",
         rating:1,
         mfg:2,
         color:"",
         mateial:"",
         size:2,
    },
    {
        name:"Laguna Waterproof Lug Sole Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/ab434c0b-ea08-45f3-94a1-315408a2791a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/defc1325-3661-483f-9c4a-0b7a1d8af1f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:8076.25,
        brand:"SAM EDELMAN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Neumel Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/ed295cca-0bb1-45f3-9080-040a37c25945.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/2639fd51-5179-492f-a434-8fec06a69e84.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:7076.25,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Quad plateform",
        img1:"https://n.nordstrommedia.com/id/sr3/b3b0bd47-b28c-4a23-a992-2c70950e4f23.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/4476bdfb-c284-4f8a-bf71-3f04b42af1b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:4076.25,
        brand:"DR Martens",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"UGG Classic Mini II Genuine Shearling Lined Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/f3333929-b6b6-4998-a734-e616bdd8d97d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/e9708532-faee-446c-8292-f70d7ae71a73.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:13076.25,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Classic Mini Waterproof Clear Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/510dab4b-79be-450f-b5ba-6216249684f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/3c9f28d3-c01c-46b4-8e46-89cabf1a7dfd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:10076.25,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Hayle Platform Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/f628d1bd-552b-401c-917c-1d5b3507fdcc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/f2e1f3ea-53e7-44ca-af71-8967e238ba1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:8076.25,
        brand:"STEVE MAIDEN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Original Series Water Resistant Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/c4f0ea6f-0ace-4b81-8ab6-af0fd31e739d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/c90423b6-a5dc-4ced-be8d-23150c125532.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:19076.25,
        brand:"BLUNDSTONE FOOTWEAR",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Dahlia Waterproof Bootie",
        img1:"https://n.nordstrommedia.com/id/sr3/7778324d-a695-4559-a85e-689b37e8b04b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/85b2def1-eb9c-45ab-bb8d-e95ad7b5b2eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:8076.25,
        brand:"BLONDO",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Adirondack III Waterproof Bootie",
        img1:"https://n.nordstrommedia.com/id/sr3/f7a68b19-c775-4519-b10d-77d160e7db76.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/13d9cf37-f3c2-4477-95d0-5d07adc3d643.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:21076.25,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Huey H2O Waterproof Bootie",
        img1:"https://n.nordstrommedia.com/id/sr3/8d79fd0e-89b4-449f-8a46-6d70fb9b9052.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/6c1e979d-3159-448a-8b0f-f7f503448cfe.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:7076.25,
        brand:"DOLCE VITA",
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