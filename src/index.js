// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");

  const price = parseFloat(priceElement.innerText);
  const quantity = parseInt(quantityElement.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");
  const productsCopy = [...allProducts];
  let total = 0;
  productsCopy.forEach((product) => (total += updateSubtotal(product)));

  // ITERATION 3
  const totalElm = document.querySelector("#total-value span");
  totalElm.innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
