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
