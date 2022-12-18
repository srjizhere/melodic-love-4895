





function show_product(){
    let data=JSON.parse(localStorage.getItem("add_to_cart"))||[]
    let append_div=document.getElementById("product_container")
    append_div.innerHTML=null
    data.forEach(function(el,i){
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
        price.style.color="red"
        let remov=document.createElement("button")
        remov.innerText="Remove"
        remov.addEventListener("click",function(){
            product_remove(el,i)
        })
        console.log(tag)
        //if(img_div.style.hover)
        img_div.append(img1)
        card.append(img_div,tag,brand,name,price,remov)
        append_div.append(card)
    })

}
show_product()
function product_remove(el,i){
    let data=JSON.parse(localStorage.getItem("add_to_cart"))||[]
    let newData=data.filter(function(el,index){
        
            return index!=i
        
    })
    localStorage.setItem("add_to_cart",JSON.stringify(newData))
    show_product();
    console.log(newData)
}


let buy=document.getElementById("buy")
buy.addEventListener("click",function(){
    let otp=1234
    alert(`your otp :- ${otp}`)
    const get_otp = prompt( 'Enter otp')
    console.log(get_otp,"Prashant")
    if(get_otp==otp){
        alert("order placed successfully")
    }
    else{
        alert("wrong otp")
    }
})