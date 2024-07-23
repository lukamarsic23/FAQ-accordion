const plus = "assets/images/icon-plus.svg";
const minus = "assets/images/icon-minus.svg";

console.log(plus)
window.showHide = function (index) {
  const contentElement = document.getElementById(`toggleContent${index}`);
  const imgElement = document.getElementById(`toggleImage${index}`);

  // Toggle the display of the content
  if (contentElement.classList.contains('hidden')) {
    contentElement.classList.remove('hidden');
  } else {
    contentElement.classList.add('hidden');
  }

  // Toggle the image source
  if (imgElement.src.includes(plus)) {
    imgElement.src = minus;
  } else {
    imgElement.src = plus;
  }
}