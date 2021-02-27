
const cartBtn = document.querySelector('.cart-btn');
const CloseCartBtn = document.querySelector('.close-cart');
const ClearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const CartOverlay = document.querySelector('.cart-overlay');
const CartItems = document.querySelector('.cart-items');
const CartTotal = document.querySelector('.cart-total');
const CartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.product-center');
const btns = document.querySelector(".bag-btn");

// cart

let cart = [];

// getting the products

class products{
  async getProducts(){
    try {
  let result = await fetch('products.json')
  let data = await result.json();


  let products = data.Items;
  products = products.map(item => {
    const {title,price} = item.fields;
    const {id} = item.sys
    const image = item.fields.image.field.file.url;
    return {title,price,id,image}
  })
  return products
  } catch (error) {
    console.log(error);
  }

}

// display products

class UI {
 displayProducts(products){
   let result = ''
   products.forEach(product => {
     result += `
     <section class = "product">
      <div class="img-container">
          <img class="product-img" src=${product.image} alt="">
        </div>
        <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            add to cart
        </button>
        <h3>${product.title}</h3>
        <h4>${product.price}</h4>
      </div>
    </section>
     `;
   });
   productsDOM.innerHTML =result;
 }

 getBagButtons(){
  const buttons =[...document.querySelector(".bag-btn")];
  buttonsDOM = buttons;
  buttons.forEach(button =>{
    let id = button.dataset.id;
    let inCart = cart.find(item => item.id === id);
    if(inCart){
      button.innerText = "In Cart";
      button.disable = true
    }
    else{
      button.addEventListener('click',(event)=>{
        event.target.innerText = "In Cart";
        event.target.disabled = true;
        // get product from products
        let carItem = 
        // add product to the cart
        // save cart in loc al storage
        // set cart values.
        // display cart items
        // show the cart
      });
    }
  })
 }
}

//local storage

class Storage{
  staticsaveProducts(products){
    localStorage.setItem("products",JSON.stringify(products))
  }

  static getProduct(id){
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(product => product.id===)
  }

}

document.addEventListener("DOMContentLoaded", ()=>{

  const ui = new UI();
  const products = new products();

  products.getProducts().then(products => {
    ui.displayProducts(products);
    Storage.saveProducts(products);
  }).then(() =>{
    ui.getBagButtons(){}
  });
});

