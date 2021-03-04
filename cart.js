
let productCatalogue = [];
let totalPrice = 0;
let totalQuantity = 0;

const mainCart = document.getElementById('cartBody');
const productBody = document.getElementById('mainBody');
let countIncrease = parseInt(document.getElementById("counter").innerHTML);

let noOfGoods = document.getElementById('counter');
noOfGoods.innerHTML = productCatalogue.length;

function addGoods(id, product, price){

    
    countIncrease = countIncrease+1
    document.getElementById('counter').innerHTML = countIncrease;

    let catalogue = {
        id,
        product,
        price,
        quantity: 1
    }

    for ( let i = 0 ;  i < productCatalogue.length ; i++)
    {
        if (productCatalogue[i].id == catalogue.id) {
            let catalogueList = {
                id : catalogue.id,
                product : items.product,
                price: productCatalogue[i].price += price,
                quantity : +productCatalogue[i].quantity + 1
            };
            productCatalogue[i] = catalogueList; 
            return;       
        }
    }
        productCatalogue.push(catalogue);
        
}


function showCartItems(){
        
    if (countIncrease == 0) {
        alert('cart is empty, please add product to cart')
        return;
    }

    for (const items of productCatalogue) {
        let create = document.createElement("p");
        let assign = document.createTextNode(`
           Product Name:${items.product}, Product Price:${items.price}, Product Quantity: ${items.quantity} 
        `);
        create.appendChild(assign);
        var section = document.getElementById("cartBody");
        section.appendChild(create);
     
   }

   for (let i = 0; i < productCatalogue.length; i++) {
      
      totalPrice +=parseInt(productCatalogue[i].price);
      totalQuantity +=parseInt(productCatalogue[i].quantity)
      // console.log(totalPrice)
      // console.log(totalQuantity)     
   }
   document.getElementById('totalPrice').innerHTML = totalPrice ;
   document.getElementById('totalQuantity').innerHTML = totalQuantity;
   mainCart.classList.remove('d-none'); 
   productBody.classList.add('d-none'); 
}



paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
    const userForm = document.forms[0];
    const Fname =document.getElementById("checkoutFname").value;
    const Lname =document.getElementById("checkoutLname").value;
    const address = document.getElementById("checkoutAddress").value;
    let payAmount = document.getElementById("totalPrice").value;
    

    let nameCheck = /^[a-zA-Z\s]+$/;
    let addressCheck = /^[a-zA-Z0-9\s]+$/;

    if (Fname.trim() == '' || Fname.search(nameCheck) == -1) {
        errorMessage.classList.remove('d-none');
        errorMessage.innerHTML = 'Please enter a valid name';
    
    } else  if (Lname.trim() == '' || Lname.search(nameCheck) == -1) {
        errorMessage.classList.remove('d-none');
        errorMessage.innerHTML = 'Please enter a valid name';
    }
        
    else if (address.trim() == '' || address.search(addressCheck) == -1) {
        errorMessage.classList.remove('d-none');
        errorMessage.innerHTML = 'Please enter a valid address';
    } else {
            errorMessage.classList.add('d-none');
          
    }
    
    // form validation

    e.preventDefault();
    let handler = PaystackPop.setup({
    key: 'pk_test_497490a227829f25ca921ff587dbb7a0a36fb392',
    email: document.getElementById("email-address").value,
    amount: payAmount * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), 

    onClose: function(){
    alert('Transction Failed');
        },
        callback: function(response){
        let message = 'Payment complete! Reference: ' + response.reference;
        alert("Thank you for Patronising us");
        window.location = "";
        }

    });
    userForm.reset();
    handler.openIframe();

    }

