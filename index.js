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
  cart.push(newItem);
  var newPrice = {itemPrice: getRandomInt(101)};
  cart.push(newPrice);
  console.log(`${item} has been added to your cart`);
}

function viewCart() {
  // write your code here
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
