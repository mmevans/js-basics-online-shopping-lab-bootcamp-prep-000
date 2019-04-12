var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random * Math.floor(max));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: item};
  //cart.push(newItem);
  var newPrice = {itemPrice: getRandomInt(101)};
  //cart.push(newPrice);
  var itemAndPrice = Object.assign(newItem, newPrice);
  cart.push(itemAndPrice);
  
  return(`${item} has been added to your cart.`);
}

function viewCart() {
  if(cart === []) {
    return('Your shopping cart is empty');
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
