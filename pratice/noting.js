let allDetails = {};

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstName = document.querySelector("#username").value;
  let productName = document.querySelector("#productName").value;
  let productPrice = document.querySelector("#productPrice").value;

  if ([firstName] in allDetails) {
    allDetails[firstName].push([productName, productPrice]);
  } else {
    allDetails[firstName] = [[productName, productPrice]];
  }

  console.log(allDetails);
});

// add product toggle

let addBtn = document.querySelector("#add-product-text");
let addForm = document.querySelector(".add-product");

addBtn.addEventListener("click", () => {
  if (addForm.style.display === "none") {
    addForm.style.display = "flex";
    addBtn.style.color = "rgba(25, 7, 162, 0.634)";
  } else {
    addForm.style.display = "none";
    addBtn.style.color = "black";
  }
});
