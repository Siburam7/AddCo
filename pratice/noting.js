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
  document.body.style.overflow = "hidden";
});

manuBtnX.addEventListener("click", () => {
  manuBtn.style.display = "flex";
  buttomNav.style.height = "28px";
  buttomNav.style.backgroundColor = "rgba(25, 7, 162, 0.304)";
  buttomNav.style.width = "100%";
  navBtnText.style.display = "inline";

  OrgTetxAll.classList.toggle("toggle-manu-allText");
  manuBtnX.style.display = "none";
  document.body.style.overflow = "auto";
});

// navMenuToggle();

// Footer all Option

let footerMin = document.querySelectorAll(".footer-min");
let footerMinGroup = document.querySelectorAll(".footerMinGroup");

footerMin.forEach((fMin, idx) => {
  fMin.addEventListener("click", () => {
    footerMin.forEach((fMinX) => {
      fMinX.classList.remove("active-footer");
    });

    fMin.classList.add("active-footer");

    footerMinGroup.forEach((fMinGroup) => {
      fMinGroup.style.display = "none";
    });
    footerMinGroup[idx].style.display = "flex";

    //

    for (let i = 0; i < navContainer.length; i++) {
      navContainer[i].classList.remove("toogleNavBottom");
    }

    navContainer[idx].classList.add("toogleNavBottom");
  });
});

// Nav bottom Selector

let navContainer = document.querySelectorAll(".manu-allText h1");
let navContainerToggle = document.querySelector(".toogleNavBottom");

navContainer.forEach((navSingle, idx) => {
  navSingle.addEventListener("click", () => {
    if (idx === navContainer.length - 1) {
      return;
    }

    for (let i = 0; i < navContainer.length; i++) {
      navContainer[i].classList.remove("toogleNavBottom");
    }
    navSingle.classList.add("toogleNavBottom");

    //

    footerMinGroup.forEach((fMinGroup) => {
      fMinGroup.style.display = "none";
    });
    footerMinGroup[idx].style.display = "flex";

    //

    if (idx < footerMin.length) {
      footerMin.forEach((fMinX) => {
        fMinX.classList.remove("active-footer");
      });

      footerMin[idx].classList.add("active-footer");
    }

    //

    setTimeout(() => {
      manuBtn.style.display = "flex";
      buttomNav.style.height = "28px";
      buttomNav.style.backgroundColor = "rgba(25, 7, 162, 0.304)";
      buttomNav.style.width = "100%";
      navBtnText.style.display = "inline";

      OrgTetxAll.classList.toggle("toggle-manu-allText");
      manuBtnX.style.display = "none";
      document.body.style.overflow = "auto";
    }, 150);
  });
});
