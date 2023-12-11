// Paralax Scroll effect
window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

// Chameleon
const colorPicker = document.getElementById("color-picker");
const chameleon = document.getElementById("chameleon");

const chameleonBody = document.getElementById("background_chameleon");
colorPicker.addEventListener("change", function () {
  const chosenColor = this.value;
  chameleonBody.style.backgroundColor = chosenColor;
});

// Panda box
function changeVisibility() {
    var box = document.getElementById("box");
    if (box.style.visibility === "hidden") {
      box.style.visibility = "visible";
    } else {
      box.style.visibility = "hidden";
    }
  }