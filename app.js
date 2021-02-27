const cartBtn = document.querySelector('.cart-btn');
const CloseCartBtn = document.querySelector('.close-cart');
const ClearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const CartOverlay = document.querySelector('.cart-overlay');
const CartItems = document.querySelector('.cart-items');
const CartTotal = document.querySelector('.cart-total');
const CartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.product-center');

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
     result += 
   })
 }
}

//local storage

class Storage{

}

document.addEventListener("DOMContentLoaded", ()=>{

  const ui = new UI();
  const products = new products();

  products.getProducts().then(products => 
    ui.displayProducts(products))
;});

