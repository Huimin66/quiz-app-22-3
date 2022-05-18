const bookmark = document.querySelectorAll('[data-js="bookmark"]');

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener("click", () => {
    bookmark[i].classList.toggle("card-bookmark-saved");
  });
}
