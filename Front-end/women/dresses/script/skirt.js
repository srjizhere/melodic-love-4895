


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
        name:"Lux Henley Jumpsuit",
        img1:"https://n.nordstrommedia.com/id/sr3/3deea353-3ac2-4ed0-8d2e-835e995eb623.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/ab47501b-53ee-4ece-91f3-ce12d46ea2f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8427.60,
        brand:"VOURI",
        feature:"waterproof",
         rating:1,
         mfg:2,
         color:"",
         mateial:"",
         role:"men",
         type:"footwear",
    },
    {
        name:"Studio Light Court Tennis Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/801a240a-4c13-4fea-bd67-a6376d7b1a17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/ba719394-5b13-44c2-af5f-66b158871537.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:4076.25,
        brand:"ZELLA",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Gary Jumpsuit",
        img1:"https://n.nordstrommedia.com/id/sr3/6e1c419f-0b7a-46c8-a209-ce500c65025d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/fbb0dd22-4a9d-4809-960e-ca95201c4a0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:7154.5,
        brand:"Sweaty Betty",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sportswear Essential T-Shirt Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/6700ed2b-597d-4a0b-8b07-baf78ea1eff2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/be95c6a4-a4f6-48c5-8912-c22d4d523bd7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1898.16,
        brand:"Nike",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"The Exercise Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/18b3e990-dcf7-4048-ba7b-876fb6dcc9b6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/46d8492c-c84c-4da1-9152-f551b7f12fa4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5272.56,
        brand:"OUTDOOR VOICES",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Suns Out Performance Skort",
        img1:"https://n.nordstrommedia.com/id/sr3/7ee187bb-c57b-43d1-a150-196e74c08db8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/e38422ea-20b3-46c0-ab0e-d9bb692e44a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2148.23,
        brand:"ZELLA",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Relieve Crossback Jumpsuit",
        img1:"https://n.nordstrommedia.com/id/sr3/a3029f5f-6697-4b68-8e23-31929c1b69c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/2d1a2ae1-0271-4b46-b99c-0c1136203413.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:9287.25,
        brand:"FREE PEOPLE FP MOVEMENT",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Freedom Waterproof Snow Bib",
        img1:"https://n.nordstrommedia.com/id/sr3/ce52b816-e63f-454d-92bf-bcbbaecdec0d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/c183bd09-618f-4bb8-bd81-a9271e82167e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:17113.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"",
        img1:"https://n.nordstrommedia.com/id/sr3/21bc70c2-e9a4-4f36-90df-3e54ae5d8348.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/497ca58a-0ce8-40d0-a5c1-8429cc3e62f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6363,
        brand:"ALO",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Seabreeze Sport Skirt",
        img1:"https://n.nordstrommedia.com/id/sr3/86646f95-89e2-41a0-b05d-887172811181.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/beabf613-b574-4c7d-88c4-20fe196c5d56.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6363.79,
        brand:"VOURI",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Court Dri-FIT Slam Tennis Skirt",
        img1:"https://n.nordstrommedia.com/id/sr3/92c1a1f1-ca70-4239-a512-0655cde3d474.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/8bf1a0ea-c4c6-46a4-9e8f-678cf8283fb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2973.45,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Court Dri-FIT Advantage Pleated Tennis Skirt",
        img1:"https://n.nordstrommedia.com/id/sr3/815395e1-e372-4e1f-81a0-d347d749c480.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b4f03ce9-3bdc-4f44-bcc2-b21f459af48d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6019.17,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Lux Henley Jumpsuit",
        img1:"https://n.nordstrommedia.com/id/sr3/3deea353-3ac2-4ed0-8d2e-835e995eb623.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/ab47501b-53ee-4ece-91f3-ce12d46ea2f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8427.60,
        brand:"VOURI",
        feature:"",
         rating:1,
         mfg:2,
         color:"",
         mateial:"",
         size:2,
    },
    {
        name:"Studio Light Court Tennis Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/801a240a-4c13-4fea-bd67-a6376d7b1a17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/ba719394-5b13-44c2-af5f-66b158871537.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:4076.25,
        brand:"ZELLA",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Gary Jumpsuit",
        img1:"https://n.nordstrommedia.com/id/sr3/6e1c419f-0b7a-46c8-a209-ce500c65025d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/fbb0dd22-4a9d-4809-960e-ca95201c4a0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:7154.5,
        brand:"Sweaty Betty",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sportswear Essential T-Shirt Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/6700ed2b-597d-4a0b-8b07-baf78ea1eff2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/be95c6a4-a4f6-48c5-8912-c22d4d523bd7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1898.16,
        brand:"Nike",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"The Exercise Dress",
        img1:"https://n.nordstrommedia.com/id/sr3/18b3e990-dcf7-4048-ba7b-876fb6dcc9b6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/46d8492c-c84c-4da1-9152-f551b7f12fa4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5272.56,
        brand:"OUTDOOR VOICES",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Suns Out Performance Skort",
        img1:"https://n.nordstrommedia.com/id/sr3/7ee187bb-c57b-43d1-a150-196e74c08db8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/e38422ea-20b3-46c0-ab0e-d9bb692e44a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2148.23,
        brand:"ZELLA",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Relieve Crossback Jumpsuit",
        img1:"https://n.nordstrommedia.com/id/sr3/a3029f5f-6697-4b68-8e23-31929c1b69c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/2d1a2ae1-0271-4b46-b99c-0c1136203413.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:9287.25,
        brand:"FREE PEOPLE FP MOVEMENT",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Freedom Waterproof Snow Bib",
        img1:"https://n.nordstrommedia.com/id/sr3/ce52b816-e63f-454d-92bf-bcbbaecdec0d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/c183bd09-618f-4bb8-bd81-a9271e82167e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:17113.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"",
        img1:"https://n.nordstrommedia.com/id/sr3/21bc70c2-e9a4-4f36-90df-3e54ae5d8348.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/497ca58a-0ce8-40d0-a5c1-8429cc3e62f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6363,
        brand:"ALO",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Seabreeze Sport Skirt",
        img1:"https://n.nordstrommedia.com/id/sr3/86646f95-89e2-41a0-b05d-887172811181.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/beabf613-b574-4c7d-88c4-20fe196c5d56.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6363.79,
        brand:"VOURI",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Court Dri-FIT Slam Tennis Skirt",
        img1:"https://n.nordstrommedia.com/id/sr3/92c1a1f1-ca70-4239-a512-0655cde3d474.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/8bf1a0ea-c4c6-46a4-9e8f-678cf8283fb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2973.45,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Court Dri-FIT Advantage Pleated Tennis Skirt",
        img1:"https://n.nordstrommedia.com/id/sr3/815395e1-e372-4e1f-81a0-d347d749c480.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b4f03ce9-3bdc-4f44-bcc2-b21f459af48d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6019.17,
        brand:"NIKE",
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