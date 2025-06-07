let cart = []

function addToCart(book) {
    cart.push(book);
    const stringifiedCart = JSON.stringify(cart)
    sessionStorage.setItem("cartItems", stringifiedCart);
    alert("Item added to the cart");
    
}

function subscribe() {
    alert("Thank you for subscribing.");
}

function clearCart() {

    if( cart.length > 0) {
        
        alert("Cart cleared");

        const cartDisplay= document.getElementById('cart');
        cart.length = 0
        cartDisplay.innerHTML = '';
        sessionStorage.clear();
    
    } else {
        
        alert("No items to clear.")
    }

    
}


function processOrder() {
        if( cart.length > 0) {
        alert("Thank you for your order");
        sessionStorage.clear();
        const cartDisplay= document.getElementById('cart');
        cart.length = 0
        cartDisplay.innerHTML = '';
    } else {
        alert("Cart is empty.")
    }
}

  document.getElementById("submit_form").addEventListener("submit", function(event) {
    event.preventDefault()
    
    const form = document.getElementById("submit_form");
    const formInputs = form.querySelectorAll('input');
    const formData = {};
    
    
      for (let i = 0; i < formInputs.length; i++) {
        const input = formInputs[i];
        if ( input.type === 'submit'|| input.type ==='button') {
            continue
        }
        if (input.value && input.value.trim() !== '') {
            formData[input.id] = input.value;
        
        }
  }
  
  if (Object.keys(formData).length > 0 ) {
    const stringifiedObject = JSON.stringify(formData)
    localStorage.setItem(formInputs[0].value, stringifiedObject );
    alert('Thank you for your message')
    
  } else (
  alert("Please enter your name, email, and feedback")
  )
});

function viewCart() {
    const cartDisplay= document.getElementById('cart');

    cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    cartDisplay.appendChild(listItem);
        });

    document.getElementById("modal").classList.add('open');
    
}


function clearForm() {
    const form = document.getElementById("submit_form");
    form.reset();
}


function closeCart() {
    document.getElementById('modal').classList.remove('open');

}

