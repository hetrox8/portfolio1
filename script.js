const hamburgerBtn = document.querySelector('.hamburgerBtn');
const menu = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.x-icon');
const menuOptions = menu.getElementsByTagName('li');
hamburgerBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
  menu.classList.toggle('visible');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('visible');
  menu.classList.toggle('hidden');
});

for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', () => {
    menu.classList.remove('visible');
    menu.classList.toggle('hidden');
  });
}

// validation contact form
const form = document.getElementById('first-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('.email_input').value;
  const suggestedEmail = document.querySelector('.email_input').value.toLowerCase();

  if (email === suggestedEmail) {
    form.submit();
  } else {
    const errorMessage = document.querySelector('.error');
    errorMessage.textContent = `invalid input, kindly enter your email in lowercase, e.g. ${suggestedEmail}`;
    errorMessage.style.display = 'block';
  }

  const myStorage = {
    name: document.getElementById('first_name').value,
    email: document.querySelector('.email_input').value,
    message: document.getElementById('message').value,
  };

  if (email === suggestedEmail) {
    localStorage.setItem('myStorage', JSON.stringify(myStorage));
    form.submit();
  } else {
    const errorMessage = document.querySelector('.error');
    errorMessage.textContent = `Your form is not sent, please enter your email in lowercase, e.g. ${suggestedEmail}`;
    errorMessage.style.display = 'block';
  }
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  const storageObject = JSON.parse(localStorage.getItem('myStorage'));
  if (storageObject) {
    document.getElementById('fname').value = storageObject.name;
    document.querySelector('.email-input').value = storageObject.email;
    document.getElementById('message').value = storageObject.message;
  }
});



