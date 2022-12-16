


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
        name:"Kånken Water Resistant Backpack",
        img1:"https://n.nordstrommedia.com/id/sr3/0d9e65cf-bd8e-401c-ac13-4ef72abf4fe2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/77fcfc4a-620a-4d4a-a393-829b3d2fc316.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:7030.56,
        brand:"FJÄLLRÄVEN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Mini Kånken Water Resistant Backpack",
        img1:"https://n.nordstrommedia.com/id/sr3/b405e431-469e-471b-9743-60556554df01.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"",
        price:6154.28,
        brand:"FJÄLLRÄVEN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Le Pliage Backpack",
        img1:"https://n.nordstrommedia.com/id/sr3/2707cb0f-b7aa-4efb-b4a3-a49ebbd01ca7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/12da0dce-a992-4c26-98d4-ca74675ff123.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:9842.36,
        brand:"LONGCHAMP",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Grand Ambition Luxe Leather Convertible Backpack",
        img1:"https://n.nordstrommedia.com/id/sr3/e941c0f8-1122-481f-a426-5968ccecef60.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/6e677217-af2b-443a-b2fd-ea99ce9b805b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:28999.28,
        brand:"Grand Ambition Luxe Leather Convertible Backpack",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Voyageur Carson Nylon Backpack",
        img1:"https://n.nordstrommedia.com/id/sr3/71c41777-bdc1-4f9c-8f2b-a8d10e401b3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/47dd09e9-c112-458a-9979-95c00afc67d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:27681.75,
        brand:"TUMI",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Mini Le Pliage Green Recycled Canvas Backpack",
        img1:"https://n.nordstrommedia.com/id/sr3/d005379a-f819-4988-a8e3-c440a90d5fbb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/a01c2b53-11e1-4949-a18d-67385d7bfedc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:9842.36,
        brand:"LONGCHAMP",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Jester Backpack",
        img1:"https://n.nordstrommedia.com/id/sr3/c9068452-3b9f-4e7a-aefb-4eb291f3aa65.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/eaaa995a-9eef-47fe-9941-beb9798eaa73.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:6881.79,
        brand:"THE NORTH FACE ",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Daylite Sling Backpack",
        img1:"https://n.nordstrommedia.com/id/sr3/30c81b30-ffd9-4dc1-b331-87b428153438.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        img2:"https://n.nordstrommedia.com/id/sr3/fe39961d-05c9-4bad-b242-e494546d765b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        price:4598.36,
        brand:"OSPREY",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"",
        img1:"",
        img2:"",
        price:1,
        brand:"",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"",
        img1:"",
        img2:"",
        price:1,
        brand:"",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"",
        img1:"",
        img2:"",
        price:1,
        brand:"",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"",
        img1:"",
        img2:"",
        price:1,
        brand:"",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"",
        img1:"",
        img2:"",
        price:1,
        brand:"",
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