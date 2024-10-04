const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

const data = [
  {
    "image": "./assets/aqua.png",
    "name": "chili",
    "info": "Chili is a spicy fruit commonly used in cooking."
  },
  {
    "image": "./assets/CALIPSO.png",
    "name": "grapes",
    "info": "Grapes are a type of berry, typically used in wine making."
  },
  {
    "image": "./assets/cherries.png",
    "name": "lemon",
    "info": "Lemons are citrus fruits with a sour taste."
  },
  {
    "image": "./assets/Landsat 7.png",
    "name": "orange",
    "info": "Oranges are a citrus fruit, known for being juicy and sweet."
  },
  {
    "image": "./assets/terra.png",
    "name": "pineapple",
    "info": "Pineapples are tropical fruits with a sweet and tart flavor."
  },
  {
    "image": "./assets/planet_uranus.png",
    "name": "strawberry",
    "info": "Strawberries are bright red berries, known for their sweetness."
  },
  {
    "image": "./assets/saturn.png",
    "name": "tomato",
    "info": "Tomatoes are commonly used as a vegetable, but they are a fruit."
  },
  {
    "image": "./assets/Venus.png",
    "name": "watermelon",
    "info": "Watermelons are large, refreshing fruits with a high water content."
  },
  {
    "image": "./assets/Hoag's_object.jpg",
    "name": "cherries",
    "info": "Cherries are small stone fruits, sweet or tart."
  }
];

cards = [...data, ...data];
shuffleCards();
generateCards();

// For the notification
const notification = document.querySelector(".notification");
const notificationCard = document.querySelector(".notification-card");
const cardInfoElement = document.querySelector(".card-info");
const continueButton = document.querySelector(".continue-button");

continueButton.addEventListener("click", () => {
  hideNotification();
});

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.setAttribute("data-info", card.info);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? showNotification() : unflipCards();
}

function showNotification() {
  const cardInfo = firstCard.dataset.info;
  cardInfoElement.textContent = cardInfo;

  notification.classList.remove("hidden");
  notification.classList.add("show");

  setTimeout(() => {
    notificationCard.classList.add("flipped");
  }, 300);
}

function hideNotification() {
  notificationCard.classList.remove("flipped");
  setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hidden");
    disableCards();
  }, 600);
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}
