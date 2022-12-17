

let addPage=[]
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
        name:"Baby Bear Full-Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/33223e5b-c01b-4f78-bc1a-f996490b1804.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Hooded Fleece Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/42d5a95c-8435-4518-bf42-1f083f5eb8d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b0bfbe03-6bcd-48d3-b2be-9d58dbea8cac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sportswear Club Fleece Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/26d2bcf9-0b60-4066-a68d-288800ba3ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/185c993b-efd6-4584-8021-8abf842fac57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3295.86,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Full Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/6bd9c820-611e-45db-8b2b-d7bd75502b7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/38768028-83d6-49bc-99e9-e46cc1bcc135.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5124.79,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },

    
    {
        name:"Baby Bear Full-Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/33223e5b-c01b-4f78-bc1a-f996490b1804.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Hooded Fleece Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/42d5a95c-8435-4518-bf42-1f083f5eb8d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b0bfbe03-6bcd-48d3-b2be-9d58dbea8cac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sportswear Club Fleece Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/26d2bcf9-0b60-4066-a68d-288800ba3ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/185c993b-efd6-4584-8021-8abf842fac57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3295.86,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Full Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/6bd9c820-611e-45db-8b2b-d7bd75502b7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/38768028-83d6-49bc-99e9-e46cc1bcc135.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5124.79,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Baby Bear Full-Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/33223e5b-c01b-4f78-bc1a-f996490b1804.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Hooded Fleece Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/42d5a95c-8435-4518-bf42-1f083f5eb8d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b0bfbe03-6bcd-48d3-b2be-9d58dbea8cac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sportswear Club Fleece Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/26d2bcf9-0b60-4066-a68d-288800ba3ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/185c993b-efd6-4584-8021-8abf842fac57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3295.86,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Full Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/6bd9c820-611e-45db-8b2b-d7bd75502b7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/38768028-83d6-49bc-99e9-e46cc1bcc135.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5124.79,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Baby Bear Full-Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/33223e5b-c01b-4f78-bc1a-f996490b1804.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Hooded Fleece Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/42d5a95c-8435-4518-bf42-1f083f5eb8d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b0bfbe03-6bcd-48d3-b2be-9d58dbea8cac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sportswear Club Fleece Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/26d2bcf9-0b60-4066-a68d-288800ba3ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/185c993b-efd6-4584-8021-8abf842fac57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3295.86,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Full Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/6bd9c820-611e-45db-8b2b-d7bd75502b7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/38768028-83d6-49bc-99e9-e46cc1bcc135.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5124.79,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Baby Bear Full-Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/33223e5b-c01b-4f78-bc1a-f996490b1804.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Hooded Fleece Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/42d5a95c-8435-4518-bf42-1f083f5eb8d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b0bfbe03-6bcd-48d3-b2be-9d58dbea8cac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sportswear Club Fleece Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/26d2bcf9-0b60-4066-a68d-288800ba3ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/185c993b-efd6-4584-8021-8abf842fac57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3295.86,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Full Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/6bd9c820-611e-45db-8b2b-d7bd75502b7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/38768028-83d6-49bc-99e9-e46cc1bcc135.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5124.79,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Baby Bear Full-Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/33223e5b-c01b-4f78-bc1a-f996490b1804.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Hooded Fleece Jacket",
        img1:"https://n.nordstrommedia.com/id/sr3/42d5a95c-8435-4518-bf42-1f083f5eb8d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/b0bfbe03-6bcd-48d3-b2be-9d58dbea8cac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5184.65,
        brand:"THE NORTH FACE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Sportswear Club Fleece Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/26d2bcf9-0b60-4066-a68d-288800ba3ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/185c993b-efd6-4584-8021-8abf842fac57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:3295.86,
        brand:"NIKE",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Baby Bear Full Zip Hoodie",
        img1:"https://n.nordstrommedia.com/id/sr3/6bd9c820-611e-45db-8b2b-d7bd75502b7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/38768028-83d6-49bc-99e9-e46cc1bcc135.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5124.79,
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
    data.forEach(function(el,i){
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