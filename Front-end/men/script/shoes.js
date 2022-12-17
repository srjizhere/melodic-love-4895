
let addPage=[]

// filter div

let filter_data=["Size","Color","Brand","Feature","Fit","Material","Occasion","Price","Sale","Sleeve Length","Sports League","Sports Team","Style"]
show_filter_data(filter_data)

// let append_div=document.getElementById("filter_div")
function show_filter_data(data){
    data.forEach(function(el,i){
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
        name:"Neumel Chukka Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/bb741d4b-edc2-4b22-a3d0-c5874a61eecc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/4bd0da62-46ae-412c-a1ca-26338477cdb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:7904.89,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"UGG Emmett Waterproof Snow Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/66f7a7e4-184e-4054-aafb-e3bc6acc9d50.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/cd569e9d-8c6b-45d3-b94b-b1ee1d8fb629.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:12298.79,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"6 Inch Premium Waterproof Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/af5b3656-2110-4c8d-9bfd-04a059b9ca65.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/b1835355-68df-42ce-8ea3-320c4f0ca81b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:18796.59,
        brand:"TIMBERLAND",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Camron Chukka Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/e7156537-5240-430e-8b8f-7609fc645c28.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/84b4e1a0-6ca5-459a-a854-66d8d11816a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:13181.99,
        brand:"DUNE LONDON",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Water Resistant Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/dc76efc5-606e-498c-8110-aec83c3f8517.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/66505d82-a398-4205-9beb-a786fa3762b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:4392.68,
        brand:"BP",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Butte Waterproof Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/7e2b0c84-f99d-4af8-bf79-5f8ab8f61382.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/16dfacc5-cdfd-4b00-97ac-c31150dd5b68.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:2108.98,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Neumel Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/d7aed55b-1ae4-444d-999e-0ecce6ee3de8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/33a3d892-651f-4973-9eb1-78f465b618c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:6548.96,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Clarks® Desert Chukka Boo",
        img1:"https://n.nordstrommedia.com/id/sr3/6b7615b7-289d-4ac7-9875-eb78f930109f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/9a77884a-7bb9-4830-9194-e2de37052e59.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:13987.99,
        brand:"CLARKS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Mason Water Resistant Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/6026916b-4b99-4de5-8e93-6879f18b19a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/0efdb641-470a-40d0-a25c-b55817ce23c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:10587.96,
        brand:"NORDSTROM",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Desert Cup Sole Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/dd25ba3d-c8ba-4711-8f08-afceeef99b17.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/e9350854-e545-45f6-928a-91d8f080b25c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:3598.65,
        brand:"CLARKS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Commando Waterproof Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/b031452a-0184-4783-a497-d772db254bdd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/452d5fcb-f5a2-4a74-9da1-5c63aa37826c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:10489.99,
        brand:"HUNTER",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"'1460' Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/4c02df6a-af16-4bb5-9f8a-0f33d52131d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/a2c4f47d-cdea-4be4-98e4-d9fa16dab9f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:14896.59,
        brand:"DR MARTAAAINS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Neumel Chukka Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/bb741d4b-edc2-4b22-a3d0-c5874a61eecc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/4bd0da62-46ae-412c-a1ca-26338477cdb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:7904.89,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"UGG Emmett Waterproof Snow Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/66f7a7e4-184e-4054-aafb-e3bc6acc9d50.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/cd569e9d-8c6b-45d3-b94b-b1ee1d8fb629.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:12298.79,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"6 Inch Premium Waterproof Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/af5b3656-2110-4c8d-9bfd-04a059b9ca65.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/b1835355-68df-42ce-8ea3-320c4f0ca81b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:18796.59,
        brand:"TIMBERLAND",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Camron Chukka Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/e7156537-5240-430e-8b8f-7609fc645c28.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/84b4e1a0-6ca5-459a-a854-66d8d11816a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:13181.99,
        brand:"DUNE LONDON",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Water Resistant Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/dc76efc5-606e-498c-8110-aec83c3f8517.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/66505d82-a398-4205-9beb-a786fa3762b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:4392.68,
        brand:"BP",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Butte Waterproof Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/7e2b0c84-f99d-4af8-bf79-5f8ab8f61382.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/16dfacc5-cdfd-4b00-97ac-c31150dd5b68.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:2108.98,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Neumel Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/d7aed55b-1ae4-444d-999e-0ecce6ee3de8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/33a3d892-651f-4973-9eb1-78f465b618c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:6548.96,
        brand:"UGG",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Clarks® Desert Chukka Boo",
        img1:"https://n.nordstrommedia.com/id/sr3/6b7615b7-289d-4ac7-9875-eb78f930109f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/9a77884a-7bb9-4830-9194-e2de37052e59.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:13987.99,
        brand:"CLARKS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Mason Water Resistant Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/6026916b-4b99-4de5-8e93-6879f18b19a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/0efdb641-470a-40d0-a25c-b55817ce23c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:10587.96,
        brand:"NORDSTROM",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Desert Cup Sole Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/dd25ba3d-c8ba-4711-8f08-afceeef99b17.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/e9350854-e545-45f6-928a-91d8f080b25c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:3598.65,
        brand:"CLARKS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Commando Waterproof Chelsea Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/b031452a-0184-4783-a497-d772db254bdd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/452d5fcb-f5a2-4a74-9da1-5c63aa37826c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:10489.99,
        brand:"HUNTER",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"'1460' Boot",
        img1:"https://n.nordstrommedia.com/id/sr3/4c02df6a-af16-4bb5-9f8a-0f33d52131d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/a2c4f47d-cdea-4be4-98e4-d9fa16dab9f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:14896.59,
        brand:"DR MARTAAAINS",
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
cheking(clothes_data)
function cheking(data){
data.forEach(function(el){
    console.log("prashant",el.price)
    let d=el.sort(function(el){
        return el.price
    })
})
}

function show_clothes(data){
    data.forEach(function(el){
        let card=document.createElement("div")
        card.addEventListener("click",function(){
            testing(el,i)
        })
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

function testing(el,i){
    //console.log("hello",i,"element",el)
    addPage.push(el)
    //console.log("addPage",addPage)
    localStorage.setItem("add_page_data",JSON.stringify(addPage))
    
}