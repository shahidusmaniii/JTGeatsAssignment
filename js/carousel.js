const cardsData = [
  {
    imgSrc: "images/unsplash_MqT0asuoIcU.png",
    title: "Home made pizza",
    price: "₹190",
    rating: "3.7",
    time: "50-79 min",
  },
  {
    imgSrc: "images/unsplash_UxRhrU8fPHQ.png",
    title: "Home made pizza",
    price: "₹190",
    rating: "3.7",
    time: "50-79 min",
  },
  {
    imgSrc: "images/unsplash_CbNAuxSZTFo.png",
    title: "Home made pizza",
    price: "₹190",
    rating: "3.7",
    time: "50-79 min",
  },
  {
    imgSrc: "images/unsplash_Y6OgisiGBjM.png",
    title: "Home made pizza",
    price: "₹190",
    rating: "3.7",
    time: "50-79 min",
  },
  {
    imgSrc: "images/unsplash_nP11TkjxJ7s.png",
    title: "Home made pizza",
    price: "₹190",
    rating: "3.7",
    time: "50-79 min",
  },
];

const scroll = document.querySelector(".container");

function updateMiddleCard() {
  const cards = scroll.querySelectorAll(".block");
  cards.forEach((card) =>
    card.querySelector(".details").classList.remove("shadow")
  ); // Remove shadow from all cards

  // Calculate the correct middle index
  const containerWidth = scroll.offsetWidth; // Visible width of the container
  const cardWidth = cards[0].offsetWidth; // Width of a single card
  const visibleCards = Math.floor(containerWidth / cardWidth); // Number of visible cards
  const middleIndex = Math.floor(visibleCards / 2); // Middle index of visible cards

  // Highlight the middle card
  cards[middleIndex].querySelector(".details").classList.add("shadow");
}

function forward() {
  const cards = scroll.querySelectorAll(".block");
  scroll.append(cards[0]); // Move the first card to the end
  updateMiddleCard();
}

function reverse() {
  const cards = scroll.querySelectorAll(".block");
  scroll.prepend(cards[cards.length - 1]); // Move the last card to the start
  updateMiddleCard();
}

function renderCards() {
  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("block");

    cardElement.innerHTML = `
        <div class="details">
          <div>
            <img src="${card.imgSrc}" alt="${card.title}" class="img4" />
          </div>
          <div class="row">
            <p>${card.title}</p>
            <p>${card.price}</p>
          </div>
          <div class="row">
            <div class="rate">
              <div class="rating">
                <img src="icons/star.svg" alt="star" />
                <p>${card.rating}</p>
              </div>
              <div class="time">
                <p>${card.time}</p>
              </div>
            </div>
            <div class="plus">
              <img src="icons/plus.svg" alt="add to cart" />
            </div>
          </div>
        </div>
      `;
    scroll.appendChild(cardElement);
  });

  updateMiddleCard(); // Ensure the middle card is highlighted
}

// Initial render of cards
renderCards();
