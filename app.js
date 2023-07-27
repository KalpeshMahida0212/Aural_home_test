// Function to check if the device is a computer or laptop
function isComputerOrLaptop() {
  return window.innerWidth >= 1024; // You can adjust the width as needed
}

// Function to show the alert message
function showDesktopAlert() {
  alert("Use Arrow Keys For smooth Navigation");
}

// Check on page load and show the alert if it's a computer or laptop
window.addEventListener('load', function() {
  if (isComputerOrLaptop()) {
    showDesktopAlert();
  }
});

function redirectToGooglePlay() {
  window.location.href = "https://play.google.com/store/apps/details?id=com.aural.settings_aural&hl=en_IN&gl=US";
}

function redirectToAppleStore() {
  window.location.href = "https://apps.apple.com/in/app/aural/id1663503315";
}

var can = document.getElementById("full");
function resizeCanvas() {
  can.style.width = window.innerWidth + "px";
  setTimeout(function () {
    can.style.height = window.innerHeight + "px";
  }, 0);
}

window.onresize = resizeCanvas;
resizeCanvas();

const layout = new rive.Layout({
  fit: rive.Fit.Cover,
});

var can = document.getElementById("mobile");
function resizeCanvas() {
  can.style.width = window.innerWidth + "px";
  setTimeout(function () {
    can.style.height = window.innerHeight + "px";
  }, 0);
}

window.onresize = resizeCanvas;
resizeCanvas();

const moblayout = new rive.Layout({
  fit: rive.Fit.Cover,
});

const m = new rive.Rive({
  src: "Auralwebsite_vertical.riv",
  canvas: document.getElementById("mobile"),
  layout: moblayout,
  autoplay: true,
  stateMachines: "webstate",
  fit: rive.Fit.cover,
  onLoad: () => {
    m.resizeDrawingSurfaceToCanvas();
    const mobInputs = m.stateMachineInputs("webstate");
    const mobtrigger1 = mobInputs.find((i) => i.name === "next");
    const mobtrigger2 = mobInputs.find((i) => i.name === "scroll_down");
    const mobtrigger3 = mobInputs.find((i) => i.name === "scroll_up");
    mobtrigger1.fire();
    setTimeout(() => {
      mobtrigger1.fire();
    }, 1000);
    m.layout = new rive.Layout({ fit: rive.Fit.Fill });

    var isMobScrolling = false;
    var previousMobScrollY = 0;

    function handlemobScroll(event) {
      if (!isMobScrolling) {
        isMobScrolling = true;
        previousMobScrollY =
          event.deltaY || event.touches[0].clientY || -event.detail;
        return;
      }

      var currentMobScrollY =
        event.deltaY || event.touches[0].clientY || -event.detail;
      var MobscrollDifference = currentMobScrollY - previousMobScrollY;

      if (MobscrollDifference > 0) {
        mobtrigger3.fire(); // Scroll down
      } else {
        mobtrigger2.fire(); // Scroll up
      }

      previousMobScrollY = currentMobScrollY;
      clearTimeout(isMobScrolling);
      isMobScrolling = setTimeout(function () {
        isMobScrolling = false;
      }, 200);
    }
    document.addEventListener("touchmove", handlemobScroll, {
      passive: true,
    });
  },
  onStateChange: (event) => {
    const mobstateName = event.data[0];
    console.log(mobstateName);
    const NavbarDiv = document.querySelector(".navbar");
    const section1Div = document.querySelector(".homePage_1");
    const section2Div = document.querySelector(".homePage_2");
    const section3Div = document.querySelector(".homePage_3");
    const section4Div = document.querySelector(".homePage_4");
    const section5Div = document.querySelector(".homePage_5");

    if (mobstateName === "screen1" || mobstateName === "screen1_loop") {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 1;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 0;
      }, 1000);
    } else if (
      mobstateName === "screen2to3" ||
      mobstateName === "screen2loop"
    ) {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 1;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 0;
      }, 1000);
    } else if (
      mobstateName === "screen3to4" ||
      mobstateName === "screen3to4 2"
    ) {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 1;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 0;
      }, 1000);
    } else if (
      mobstateName === "screen3to4 3" ||
      mobstateName === "screen3to4 4"
    ) {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 1;
        section5Div.style.opacity = 0;
      }, 1000);
    } else if (
      mobstateName === "screen4to5" ||
      mobstateName === "screen4to5 2"
    ) {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 1;
      }, 1000);
    } else {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 0;
      }, 1000);
    }
  },
});
const r = new rive.Rive({
  src: "aural_orb_website.riv",
  canvas: document.getElementById("full"),
  layout: layout,
  autoplay: true,
  stateMachines: "webstate",
  fit: rive.Fit.cover,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
    const Inputs = r.stateMachineInputs("webstate");
    const trigger1 = Inputs.find((i) => i.name === "next");
    const trigger2 = Inputs.find((i) => i.name === "scroll_down");
    const trigger3 = Inputs.find((i) => i.name === "scroll_up");
    trigger1.fire();
    setTimeout(() => {
      trigger1.fire();
    }, 1000);
    r.layout = new rive.Layout({ fit: rive.Fit.Fill });

    var isScrolling = false;
    var previousScrollY = 0;

    function handleScroll(event) {
      if (!isScrolling) {
        isScrolling = true;
        previousScrollY = event.deltaY || -event.detail;
        return;
      }

      var currentScrollY = event.deltaY || -event.detail;
      var scrollDifference = currentScrollY - previousScrollY;

      if (scrollDifference > 0) {
        trigger3.fire(); // Scroll down
      } else {
        trigger2.fire(); // Scroll up
      }

      previousScrollY = currentScrollY;
      clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        isScrolling = false;
      }, 200);
    }

    function handleKeyDown(event) {
      if (event.key === "ArrowDown") {
        trigger2.fire(); // Scroll down
      } else if (event.key === "ArrowUp") {
        trigger3.fire(); // Scroll up
      }
    }

    function handleZoom() {
      clearTimeout(isScrolling);
      isScrolling = false;
    }

    window.addEventListener("wheel", handleScroll);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleZoom);
  },
  onStateChange: (event) => {
    const stateName = event.data[0];
    console.log(stateName);
    const NavbarDiv = document.querySelector(".navbar");
    // const InstructionDiv = document.querySelector(".instruction");
    const section1Div = document.querySelector(".homePage_1");
    const section2Div = document.querySelector(".homePage_2");
    const section3Div = document.querySelector(".homePage_3");
    const section4Div = document.querySelector(".homePage_4");
    const section5Div = document.querySelector(".homePage_5");

    if (stateName === "screen1" || stateName === "screen1_loop") {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        // InstructionDiv.style.opacity = 1;
        section1Div.style.opacity = 1;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 0;
      }, 1000);
    } else if (stateName === "screen2to3" || stateName === "screen2loop") {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 1;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 0;
      }, 1000);
    } else if (stateName === "screen3to4" || stateName === "screen3to4 2") {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 1;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 0;
      }, 1000);
    } else if (stateName === "screen3to4 3" || stateName === "screen3to4 4") {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 1;
        section5Div.style.opacity = 0;
      }, 1000);
    } else if (stateName === "screen4to5" || stateName === "screen4to5 2") {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 1;
      }, 1000);
    } else {
      setTimeout(() => {
        NavbarDiv.style.opacity = 1;
        section1Div.style.opacity = 0;
        section2Div.style.opacity = 0;
        section3Div.style.opacity = 0;
        section4Div.style.opacity = 0;
        section5Div.style.opacity = 0;
      }, 1000);
    }
  },
});