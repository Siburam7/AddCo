// reset addEx form

// const { act } = require("react");

const cancelBtnAddEx = document.querySelector(".btn-add-expense-cancel");

const amountInputAddEx = document.querySelector("#enterAmount");
const categoryAddEx = document.querySelector("#category");
const dateInputAddEx = document.querySelector("#dateInput");
const paymentMethodAddEx = document.querySelector("#paymentMethod");
const descriptionAddEx = document.querySelector("#description");

function resetAddExForm() {
  amountInputAddEx.value = "";
  categoryAddEx.value = "";
  dateInputAddEx.value = "";
  paymentMethodAddEx.value = "";
  descriptionAddEx.value = "";

  iconCategoryOption.forEach((iconCateOpt, idx) => {
    iconCateOpt.style.display = idx === 0 ? "flex" : "none";
  });

  iconPaymentMethod.forEach((iconPreChange, idx) => {
    iconPreChange.style.display = idx === 0 ? "flex" : "none";
  });
}

cancelBtnAddEx.addEventListener("click", () => {
  resetAddExForm();
});

// nav-menu

let buttomNav = document.querySelector(".nav-button");
let manuBtn = document.querySelector(".fa-bars");
let manuBtnX = document.querySelector(".fa-x");
let navBtnText = document.querySelector(".text-top-nav-buttom");

let OrgTetxAll = document.querySelector(".manu-allText");
let toggleTextAll = document.querySelector(".toggle-manu-allText");

let footerMinGroup = document.querySelectorAll(".footerMinGroup");

manuBtnX.style.display = "none";

manuBtn.addEventListener("click", () => {
  manuBtnX.style.display = "flex";
  // manuBtnX.style.transform = "rotate(360deg)";
  manuBtn.style.display = "none";
  buttomNav.style.height = "calc(100vh - 45px)";
  buttomNav.style.backgroundColor = "white";
  buttomNav.style.width = "90%";
  navBtnText.style.display = "none";

  OrgTetxAll.classList.toggle("toggle-manu-allText");
  // manuBtn.style.display = "none";
  document.body.style.overflow = "hidden";
});

manuBtnX.addEventListener("click", () => {
  manuBtn.style.display = "flex";
  manuBtnX.style.display = "none";

  buttomNav.style.height = "28px";
  buttomNav.style.backgroundColor = "rgba(25, 7, 162, 0.304)";
  buttomNav.style.width = "100%";
  navBtnText.style.display = "inline";

  OrgTetxAll.classList.toggle("toggle-manu-allText");
  document.body.style.overflow = "auto";

  // close menu profile page if open

  if (menuPfContener.style.height === "400px") {
    rightSideArr.style.transform = "rotate(0deg)";
    menuPfContener.style.height = "auto";
    accTypeCommon.forEach((acTc) => {
      acTc.style.display = "none";
    });

    menuTextAllh1.forEach((mTAll) => {
      mTAll.style.opacity = "1";
    });

    topPfMain.style.marginBottom = "30px";
  }
});

// navMenuToggle();

// Footer all Option

let footerMin = document.querySelectorAll(".footer-min");

let navContainer = document.querySelectorAll(".manu-allText h1");
let navContainerToggle = document.querySelector(".toogleNavBottom");

// restore last page

let lastPage = localStorage.getItem("lastPage");
console.log(lastPage);

footerMinGroup.forEach((fMinX) => {
  fMinX.style.display = "none";
});

if (lastPage !== null) {
  lastPage = Number(lastPage);

  footerMinGroup[lastPage].style.display = "flex";
  for (let i = 0; i < navContainer.length; i++) {
    navContainer[i].classList.remove("toogleNavBottom");
  }

  navContainer[lastPage].classList.add("toogleNavBottom");

  for (let i = 0; i < footerMin.length; i++) {
    footerMin[i].classList.remove("active-footer");
  }

  if (lastPage < 4) {
    footerMin[lastPage].classList.add("active-footer");
  }
}

// restore last page end here

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
    localStorage.setItem("lastPage", idx);

    //

    for (let i = 0; i < navContainer.length; i++) {
      navContainer[i].classList.remove("toogleNavBottom");
    }

    navContainer[idx].classList.add("toogleNavBottom");
  });
});

// Nav bottom Selector

