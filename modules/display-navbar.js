const toggleWindow = () => {
  document.querySelector('.header-list').addEventListener('click', () => {
    document.querySelector('form').classList.remove('show');
    document.querySelector('.contact-information').classList.remove('show');
    document.querySelector('.library-booklist').classList.remove('hide');
    document.querySelector('.header-list').style.color = 'blue';
    document.querySelector('.header-addnew').style.color = 'black';
    document.querySelector('.header-contact').style.color = 'black';
  });

  document.querySelector('.header-addnew').addEventListener('click', () => {
    document.querySelector('form').classList.add('show');
    document.querySelector('.contact-information').classList.remove('show');
    document.querySelector('.library-booklist').classList.add('hide');
    document.querySelector('.header-list').style.color = 'black';
    document.querySelector('.header-addnew').style.color = 'blue';
    document.querySelector('.header-contact').style.color = 'black';
  });

  document.querySelector('.header-contact').addEventListener('click', () => {
    document.querySelector('form').classList.remove('show');
    document.querySelector('.contact-information').classList.add('show');
    document.querySelector('.library-booklist').classList.add('hide');
    document.querySelector('.header-list').style.color = 'black';
    document.querySelector('.header-addnew').style.color = 'black';
    document.querySelector('.header-contact').style.color = 'blue';
  });
};

export default toggleWindow;
