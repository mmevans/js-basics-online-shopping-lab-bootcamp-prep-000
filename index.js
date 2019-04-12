var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: item};
  var newPrice = {itemPrice: Math.floor(Math.random() * 100) + 1};
  var itemAndPrice = Object.assign(newItem, newPrice);
  cart.push(itemAndPrice);
  
  return(`${item} has been added to your cart.`);
}

function viewCart() {
  var array = [];
  for(let i = 0; i < array.length; i++) {
    array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if(cart.length === 0) {
    return("Your shopping cart is empty.");
  }
  if (cart.length === 1) {
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
  }
  if (cart.length === 2) {
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and )
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