navContainer.forEach((navSingle, idx) => {
  navSingle.addEventListener("click", () => {
    if (idx === navContainer.length - 1) {
      return;
    }

    for (let i = 0; i < navContainer.length; i++) {
      navContainer[i].classList.remove("toogleNavBottom");
    }
    navSingle.classList.add("toogleNavBottom");
    localStorage.setItem("lastPage", idx);

    //

    footerMinGroup.forEach((fMinGroup) => {
      fMinGroup.style.display = "none";
    });
    footerMinGroup[idx].style.display = "flex";

    //

    footerMin.forEach((fMinX) => {
      fMinX.classList.remove("active-footer");
    });

    if (idx < 4) {
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

// Calender Icon Clicker & Add showPicker

let calendarIcon = document.querySelector(".fa-calendar-days");
let dateInput = document.querySelector("#dateInput");

calendarIcon.addEventListener("click", () => {
  dateInput.showPicker();
});

dateInput.addEventListener("click", () => {
  dateInput.showPicker();
});

// Page loding Screen

window.addEventListener("load", () => {
  let looder = document.querySelector(".loader");

  looder.style.display = "none";
});

// category all icon change

const category = document.querySelector("#category");

const iconCategoryOption = document.querySelectorAll(".icon-category-option");

category.addEventListener("change", (e) => {
  iconCategoryOption.forEach((icon, idx) => {
    icon.style.display = idx === e.target.selectedIndex ? "flex" : "none";
  });
});

// Payment Method all icon Change

const paymentMethod = document.querySelector("#paymentMethod");

const iconPaymentMethod = document.querySelectorAll(".icon-payment-method");

paymentMethod.addEventListener("change", (e) => {
  iconPaymentMethod.forEach((icon, idx) => {
    icon.style.display = idx === e.target.selectedIndex ? "flex" : "none";
  });
});

// Add Expence Btn animation

const addExpbtn = document.querySelector(".btn-add-expense");
const spineerContener = document.querySelector(".spnner-btn-addExp");
const checkIcon = document.querySelector(".fa-check-addEx");
const addExpText = document.querySelector("#span-addEx");

let isAnimating = false;

addExpbtn.addEventListener("click", () => {
  if (isAnimating) return;

  isAnimating = true;

  addExpbtn.style.width = "50px";
  addExpbtn.style.padding = "0";
  addExpbtn.style.border = "4px solid rgba(66, 133, 244, 0.25)";
  addExpbtn.style.backgroundColor = "transparent";

  addExpText.style.display = "none";

  setTimeout(() => {
    addExpbtn.style.borderRadius = "50%";
  }, 50);

  setTimeout(() => {
    spineerContener.classList.add("spinnerAdder");

    const spinnerAdder = document.querySelector(".spinnerAdder");

    spinnerAdder.style.border = "4px solid rgba(66, 133, 244, 0.25)";

    spinnerAdder.style.borderTop = "4px solid rgba(25, 7, 162, 0.634)";
  }, 190);

  setTimeout(() => {
    const spinnerAdder = document.querySelector(".spinnerAdder");

    spinnerAdder.style.border = "4px solid rgba(34, 197, 94, 0.20)";

    spinnerAdder.style.borderTop = "4px solid #22c55e";
  }, 1300);

  setTimeout(() => {
    spineerContener.classList.remove("spinnerAdder");

    addExpbtn.style.borderRadius = "10px";
    addExpbtn.style.border = "none";
    addExpbtn.style.backgroundColor = "#22c55e";

    checkIcon.style.setProperty("display", "flex", "important");
  }, 1450);

  setTimeout(() => {
    checkIcon.style.setProperty("display", "none", "important");

    addExpbtn.style.backgroundColor = "rgba(25, 7, 162, 0.634)";
    addExpbtn.style.width = "100%";
    addExpbtn.style.padding = "12px";

    addExpText.style.display = "inline";
    resetAddExForm();
  }, 2200);

  setTimeout(() => {
    isAnimating = false;
  }, 2500);
});

// profile after click

const rightSideArr = document.querySelector(".right-side-arr");
const menuPfContener = document.querySelector(".top-manu-pf-contener");
const accTypeCommon = document.querySelectorAll(".acc-type");
let menuTextAllh1 = document.querySelectorAll(".manu-allText h1");
let topPfMain = document.querySelector(".top-manu-pf");

rightSideArr.addEventListener("click", () => {
  if (menuPfContener.style.height < "400px") {
    buttomNav.style.width = "90%";
    rightSideArr.style.transform = "rotate(0deg)";
    menuPfContener.style.height = "auto";
    menuPfContener.style.backgroundColor = "#ffff";
    accTypeCommon.forEach((acTc) => {
      acTc.style.display = "none";
    });

    menuTextAllh1.forEach((mTAll) => {
      mTAll.style.opacity = "1";
    });

    // topPfMain.style.marginBottom = "0px";
    topPfMain.style.backgroundColor = "rgba(25, 7, 162, 0.05)";
    topPfMain.style.border = "0.5px solid rgba(25, 7, 162, 0.532)";
  } else {
    buttomNav.style.width = "100%";
    menuPfContener.style.height = "100dvh";
    menuPfContener.style.backgroundColor = "rgba(25, 7, 162, 0.05)";
    rightSideArr.style.transform = "rotate(90deg)";
    accTypeCommon.forEach((acTc) => {
      acTc.style.display = "flex";
    });

    menuTextAllh1.forEach((mTAll) => {
      mTAll.style.opacity = "0";
    });

    // topPfMain.style.marginBottom = "0px";
    topPfMain.style.backgroundColor = "transparent";
    topPfMain.style.border = "none";
  }
});
