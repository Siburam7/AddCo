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
  let manuBtnX = document.querySelector(".fa-x");
  let navBtnText = document.querySelector(".text-top-nav-buttom");

  let OrgTetxAll = document.querySelector(".manu-allText");
  let toggleTextAll = document.querySelector(".toggle-manu-allText");

  manuBtnX.style.display = "none";

  manuBtn.addEventListener("click", () => {
    manuBtnX.style.display = "flex";
    buttomNav.style.height = "calc(100vh - 45px)";
    buttomNav.style.backgroundColor = "white";
    buttomNav.style.width = "75%";
    navBtnText.style.display = "none";

    OrgTetxAll.classList.toggle("toggle-manu-allText");
    manuBtn.style.display = "none";
  });

  manuBtnX.addEventListener("click", () => {
    manuBtn.style.display = "flex";
    buttomNav.style.height = "28px";
    buttomNav.style.backgroundColor = "rgba(25, 7, 162, 0.304)";
    buttomNav.style.width = "100%";
    navBtnText.style.display = "inline";

    OrgTetxAll.classList.toggle("toggle-manu-allText");
    manuBtnX.style.display = "none";
  });
};

navMenuToggle();

// Footer all Option

let footerMin = document.querySelectorAll(".footer-min");
let footerMinGroup = document.querySelectorAll(".footerMinGroup");

footerMin.forEach((fMin, idx) => {
  fMin.addEventListener("click", () => {
    footerMin[0].classList.remove("active-footer");
    footerMin[1].classList.remove("active-footer");
    footerMin[2].classList.remove("active-footer");
    footerMin[3].classList.remove("active-footer");
    fMin.classList.add("active-footer");

    footerMinGroup[0].style.display = "none";
    footerMinGroup[1].style.display = "none";
    footerMinGroup[2].style.display = "none";
    footerMinGroup[3].style.display = "none";
    footerMinGroup[idx].style.display = "flex";
  });
});
