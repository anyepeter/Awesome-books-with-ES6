const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

export default class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    document.querySelector('.library-btn__add').addEventListener('click', () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (title && author) {
        const newBook = {
          title,
          author,
        };
        bookList.push(newBook);
        localStorage.setItem('bookList', JSON.stringify(bookList));
        this.renderBooks();
        document.querySelector('form').reset();
        document.querySelector('.alertMsg').innerHTML = 'Book added successfully, <br> Check list.';
        document.querySelector('.alertMsg').style.color = 'blue';
      } else {
        document.querySelector('.alertMsg').innerHTML = 'Input something';
        document.querySelector('.alertMsg').style.color = 'red';
      }
      setTimeout(() => {
        document.querySelector('.alertMsg').innerHTML = '';
      }, 1500);
    });
  }

  renderBooks() {
    if (!bookList.length) {
      document.querySelector('.library-booklist__books').innerHTML = 'No books added';
    } else {
      let markup = '';
      bookList.forEach((elem, index) => {
        markup += `<div class="library-book" style="background-color: ${index % 2 && 'rgb(225, 223, 223)'}">
        <p class="library-book__title">"${elem.title}"</p> <span> by </span>
        <p class="library-book__author">${elem.author}</p>    
        <button type="button" class="library-btn__rmv" id=${index}>Remove</button>
    </div>`;
      });
      document.querySelector('.library-booklist__books').innerHTML = markup;
    }

    const removeBook = () => {
      const removeBtnsEl = [...document.getElementsByClassName('library-btn__rmv')];
      removeBtnsEl.forEach((item) => {
        item.addEventListener('click', (e) => {
          bookList.splice(e.target.id, 1);
          localStorage.setItem('bookList', JSON.stringify(bookList));
          this.renderBooks();
        });
      });
    };
    removeBook();
  }
}