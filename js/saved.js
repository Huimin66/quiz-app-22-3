const bookmark = document.querySelector('[data-js="bookmark"]');
bookmark.addEventListener("click", sendalert);
function sendalert() {
  alert("this question is saved");
}
