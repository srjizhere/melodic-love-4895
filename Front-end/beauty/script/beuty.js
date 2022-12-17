
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
        name:"Prime + Perfect Vitamin Enriched Face Base Set USD $132 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/3fd75530-9b23-4f6f-aed5-f71751a299ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/78308ffe-f2c0-450b-89c5-9956b23fb436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5178.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Best of Bobbi Brown Ultimate Gift Set USD $184 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/b7613ca3-fbb2-41a7-854c-aa7904b2b8da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/02fb04c6-3dd9-451f-80e0-81c9755a6a22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6891.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Long-Wear Cream Eyeshadow Stick",
        img1:"https://n.nordstrommedia.com/id/sr3/6d74ad4b-ceeb-4e1a-b31a-26ee063c267d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/924f822d-f486-4396-82e8-bf9244139976.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:16089.58,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Festive Ready Mini Crushed Lip Trio USD $58 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/be4e8539-6726-4288-8c7d-a0e93f1aa35e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a1b75316-86f2-4314-84e9-b79d98d7f0d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2636.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },

    
    {
        name:"Prime + Perfect Vitamin Enriched Face Base Set USD $132 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/3fd75530-9b23-4f6f-aed5-f71751a299ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/78308ffe-f2c0-450b-89c5-9956b23fb436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5178.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Best of Bobbi Brown Ultimate Gift Set USD $184 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/b7613ca3-fbb2-41a7-854c-aa7904b2b8da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/02fb04c6-3dd9-451f-80e0-81c9755a6a22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6891.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Long-Wear Cream Eyeshadow Stick",
        img1:"https://n.nordstrommedia.com/id/sr3/6d74ad4b-ceeb-4e1a-b31a-26ee063c267d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/924f822d-f486-4396-82e8-bf9244139976.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:16089.58,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Festive Ready Mini Crushed Lip Trio USD $58 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/be4e8539-6726-4288-8c7d-a0e93f1aa35e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a1b75316-86f2-4314-84e9-b79d98d7f0d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2636.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Prime + Perfect Vitamin Enriched Face Base Set USD $132 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/3fd75530-9b23-4f6f-aed5-f71751a299ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/78308ffe-f2c0-450b-89c5-9956b23fb436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5178.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Best of Bobbi Brown Ultimate Gift Set USD $184 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/b7613ca3-fbb2-41a7-854c-aa7904b2b8da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/02fb04c6-3dd9-451f-80e0-81c9755a6a22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6891.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Long-Wear Cream Eyeshadow Stick",
        img1:"https://n.nordstrommedia.com/id/sr3/6d74ad4b-ceeb-4e1a-b31a-26ee063c267d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/924f822d-f486-4396-82e8-bf9244139976.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:16089.58,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Festive Ready Mini Crushed Lip Trio USD $58 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/be4e8539-6726-4288-8c7d-a0e93f1aa35e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a1b75316-86f2-4314-84e9-b79d98d7f0d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2636.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Prime + Perfect Vitamin Enriched Face Base Set USD $132 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/3fd75530-9b23-4f6f-aed5-f71751a299ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/78308ffe-f2c0-450b-89c5-9956b23fb436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5178.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Best of Bobbi Brown Ultimate Gift Set USD $184 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/b7613ca3-fbb2-41a7-854c-aa7904b2b8da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/02fb04c6-3dd9-451f-80e0-81c9755a6a22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6891.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Long-Wear Cream Eyeshadow Stick",
        img1:"https://n.nordstrommedia.com/id/sr3/6d74ad4b-ceeb-4e1a-b31a-26ee063c267d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/924f822d-f486-4396-82e8-bf9244139976.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:16089.58,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Festive Ready Mini Crushed Lip Trio USD $58 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/be4e8539-6726-4288-8c7d-a0e93f1aa35e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a1b75316-86f2-4314-84e9-b79d98d7f0d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2636.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Prime + Perfect Vitamin Enriched Face Base Set USD $132 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/3fd75530-9b23-4f6f-aed5-f71751a299ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/78308ffe-f2c0-450b-89c5-9956b23fb436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5178.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Best of Bobbi Brown Ultimate Gift Set USD $184 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/b7613ca3-fbb2-41a7-854c-aa7904b2b8da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/02fb04c6-3dd9-451f-80e0-81c9755a6a22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6891.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Long-Wear Cream Eyeshadow Stick",
        img1:"https://n.nordstrommedia.com/id/sr3/6d74ad4b-ceeb-4e1a-b31a-26ee063c267d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/924f822d-f486-4396-82e8-bf9244139976.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:16089.58,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Festive Ready Mini Crushed Lip Trio USD $58 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/be4e8539-6726-4288-8c7d-a0e93f1aa35e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a1b75316-86f2-4314-84e9-b79d98d7f0d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2636.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Prime + Perfect Vitamin Enriched Face Base Set USD $132 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/3fd75530-9b23-4f6f-aed5-f71751a299ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/78308ffe-f2c0-450b-89c5-9956b23fb436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5178.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Best of Bobbi Brown Ultimate Gift Set USD $184 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/b7613ca3-fbb2-41a7-854c-aa7904b2b8da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/02fb04c6-3dd9-451f-80e0-81c9755a6a22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6891.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Long-Wear Cream Eyeshadow Stick",
        img1:"https://n.nordstrommedia.com/id/sr3/6d74ad4b-ceeb-4e1a-b31a-26ee063c267d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/924f822d-f486-4396-82e8-bf9244139976.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:16089.58,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Festive Ready Mini Crushed Lip Trio USD $58 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/be4e8539-6726-4288-8c7d-a0e93f1aa35e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a1b75316-86f2-4314-84e9-b79d98d7f0d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2636.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Prime + Perfect Vitamin Enriched Face Base Set USD $132 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/3fd75530-9b23-4f6f-aed5-f71751a299ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/78308ffe-f2c0-450b-89c5-9956b23fb436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5178.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Best of Bobbi Brown Ultimate Gift Set USD $184 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/b7613ca3-fbb2-41a7-854c-aa7904b2b8da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/02fb04c6-3dd9-451f-80e0-81c9755a6a22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6891.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Long-Wear Cream Eyeshadow Stick",
        img1:"https://n.nordstrommedia.com/id/sr3/6d74ad4b-ceeb-4e1a-b31a-26ee063c267d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/924f822d-f486-4396-82e8-bf9244139976.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:16089.58,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Festive Ready Mini Crushed Lip Trio USD $58 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/be4e8539-6726-4288-8c7d-a0e93f1aa35e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a1b75316-86f2-4314-84e9-b79d98d7f0d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2636.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Prime + Perfect Vitamin Enriched Face Base Set USD $132 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/3fd75530-9b23-4f6f-aed5-f71751a299ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/78308ffe-f2c0-450b-89c5-9956b23fb436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:5178.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    
    {
        name:"Best of Bobbi Brown Ultimate Gift Set USD $184 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/b7613ca3-fbb2-41a7-854c-aa7904b2b8da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/02fb04c6-3dd9-451f-80e0-81c9755a6a22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:6891.98,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Long-Wear Cream Eyeshadow Stick",
        img1:"https://n.nordstrommedia.com/id/sr3/6d74ad4b-ceeb-4e1a-b31a-26ee063c267d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/924f822d-f486-4396-82e8-bf9244139976.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:16089.58,
        brand:"BOBBI BROWN",
        feature:"",
        rating:"",
        mfg:2,
        color:"",
        material:"",
        size:3
    },
    {
        name:"Festive Ready Mini Crushed Lip Trio USD $58 Value",
        img1:"https://n.nordstrommedia.com/id/sr3/be4e8539-6726-4288-8c7d-a0e93f1aa35e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        img2:"https://n.nordstrommedia.com/id/sr3/a1b75316-86f2-4314-84e9-b79d98d7f0d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:2636.98,
        brand:"BOBBI BROWN",
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