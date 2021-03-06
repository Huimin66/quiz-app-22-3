export default function setBookmarkFlag() {
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
  const cards = document.querySelectorAll('[data-js="card"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  console.log(bookmarkPage);
  /* bookmarkPageItems = bookmarkPage.children; */

  const bookmarkFlag = [];

  bookmarks.forEach((bookmarkItem, index) => {
    bookmarkItem.addEventListener('click', () => {
      bookmarkFlag[index] = !bookmarkFlag[index];

      bookmarkFlag[index]
        ? bookmarkItem.classList.add('card-bookmark-saved')
        : bookmarkItem.classList.remove('card-bookmark-saved');
    });

    if (bookmarkFlag[index]) {
      bookmarkPage[index].classList;
      /*if bookmarkfFalg is true, show this question card in the bookmark site*/
      /* how can i share the variable bookmarkFlag between index.html and bookmark.html?*/
    }
  });
}

/* element.appendChild(newnode) */
/* element.removeChild(node) */
