let allData = function () {
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
};

allData();

// add product toggle

let addProductToggle = function () {
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
};

addProductToggle();

// nav-menu

let navMenuToggle = function () {
  let buttomNav = document.querySelector(".nav-button");
  let manuBtn = document.querySelector(".fa-bars");
  let navBtnText = document.querySelector(".text-top-nav-buttom");

  let OrgTetxAll = document.querySelector(".manu-allText");
  let toggleTextAll = document.querySelector(".toggle-manu-allText");

  let toggle = 0;

  manuBtn.addEventListener("click", () => {
    if (toggle === 1) {
      toggle = 0;
      buttomNav.style.height = "28px";
      buttomNav.style.backgroundColor = "rgba(25, 7, 162, 0.304)";
      buttomNav.style.width = "100%";
      navBtnText.style.display = "inline";
    } else {
      toggle = 1;
      buttomNav.style.height = "calc(100vh - 65px)";
      buttomNav.style.backgroundColor = "white";
      buttomNav.style.width = "75%";
      navBtnText.style.display = "none";
    }

    OrgTetxAll.classList.toggle("toggle-manu-allText");
  });
};

navMenuToggle();
