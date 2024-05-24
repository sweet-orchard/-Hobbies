const hobbiesLink = document.getElementById("hobbiesLink");
const doubleList = document.getElementById("doubleList");

hobbiesLink.addEventListener("click", () => {
  if (doubleList.style.display === "flex") {
    doubleList.style.display = "none";
  } else {
    doubleList.style.display = "flex";
  }
});

// menu button
let menuOpen = false;

function transformMenu() {
  const line1 = document.querySelector(".line-1");
  const line2 = document.querySelector(".line-2");
  const line3 = document.querySelector(".line-3");
  const linksHam = document.getElementById("navLinks");
  linksHam.classList.toggle("visible");

  if (menuOpen) {
    line2.style.opacity = 1;
    line1.style.transform = "none";
    line1.style.width = "100%";
    line3.style.transform = "none";
  } else {
    line2.style.opacity = 0;
    line1.style.transform = "translateY(12px) rotate(45deg)";
    line1.style.width = "100%";
    line3.style.transform = "translateY(-14px) rotate(-45deg)";
  }

  menuOpen = !menuOpen;
}

// clear values from the inputs
function resetFunction() {
  document.getElementById("knitInput").value = "";
  document.getElementById("bookInput").value = "";
  document.getElementById("musicInput").value = "";
  document.getElementById("catInput").value = "";
}

// swaping cards

var swiper = new Swiper(".Slider-container", {
  effect: "cards",
  grabCursor: true,
  centerdSlides: true,
  loop: true,
});

//
//
//
//
//
//
// getting the values
var mainColour = null;
const squares = document.querySelectorAll(".empty-square");
const colourPallete = document.querySelectorAll(".colour-squares");
const clearAll = document.getElementById("clearAll");
const currentColour = document.getElementById("mainColour");

//picking up the mainColour from squares
colourPallete.forEach((square) => {
  square.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(square);
    const backgroundColor = computedStyle.getPropertyValue("background-color");

    switch (backgroundColor) {
      case "rgb(234, 51, 35)":
        mainColour = "rgb(234, 51, 35)";
        console.log(mainColour);
        break;
      case "rgb(238, 124, 48)":
        mainColour = "rgb(238, 124, 48)";
        console.log(mainColour);
        break;
      case "rgb(243, 175, 61)":
        mainColour = "rgb(243, 175, 61)";
        console.log(mainColour);
        break;
      case "rgb(248, 214, 73)":
        mainColour = "rgb(248, 214, 73)";
        console.log(mainColour);
        break;
      case "rgb(255, 238, 49)":
        mainColour = "rgb(255, 238, 49)";
        console.log(mainColour);
        break;
      case "rgb(177, 237, 74)":
        mainColour = "rgb(177, 237, 74)";
        console.log(mainColour);
        break;
      case "rgb(93, 203, 60)":
        mainColour = "rgb(93, 203, 60)";
        console.log(mainColour);
        break;
      case "rgb(67, 151, 153)":
        mainColour = "rgb(67, 151, 153)";
        console.log(mainColour);
        break;
      case "rgb(32, 63, 166)":
        mainColour = "rgb(32, 63, 166)";
        console.log(mainColour);
        break;
      case "rgb(53, 23, 170)":
        mainColour = "rgb(53, 23, 170)";
        console.log(mainColour);
        break;
      case "rgb(105, 23, 167)":
        mainColour = "rgb(105, 23, 167)";
        console.log(mainColour);
        break;
      case "rgb(190, 40, 115)":
        mainColour = "rgb(190, 40, 115)";
        console.log(mainColour);
        break;
      case "rgb(30, 30, 30)":
        mainColour = "rgb(30, 30, 30)";
        console.log(mainColour);
        break;
      case "rgb(137, 137, 137)":
        mainColour = "rgb(137, 137, 137)";
        console.log(mainColour);
        break;
      default:
        console.log("something else");
    }
    currentColour.style.backgroundColor = mainColour;
  });
});

