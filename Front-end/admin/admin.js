

import footer from "../components/foot/footer.js"
let ft = document.getElementById("footer");
ft.innerHTML=footer()

import navb from "../components/navbar/navbar.js"
let nb = document.getElementById("navbar");
nb.innerHTML = navb()

const Register = ()=>{
    const reg_form = document.getElementById("form-group")
    let obj={
        logo:reg_form.form-control-file.value,
        title:reg_form.form-control.value,
        category : reg_form.category.value,
         type : reg_form.category.value,
         price :reg_form.price.value,
         rating : reg_form.price.value

    }

    

    post({logo,title,category,type,price,rating})
}

const post =async(obj)=>{
    console.log(obj)

    const api = `https://healthy-bee-handbag.cyclic.app/products/post`

    const response = await fetch(api,{
        method:"POST",
        body: JSON.stringify(obj),
        

                headers: {
                    //making sure the data wiil be appended or gone
                    //server can only see json data
                    'Content-Type': 'application/json',
                    "Authorization" : localStorage.getItem("token")
                },
    })
    const data=await response.json();
            console.log("data:",data)
}


