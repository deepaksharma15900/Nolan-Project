// function changeBg() {
//   var scrollvalue = window.scrollY;
//   var selectedValue = document.getElementById("header");
//   if (scrollvalue < 2) {
//     selectedValue.classList.remove("bgColor");
//   }
//   else {
//     selectedValue.classList.add("bgColor")
//   }
// }
// document.addEventListener("scroll", changeBg);

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})