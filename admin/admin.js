

let objarr = [
    {
        img:"https://n.nordstrommedia.com/id/sr3/1c564392-3e5f-4ed9-ad52-20a0684e7ead.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGC",
        price: 8051.40,
        rating:4.5
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/6aee57d0-e10e-4904-9628-b5fdf2d0640b.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"BrinkerStock",
        price: 8051.40,
        rating:3.5
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/56478d5b-4363-4a23-a312-706637464f08.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"The North Face",
        price: 9051.40,
        rating:4.5
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/e67459fb-5776-4597-b1f7-af7106c0441d.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"Dyson",
        price: 12051.40,
        rating:1.5
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/b0199428-c87b-4786-8ffa-102e148aef3a.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"Nordstrom",
        price: 8051.40,
        rating:4.5
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/dea98c12-40e0-4e97-9017-979ff0fe2859.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGG®",
        price: 8051.40,
        rating:4.5
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/02a0f1a3-4b05-4cbf-8fa0-ee74707eecab.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"UGG®",
        price: 8051.40,
        rating:4.5
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/d3219a4f-0b52-4df1-818d-c1e13a9d2b5f.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"BP.®",
        price: 8051.40,
        rating:4.5
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/c593025f-227c-4adc-87f8-d30413f77db6.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"Revise!",
        brand:"Dipitique",
        price: 801.40,
        rating:2
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/61e25487-c956-4f06-8ae8-3e3c9cb4532b.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"KGL.®",
        price: 7602.40,
        rating:5
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/bb08eea1-f884-487a-b077-16838db72eee.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"Sustainable Style!",
        brand:"Nordgump.®",
        price: 6001.40,
        rating:3
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/d3d9a69a-42cd-4a17-b925-57fc0398548e.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"Sustainable Style!",
        brand:"Converse",
        price: 3001.40,
        rating:1
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/75da7256-388b-4d3f-ac0e-010218f48e1d.jpeg",
        occasion:"Arrives On Christmas",
        tag:"high Style!",
        brand:"YFS.@",
        price: 3001.40,
        rating:5
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/58e65ceb-a016-47a3-97ed-6e5752a1eafe.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"Night Style!",
        brand:"Longino",
        price: 657.40,
        rating:4
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/43aede3d-e203-4203-8de6-fd7b3be65836.jpeg",
        occasion:"Arrives Before Christmas",
        tag:"New!",
        brand:"NODPOD",
        price: 657.40,
        rating:4
    },
    {
        img: "https://n.nordstrommedia.com/id/sr3/8222eb9e-2d38-46ff-b6c7-1b8fa53b1eb5.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        occasion:"Arrives Before Christmas",
        tag:"China!",
        brand:"Adibos",
        price: 6457.40,
        rating:2
    }
    
]

const Register = ()=>{
    const reg_form = document.getElementById("form-group")

    const file = reg_form.form-control-file.value
    const title = reg_form.form-control.value
    const category = reg_form.category.value
    const type = reg_form.category.value
    const price = reg_form.price.value
    const rating = reg_form.price.value

    post({file,title,category,type,price,rating})
}

const post =async(obj)=>{
    console.log(obj)

    const api = `http://localhost:8080/Adminproducts/post`

    const response = await fetch(api,{
        method:"POST",
        body: JSON.stringify(obj),
        

                headers: {
                    //making sure the data wiil be appended or gone
                    //server can only see json data
                    'Content-Type': 'form-data',
                    "Authorization" : localStorage.getItem("token")
                },
    })
    const data=await response.json();
            console.log("data:",data)
}


const get = ()=>{

const api = `http://localhost:8080/Adminproducts`

}