const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// const messages = require('./messages');

// Массив
let messages = [
  {
    title: "SpaceX",
   author: "Ilon Mask",
   createdAt: "date",
   linkInfo: "https://ru.wikipedia.org/wiki/SpaceX",
   status: "true",
   },
   {
    title: "Mom, model",
   author: "Maye Musk",
   createdAt: "date",
   linkInfo: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D0%BA,_%D0%9C%D1%8D%D0%B9",
   status: "true",
   },
   {
    title: "Tesla",
   author: "Ilon Mask",
   createdAt: "date",
   linkInfo: "https://ru.wikipedia.org/wiki/Tesla",
   status: "true",
   },
   {
    title: "Apple",
   author: "Stephen Wozniak",
   createdAt: "date",
   linkInfo: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%BD%D1%8F%D0%BA,_%D0%A1%D1%82%D0%B8%D0%B2",
   status: "true",
   },
   {
    title: "Prodigy R.I.P.",
   author: "Keith Charles Flint",
   createdAt: "date",
   linkInfo: "https://ru.wikipedia.org/wiki/%D0%A4%D0%BB%D0%B8%D0%BD%D1%82,_%D0%9A%D0%B8%D1%82",
   status: "true",
   },

  ];
// Модальное окно
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// 
document.addEventListener('DOMContentLoaded', () => {

  console.log('window loaded');

  const cont = document.getElementsByClassName('modal-body')[0];


  // console.log('messagesList', messagesList);

  const list = document.createElement('ul');

  console.log('list', list);

  for (i = 0; i <= messages.length - 1; i++) {
    var li = document.createElement('li');     // create li element.
    console.log('i', i);
    console.log('meessages', messages[i])
    li.innerHTML =` <div class="text-block">
                      <p class="item-text">${messages[i].title}</p>
                      <p class="item-text">${messages[i].author}</p>
                      <p class="item-text">${messages[i].linkInfo}</p>
                      <p class="item-text">${messages[i].createdAt}</p>
                      
                      </div>`      // assigning text to li using array value.
    li.setAttribute('class', 'item-element');    // remove the bullets.

    list.appendChild(li);     // append li to ul.
}

  // list.append(messagesList);

  // document.appendChild(list);
  cont.appendChild(list);
})

// title: "SpaceX",
//    : "Ilon Mask",
//    createdAt: "date",
//    linkInfo: "https://ru.wikipedia.org/wiki/SpaceX",
//    status: