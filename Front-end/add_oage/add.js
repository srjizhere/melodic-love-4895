let data=JSON.parse(localStorage.getItem("add_page_data"))
console.log(data)
recent_view(data)
let final_data=data[data.length-1]
console.log(final_data,)
show_picc(final_data)
show_details(final_data)
// function show_picc(data){
//     let show_pic_div=document.getElementById("pics")
//     data.forEach(function(el){
//     //     let card1=document.createElement("div")
//     //     let card2=document.createElement("div")
//     //     let img1=document.createElement("img")
//     //     let img2=document.createElement("img")
//     //     img1.src=el.img1
//     //     img2.src=el.img2
//     //     card1.append(img1)
//     //     card2.append(img2)
//     //     console.log("ele",el)
//     //     document.getElementById("pics").append(card1,card2)
//     // })
// }
let add_to_cart=JSON.parse(localStorage.getItem("add_to_cart"))||[]
function show_picc(data){
            let card1=document.createElement("div")
        let card2=document.createElement("div")
        let img1=document.createElement("img")
        let img2=document.createElement("img")
        img1.src=data.img1
        img2.src=data.img2
        card1.append(img1)
        card2.append(img2)
        console.log("ele",data)
        document.getElementById("pics").append(card1,card2)
}

function show_details(data){
    let title=document.createElement("h2")
    title.setAttribute("class","title")
    title.innerText=data.name
    let brand=document.createElement("p")
    brand.innerText=data.brand
    let price=document.createElement("h2")
    price.innerText=`INR ${data.price}`
    price.setAttribute("class","price")
    let size=document.createElement("select")
    size.setAttribute("class","sel_size")
    let option=document.createElement("option")
    option.innerText="Size"
    let add_button=document.createElement("button")
    add_button.innerText="Add to Bag"
    add_button.addEventListener("click",function(){
        addtoCart(data)
    })
    size.append(option)

    document.getElementById("details").append(title,brand,price,size,add_button)

}


function recent_view(data){
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
        document.querySelector("#recent_view").append(card)
    })
}

function addtoCart(data){
    console.log(data)

    add_to_cart.push(data)
    localStorage.setItem("add_to_cart",JSON.stringify(add_to_cart))
}