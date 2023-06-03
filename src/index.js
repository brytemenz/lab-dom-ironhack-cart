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
  const target = event.currentTarget;
  const productRow = target.parentNode.parentNode;
  const tableBody = document.getElementsByTagName("tbody")[0];
  tableBody.removeChild(productRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productNameInput = document.querySelector(
    ".create-product input[type='text']"
  );
  const productPriceInput = document.querySelector(
    ".create-product input[type='number']"
  );

  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);

  if (productName && productPrice) {
    const tableBody = document.querySelector("tbody");
    const newRow = document.createElement("tr");
    newRow.classList.add("product");
    newRow.innerHTML = `
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0.00</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;

    tableBody.appendChild(newRow);
    productNameInput.value = "";
    productPriceInput.value = "";

    const removeButtons = document.getElementsByClassName("btn-remove");
    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener("click", removeProduct);
    }
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
