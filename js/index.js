const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
// Массив
let messages = [{
    title: "SpaceX",
    author: "Ilon Mask",
    createdAt: "date",
    linkInfo: "https://ru.wikipedia.org/wiki/SpaceX",
    status: true,
  },
  {
    title: "Mom, model",
    author: "Maye Musk",
    createdAt: "date",
    linkInfo: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D0%BA,_%D0%9C%D1%8D%D0%B9",
    status: false,
  },
  {
    title: "Tesla",
    author: "Ilon Mask",
    createdAt: "date",
    linkInfo: "https://ru.wikipedia.org/wiki/Tesla",
    status: true,
  },
  {
    title: "Apple",
    author: "Stephen Wozniak",
    createdAt: "date",
    linkInfo: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%BD%D1%8F%D0%BA,_%D0%A1%D1%82%D0%B8%D0%B2",
    status: false,
  },
  {
    title: "Prodigy R.I.P.",
    author: "Keith Charles Flint",
    createdAt: "date",
    linkInfo: "https://ru.wikipedia.org/wiki/%D0%A4%D0%BB%D0%B8%D0%BD%D1%82,_%D0%9A%D0%B8%D1%82",
    status: true,
  },
];

// Модальное окно

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// Уведомление

function makeNotifications() {
  const $notifications = document.querySelector(".notifications");
  let readedCounter = 0;
  for (const msg of messages) {
    if (!msg.status) {
      readedCounter++;
    }
  }

  $notifications.innerText = `${readedCounter}`;
}

//формируем список 

document.addEventListener("DOMContentLoaded", () => {
  const $cont = document.getElementsByClassName("modal-body")[0];
  const $list = document.createElement("ul");

  for (let message of messages) {
    let li = document.createElement("li");
    li.innerHTML = ` <div class="text-block">
                      <p class="item-text">${message.title}</p>
                      <p class="item-text">${message.author}</p>
                      <a class="item-text" href="">${message.linkInfo}</a>
                      <p class="item-text">${message.createdAt}</p>
                      </div>`;
    li.setAttribute("class", "item-element");

    $list.appendChild(li);
  }

  $cont.appendChild($list);
});

makeNotifications();