// change square colour
squares.forEach((e) => {
  e.addEventListener("click", () => {
    // e.style.backgroundColor = mainColour;
    const computedStyle = window.getComputedStyle(e);
    const backgroundColor = computedStyle.getPropertyValue("background-color");
    if (backgroundColor === mainColour) {
      e.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
      e.style.backgroundColor = mainColour;
    }
  });
});

squares.forEach((e) => {
  e.addEventListener("mouseover", () => {
    const computedStyle = window.getComputedStyle(e);
    const backgroundColor = computedStyle.getPropertyValue("background-color");
    // if (backgroundColor === mainColour) {
    //   e.style.backgroundColor = mainColour;
    // } else {
    //   e.style.backgroundColor = "rgb(240, 240, 240)";
    // }

    switch (backgroundColor) {
      case "rgb(234, 51, 35)":
        e.style.backgroundColor = "rgb(234, 51, 35)";
        break;
      case "rgb(238, 124, 48)":
        e.style.backgroundColor = "rgb(238, 124, 48)";
        break;
      case "rgb(243, 175, 61)":
        e.style.backgroundColor = "rgb(243, 175, 61)";
        break;
      case "rgb(248, 214, 73)":
        e.style.backgroundColor = "rgb(248, 214, 73)";
        break;
      case "rgb(255, 238, 49)":
        e.style.backgroundColor = "rgb(255, 238, 49)";
        break;
      case "rgb(177, 237, 74)":
        e.style.backgroundColor = "rgb(177, 237, 74)";
        break;
      case "rgb(93, 203, 60)":
        e.style.backgroundColor = "rgb(93, 203, 60)";
        break;
      case "rgb(67, 151, 153)":
        e.style.backgroundColor = "rgb(67, 151, 153)";
        break;
      case "rgb(32, 63, 166)":
        e.style.backgroundColor = "rgb(32, 63, 166)";
        break;
      case "rgb(53, 23, 170)":
        e.style.backgroundColor = "rgb(53, 23, 170)";
        break;
      case "rgb(105, 23, 167)":
        e.style.backgroundColor = "rgb(105, 23, 167)";
        break;
      case "rgb(190, 40, 115)":
        e.style.backgroundColor = "rgb(190, 40, 115)";
        break;
      case "rgb(30, 30, 30)":
        e.style.backgroundColor = "rgb(30, 30, 30)";
        break;
      case "rgb(137, 137, 137)":
        e.style.backgroundColor = "rgb(137, 137, 137)";
        break;
      default:
        e.style.backgroundColor = "rgb(240, 240, 240)";
    }
  });

  e.addEventListener("mouseout", () => {
    const computedStyle = window.getComputedStyle(e);
    const backgroundColor = computedStyle.getPropertyValue("background-color");
    // if (backgroundColor === mainColour) {
    //   e.style.backgroundColor = mainColour;
    // } else {
    //   e.style.backgroundColor = "rgb(255, 255, 255)";
    // }

    switch (backgroundColor) {
      case "rgb(234, 51, 35)":
        e.style.backgroundColor = "rgb(234, 51, 35)";
        break;
      case "rgb(238, 124, 48)":
        e.style.backgroundColor = "rgb(238, 124, 48)";
        break;
      case "rgb(243, 175, 61)":
        e.style.backgroundColor = "rgb(243, 175, 61)";
        break;
      case "rgb(248, 214, 73)":
        e.style.backgroundColor = "rgb(248, 214, 73)";
        break;
      case "rgb(255, 238, 49)":
        e.style.backgroundColor = "rgb(255, 238, 49)";
        break;
      case "rgb(177, 237, 74)":
        e.style.backgroundColor = "rgb(177, 237, 74)";
        break;
      case "rgb(93, 203, 60)":
        e.style.backgroundColor = "rgb(93, 203, 60)";
        break;
      case "rgb(67, 151, 153)":
        e.style.backgroundColor = "rgb(67, 151, 153)";
        break;
      case "rgb(32, 63, 166)":
        e.style.backgroundColor = "rgb(32, 63, 166)";
        break;
      case "rgb(53, 23, 170)":
        e.style.backgroundColor = "rgb(53, 23, 170)";
        break;
      case "rgb(105, 23, 167)":
        e.style.backgroundColor = "rgb(105, 23, 167)";
        break;
      case "rgb(190, 40, 115)":
        e.style.backgroundColor = "rgb(190, 40, 115)";
        break;
      case "rgb(30, 30, 30)":
        e.style.backgroundColor = "rgb(30, 30, 30)";
        break;
      case "rgb(137, 137, 137)":
        e.style.backgroundColor = "rgb(137, 137, 137)";
        break;
      default:
        e.style.backgroundColor = "rgb(255, 255, 255)";
    }
  });
});

