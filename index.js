const listEl = document.querySelector('.header-list');
const addnewEl = document.querySelector('.header-addnew');
const contactEl = document.querySelector('.header-contact');
const date = document.querySelector('.date');
const libraryBooksListEl = document.querySelector('.library-booklist');
const libraryBooksEl = document.querySelector('.library-booklist__books');
const addElBtn = document.querySelector('.library-btn__add');
const contactInformationEl = document.querySelector('.contact-information');
const form = document.querySelector('form');
const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
const alertMsgEl = document.querySelector('.alertMsg');
setInterval(() => {
  date.innerHTML = new Date();
}, 1000);

const toggleWindow = () => {
  listEl.addEventListener('click', () => {
    form.classList.remove('show');
    contactInformationEl.classList.remove('show');
    libraryBooksListEl.classList.remove('hide');
    listEl.style.color = 'blue';
    addnewEl.style.color = 'black';
    contactEl.style.color = 'black';
  });

  addnewEl.addEventListener('click', () => {
    form.classList.add('show');
    contactInformationEl.classList.remove('show');
    libraryBooksListEl.classList.add('hide');
    listEl.style.color = 'black';
    addnewEl.style.color = 'blue';
    contactEl.style.color = 'black';
  });

  contactEl.addEventListener('click', () => {
    form.classList.remove('show');
    contactInformationEl.classList.add('show');
    libraryBooksListEl.classList.add('hide');
    listEl.style.color = 'black';
    addnewEl.style.color = 'black';
    contactEl.style.color = 'blue';
  });
};

const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    addElBtn.addEventListener('click', () => {
      const title = titleEl.value;
      const author = authorEl.value;
      if (title && author) {
        const newBook = {
          title,
          author,
        };
        bookList.push(newBook);
        localStorage.setItem('bookList', JSON.stringify(bookList));
        this.renderBooks();
        form.reset();
        alertMsgEl.innerHTML = 'Book added successfully, <br> Check list.';
        alertMsgEl.style.color = 'blue';
      } else {
        alertMsgEl.innerHTML = 'Input something';
        alertMsgEl.style.color = 'red';
      }
      setTimeout(() => {
        alertMsgEl.innerHTML = '';
      }, 1500);
    });
  }

  renderBooks() {
    if (!bookList.length) {
      libraryBooksEl.innerHTML = 'No books added';
    } else {
      let markup = '';
      bookList.forEach((elem, index) => {
        markup += `<div class="library-book" style="background-color: ${index % 2 && 'rgb(225, 223, 223)'}">
        <p class="library-book__title">"${elem.title}"</p> <span> by </span>
        <p class="library-book__author">${elem.author}</p>    
        <button type="button" class="library-btn__rmv" id=${index}>Remove</button>
    </div>`;
      });
      libraryBooksEl.innerHTML = markup;
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
const awesomeBooks = new Library();

awesomeBooks.addBook();
awesomeBooks.renderBooks();
toggleWindow();