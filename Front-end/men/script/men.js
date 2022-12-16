


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
        name:"Essentials Sweatpant",
        img1:"https://n.nordstrommedia.com/id/sr3/142eec83-95ce-4393-809a-ca321cdffad4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/e57c318d-7b68-4f37-8879-e49f01ace021.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:4247.36,
        brand:"ADIDAS ORIGINALS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Men's SST Tricot Track Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/543a7a80-69a5-4f84-91cc-1815069c8dee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/572ff891-38fe-4926-9c78-2d4653a20f6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6879.56,
        brand:"ADIDAS ORIGINALS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sunday Performance Jogger Sweatpants",
        img1:"https://n.nordstrommedia.com/id/sr3/4414f97d-cadf-41a4-ba5b-9aa8e5a0a580.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/111e3bbd-f66e-46db-8c1d-6bb61205b626.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8795.56,
        brand:"VUORI",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"The Crew Long Sleeve T-Shirt",
        img1:"https://n.nordstrommedia.com/id/sr3/44d10ce3-16ed-4884-98fc-e3279171614a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/9410043d-a8e0-4ec6-9579-e324e99e013e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:4030.67,
        brand:"TRAVISMATHEW",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Aconagua 2 Down Vest",
        img1:"https://n.nordstrommedia.com/id/sr3/8f05b6d4-6be6-47d7-8d84-0306dd7d8c87.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a338829f-e706-4ee4-bcac-48f2bb25a0f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:11953.59,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Cashmere Crewneck Sweater",
        img1:"https://n.nordstrommedia.com/id/sr3/02a0f1a3-4b05-4cbf-8fa0-ee74707eecab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b8afd0c7-cc0f-4ab0-a5da-a1b23096c662.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1238.65,
        brand:"NORDSTROM",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Georgia Crewneck T-Shir",
        img1:"https://n.nordstrommedia.com/id/sr3/c930ca14-a968-48eb-af5f-57a4a9bde0eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/573f2586-6614-46db-bacc-6da153d150da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2988.39,
        brand:"ROBERT BARAKETT",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Washable Merino Crewneck Sweater",
        img1:"https://n.nordstrommedia.com/id/sr3/6a41a1fa-b00d-485c-9afa-3bc5afd74016.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4c55b863-3740-4d5b-813d-6a2f1d34682e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6150.89,
        brand:"NORDSTROM",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Pyrite Slim Fit Pocket Joggers",
        img1:"https://n.nordstrommedia.com/id/sr3/80ce4ad0-d904-42c0-9198-1578dd7ff6df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4b218aa4-394a-4d9f-806a-3ede5a67a923.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1580.69,
        brand:"ZELLA",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Essentials Oversize Long Sleeve Logo T-Shirt",
        img1:"https://n.nordstrommedia.com/id/sr3/f7347ea2-b662-44f6-bce3-c58512b09ce3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/319f911c-7f34-4a9f-b71f-c4ab9c33e0d5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5272.68,
        brand:"FEAR OF GOD ESSENTIALS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Suffolk Quilted Car Coat",
        img1:"https://n.nordstrommedia.com/id/sr3/797391ba-e704-4408-b52c-1c7e44c02ef5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/3af4a5f4-7336-4485-a771-86182d320f1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:21973.84,
        brand:"PETER MILLAR",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"ThermoBall™ Eco Hooded Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/1ac4dff8-c798-4ab7-8d36-67496b8b45f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/7af2b8f2-27b6-440a-8d9b-02649438c97a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:20211.69,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Essentials Sweatpant",
        img1:"https://n.nordstrommedia.com/id/sr3/142eec83-95ce-4393-809a-ca321cdffad4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/e57c318d-7b68-4f37-8879-e49f01ace021.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:4247.36,
        brand:"ADIDAS ORIGINALS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Men's SST Tricot Track Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/543a7a80-69a5-4f84-91cc-1815069c8dee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/572ff891-38fe-4926-9c78-2d4653a20f6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6879.56,
        brand:"ADIDAS ORIGINALS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sunday Performance Jogger Sweatpants",
        img1:"https://n.nordstrommedia.com/id/sr3/4414f97d-cadf-41a4-ba5b-9aa8e5a0a580.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/111e3bbd-f66e-46db-8c1d-6bb61205b626.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8795.56,
        brand:"VUORI",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"The Crew Long Sleeve T-Shirt",
        img1:"https://n.nordstrommedia.com/id/sr3/44d10ce3-16ed-4884-98fc-e3279171614a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/9410043d-a8e0-4ec6-9579-e324e99e013e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:4030.67,
        brand:"TRAVISMATHEW",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Aconagua 2 Down Vest",
        img1:"https://n.nordstrommedia.com/id/sr3/8f05b6d4-6be6-47d7-8d84-0306dd7d8c87.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a338829f-e706-4ee4-bcac-48f2bb25a0f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:11953.59,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Cashmere Crewneck Sweater",
        img1:"https://n.nordstrommedia.com/id/sr3/02a0f1a3-4b05-4cbf-8fa0-ee74707eecab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b8afd0c7-cc0f-4ab0-a5da-a1b23096c662.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1238.65,
        brand:"NORDSTROM",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Georgia Crewneck T-Shir",
        img1:"https://n.nordstrommedia.com/id/sr3/c930ca14-a968-48eb-af5f-57a4a9bde0eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/573f2586-6614-46db-bacc-6da153d150da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2988.39,
        brand:"ROBERT BARAKETT",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Washable Merino Crewneck Sweater",
        img1:"https://n.nordstrommedia.com/id/sr3/6a41a1fa-b00d-485c-9afa-3bc5afd74016.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4c55b863-3740-4d5b-813d-6a2f1d34682e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6150.89,
        brand:"NORDSTROM",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Pyrite Slim Fit Pocket Joggers",
        img1:"https://n.nordstrommedia.com/id/sr3/80ce4ad0-d904-42c0-9198-1578dd7ff6df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4b218aa4-394a-4d9f-806a-3ede5a67a923.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1580.69,
        brand:"ZELLA",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Essentials Oversize Long Sleeve Logo T-Shirt",
        img1:"https://n.nordstrommedia.com/id/sr3/f7347ea2-b662-44f6-bce3-c58512b09ce3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/319f911c-7f34-4a9f-b71f-c4ab9c33e0d5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5272.68,
        brand:"FEAR OF GOD ESSENTIALS",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Suffolk Quilted Car Coat",
        img1:"https://n.nordstrommedia.com/id/sr3/797391ba-e704-4408-b52c-1c7e44c02ef5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/3af4a5f4-7336-4485-a771-86182d320f1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:21973.84,
        brand:"PETER MILLAR",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"ThermoBall™ Eco Hooded Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/1ac4dff8-c798-4ab7-8d36-67496b8b45f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/7af2b8f2-27b6-440a-8d9b-02649438c97a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:20211.69,
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