const bookmark = document.querySelectorAll('[data-js="bookmark"]');

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].classList.toggle("bookmark-saved");
}
