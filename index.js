import Library from './modules/add-remove_functions.js';
import toggleWindow from './modules/display-navbar.js';
import * as dateTime from './modules/Date-and-time.js';

const date = document.querySelector('.date');
date.innerHTML = `${dateTime.date} ${dateTime.hour}:${dateTime.min}:${dateTime.sec}`;

const awesomeBooks = new Library();

awesomeBooks.addBook();
awesomeBooks.renderBooks();
toggleWindow();