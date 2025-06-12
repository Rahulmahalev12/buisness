let cart = [];

addToCart(itemName); {
  cart.push(itemName);
  document.getElementById("cart-count").textContent = cart.length;
}

function viewCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Your cart contains:\n" + cart.join("\n"));
  }
}
function addToCart(productName) {
  alert(productName + " added to cart!");

}
document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.querySelector(".add-to-cart");

  if (cartButton) {
    cartButton.addEventListener("click", function () {
      const product = cartButton.getAttribute("data-product");
      addToCart(product);
    });
  }
});

