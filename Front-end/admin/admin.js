


const reg_form = document.getElementById("form-group")
reg_form.addEventListener("submit",(e)=>{
    e.preventDefault()
      let obj = {
        logo: reg_form.form_control_file.value,
        title: reg_form.form_control.value,
        category: reg_form.category.value,
        type: reg_form.type.value,
        price: reg_form.price.value,
        brand: reg_form.brand.value,
      };
      post(obj);

})


const post =async(obj)=>{
    console.log(obj)

    const api = `http://localhost:8080/adminproducts/post`;
    let token = localStorage.getItem('token')
    const response = await fetch(api,{
        method:"POST",
        body: JSON.stringify(obj),
        

                headers: {
                    //making sure the data wiil be appended or gone
                    //server can only see json data
                    'Content-Type': 'application/json',
                    "Authorization" :`bearer ${token}`
                },
    })
    const data=await response.json();
            console.log("data:",data)
}


