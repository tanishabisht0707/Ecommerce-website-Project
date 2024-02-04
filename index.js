let meubtn = document.querySelector(".menu")
let menupage = document.querySelector(".menu-page")


let cartbtn = document.querySelector(".cart")
let cartpage = document.querySelector(".cart-page")
let singin = document.querySelector(".signin")
let signinbox = document.querySelector(".signin-box")
let submitbtn = document.querySelector(".submit-btn")
let cartbox = document.querySelector(".cart-page")
let searchbox = document.querySelector(".searchbox")
let serchbtn = document.getElementById("search-btn")
let checkout = document.querySelector(".check")
let singProd = document.querySelector(".right-container")



let itembox = document.querySelector(".item")
let remitem = document.querySelector(".remove")
let products = document.querySelectorAll(".item-list")
let countitem = document.getElementById("countitm")
let count = 0

// --- show each projects

 products.forEach(prod => {
 prod.addEventListener('click',()=>{
  let prodName = prod.querySelector(".name").innerHTML;
  let prodPrice = prod.querySelector(".price").innerHTML;
  let prodImg = prod.querySelector("img").src;

  let data = {
    name : prodName,
    price : prodPrice,
    prodImg : prodImg
  }

   getData(data)

 })
 })
   
 const prodDetail = []

  const getData = (data) => {
   prodDetail.push(data)
  }

  let h2 = singProd.firstElementChild;
  h2 = prodDetail.price
 

let productsincart = []
products.forEach(product => {
  product.addEventListener("click", (e) => {
    if (e.target.classList.contains("addincart")) {

      const prodid = e.target.dataset.productId;
      const prodname = product.querySelector(".name").innerHTML
      const prodprice = product.querySelector(".price").innerHTML
      const prodimg = product.querySelector("img").src


      let productocart = {
        image: prodimg,
        name: prodname,
        id: prodid,
        price: prodprice,

      }
      updateproductincart(productocart)
      updateshoppcartHTML()
    }
  })
})

function updateproductincart(product) {

  productsincart.push(product)

 countitem.innerHTML = productsincart.length
  itembox.style.display = "block"
}

function updateshoppcartHTML() {
  if (productsincart.length > 0) {
    let result = productsincart.map(product => {

      return `
      <div class="item-box" >
       <img src= "${product.image}" alt="">
       <div class="info">
       <p class="name">${product.name}</p>
           <p class="pr">${product.price}</p>
           <p class="dis">5% discount</p>
           <p>Free delivery</p>
        
       </div>
       <p class="remove" onclick="remove(${product.id})" >X</p>  
   </div> `
    })
    itembox.innerHTML = result.join("")
    checkout.style.display = "block"
  } else {
      
      checkout.style.display = "none"
  }
}

  let box = cartpage.firstElementChild
 
  function remove(id){
    box.addEventListener("click",(e)=>{
      if(e.target.classList.contains("remove")){
        e.target.parentElement.remove()
        countitem.innerHTML = productsincart.length-1
      }
        productsincart =  productsincart.filter((i) => {

          if( i.id != id ){
            return i
             }
            })
      
    })
   
   }































// ================ normal buttons funcnality ==================
serchbtn.addEventListener("click", () => {
  searchbox.classList.toggle("show")
  menupage.classList.remove("active")
  cartpage.classList.remove("active")
})


meubtn.addEventListener("click", () => {
  menupage.classList.toggle("active")
  cartpage.classList.remove("active")
  searchbox.classList.remove("show")
})

cartbtn.addEventListener("click", () => {

  cartpage.classList.toggle("active")
  menupage.classList.remove("active")
  searchbox.classList.remove("show")
})

// singin.addEventListener("click", () => {
//   signinbox.classList.toggle("active-box")
// })

// submitbtn.addEventListener("click", () => {
//   signinbox.classList.add("remove-box")

// })
// ============================================================================