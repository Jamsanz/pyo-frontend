var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");

console.log('injected')

document.addEventListener("scroll", function () {
  /*Apply classNamees for slide in bar*/
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classNameList.add("bg-white");
    navaction.classNameList.remove("bg-white");
    navaction.classNameList.add("gradient");
    navaction.classNameList.remove("text-gray-800");
    navaction.classNameList.add("text-white");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classNameList.add("text-gray-800");
      toToggle[i].classNameList.remove("text-white");
    }
    header.classNameList.add("shadow");
    navcontent.classNameList.remove("bg-gray-100");
    navcontent.classNameList.add("bg-white");
  } else {
    header.classNameList.remove("bg-white");
    navaction.classNameList.remove("gradient");
    navaction.classNameList.add("bg-white");
    navaction.classNameList.remove("text-white");
    navaction.classNameList.add("text-gray-800");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classNameList.add("text-white");
      toToggle[i].classNameList.remove("text-gray-800");
    }

    header.classNameList.remove("shadow");
    navcontent.classNameList.remove("bg-white");
    navcontent.classNameList.add("bg-gray-100");
  }
});
var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
  var target = (e && e.target);

  //Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classNameList.contains("hidden")) {
        navMenuDiv.classNameList.remove("hidden");
      } else {
        navMenuDiv.classNameList.add("hidden");
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classNameList.add("hidden");
    }
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}