// make all squares white = clean up them
clearAll.addEventListener("click", () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "rgb(255, 255, 255)";
  });
});

const rubberMode = document.getElementById("rubber");
rubberMode.addEventListener("click", () => {
  mainColour = "rgb(255, 255, 255)";
  currentColour.style.backgroundColor = mainColour;
});
//
//
//
//
//
//
//
//
//
//
//
//
//
// for phone version

const squares2 = document.querySelectorAll(".empty-square2");
const colourPallete2 = document.querySelectorAll(".colour-squares2");
const currentColour2 = document.getElementById("mainColour2");
const clearAll2 = document.getElementById("clearAll2");

//picking up the mainColour from squares
colourPallete2.forEach((square) => {
  square.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(square);
    const backgroundColor = computedStyle.getPropertyValue("background-color");

    switch (backgroundColor) {
      case "rgb(234, 51, 35)":
        mainColour = "rgb(234, 51, 35)";
        console.log(mainColour);
        break;
      case "rgb(238, 124, 48)":
        mainColour = "rgb(238, 124, 48)";
        console.log(mainColour);
        break;
      case "rgb(243, 175, 61)":
        mainColour = "rgb(243, 175, 61)";
        console.log(mainColour);
        break;
      case "rgb(248, 214, 73)":
        mainColour = "rgb(248, 214, 73)";
        console.log(mainColour);
        break;
      case "rgb(255, 238, 49)":
        mainColour = "rgb(255, 238, 49)";
        console.log(mainColour);
        break;
      case "rgb(177, 237, 74)":
        mainColour = "rgb(177, 237, 74)";
        console.log(mainColour);
        break;
      case "rgb(93, 203, 60)":
        mainColour = "rgb(93, 203, 60)";
        console.log(mainColour);
        break;
      case "rgb(67, 151, 153)":
        mainColour = "rgb(67, 151, 153)";
        console.log(mainColour);
        break;
      case "rgb(32, 63, 166)":
        mainColour = "rgb(32, 63, 166)";
        console.log(mainColour);
        break;
      case "rgb(53, 23, 170)":
        mainColour = "rgb(53, 23, 170)";
        console.log(mainColour);
        break;
      case "rgb(105, 23, 167)":
        mainColour = "rgb(105, 23, 167)";
        console.log(mainColour);
        break;
      case "rgb(190, 40, 115)":
        mainColour = "rgb(190, 40, 115)";
        console.log(mainColour);
        break;
      case "rgb(30, 30, 30)":
        mainColour = "rgb(30, 30, 30)";
        console.log(mainColour);
        break;
      case "rgb(137, 137, 137)":
        mainColour = "rgb(137, 137, 137)";
        console.log(mainColour);
        break;
      default:
        console.log("something else");
    }
    currentColour2.style.backgroundColor = mainColour;
  });
});

// change square colour
squares2.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.backgroundColor = mainColour;
  });
});

// make all squares white = clean up them
clearAll2.addEventListener("click", () => {
  squares2.forEach((square) => {
    square.style.backgroundColor = "rgb(255, 255, 255)";
  });
});

const rubberMode2 = document.getElementById("rubber2");
rubberMode2.addEventListener("click", () => {
  mainColour = "rgb(255, 255, 255)";
  currentColour2.style.backgroundColor = mainColour;
});

const HobbiesDownBtn = document.getElementById("HobbiesDownBtn");
const hobbiesSection = document.getElementById("hobbiesSection");

HobbiesDownBtn.onclick = () => {
  hobbiesSection.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

HobbiesDownBtn.addEventListener("click", () => {
  hobbiesSection.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
