


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
        name:"Performance Joggers",
        img1:"https://n.nordstrommedia.com/id/sr3/e52b3d19-7611-4b25-9342-f46ce7a75975.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4429bf87-78b1-4655-852b-e3dee70cc62e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8083.79,
        brand:"vuori"
    },
    {
        name:"Solid Ankle Socks",
        img1:"https://n.nordstrommedia.com/id/sr3/8cc3dbe7-d124-40c5-a86b-a31739f1d7f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4e5aa784-50d5-4d03-91ec-acc292fdf1c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1117.76,
        brand:"BOMBAS"
    },
    {
        name:"Performance Joggers",
        img1:"https://n.nordstrommedia.com/id/sr3/e52b3d19-7611-4b25-9342-f46ce7a75975.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4429bf87-78b1-4655-852b-e3dee70cc62e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8083.79,
        brand:"vuori"
    },
    {
        name:"Solid Ankle Socks",
        img1:"https://n.nordstrommedia.com/id/sr3/8cc3dbe7-d124-40c5-a86b-a31739f1d7f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4e5aa784-50d5-4d03-91ec-acc292fdf1c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1117.76,
        brand:"BOMBAS"
    },
    {
        name:"Performance Joggers",
        img1:"https://n.nordstrommedia.com/id/sr3/e52b3d19-7611-4b25-9342-f46ce7a75975.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4429bf87-78b1-4655-852b-e3dee70cc62e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8083.79,
        brand:"vuori"
    },
    {
        name:"Solid Ankle Socks",
        img1:"https://n.nordstrommedia.com/id/sr3/8cc3dbe7-d124-40c5-a86b-a31739f1d7f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4e5aa784-50d5-4d03-91ec-acc292fdf1c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1117.76,
        brand:"BOMBAS"
    },
    {
        name:"Performance Joggers",
        img1:"https://n.nordstrommedia.com/id/sr3/e52b3d19-7611-4b25-9342-f46ce7a75975.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4429bf87-78b1-4655-852b-e3dee70cc62e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8083.79,
        brand:"vuori"
    },
    {
        name:"Solid Ankle Socks",
        img1:"https://n.nordstrommedia.com/id/sr3/8cc3dbe7-d124-40c5-a86b-a31739f1d7f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4e5aa784-50d5-4d03-91ec-acc292fdf1c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1117.76,
        brand:"BOMBAS"
    },
    {
        name:"Performance Joggers",
        img1:"https://n.nordstrommedia.com/id/sr3/e52b3d19-7611-4b25-9342-f46ce7a75975.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4429bf87-78b1-4655-852b-e3dee70cc62e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8083.79,
        brand:"vuori"
    },
    {
        name:"Solid Ankle Socks",
        img1:"https://n.nordstrommedia.com/id/sr3/8cc3dbe7-d124-40c5-a86b-a31739f1d7f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4e5aa784-50d5-4d03-91ec-acc292fdf1c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1117.76,
        brand:"BOMBAS"
    },
    {
        name:"Performance Joggers",
        img1:"https://n.nordstrommedia.com/id/sr3/e52b3d19-7611-4b25-9342-f46ce7a75975.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4429bf87-78b1-4655-852b-e3dee70cc62e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:8083.79,
        brand:"vuori"
    },
    {
        name:"Solid Ankle Socks",
        img1:"https://n.nordstrommedia.com/id/sr3/8cc3dbe7-d124-40c5-a86b-a31739f1d7f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/4e5aa784-50d5-4d03-91ec-acc292fdf1c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:1117.76,
        brand:"BOMBAS"
    },

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