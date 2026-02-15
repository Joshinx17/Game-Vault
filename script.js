const container = document.getElementById("gameContainer");
const gamesTab = document.getElementById("gamesTab");
const funTab = document.getElementById("funTab");

function renderCards(dataArray) {
  container.innerHTML = ""; // Clear previous cards

  dataArray.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="card-buttons">
          <button class="play-btn">Visit</button>
          <button class="read-btn">Read More</button>
        </div>
      </div>
    `;

    card.querySelector(".play-btn").addEventListener("click", () => {
      window.open(item.link, "_blank");
    });

    card.querySelector(".read-btn").addEventListener("click", () => {
      window.location.href = `game.html?name=${encodeURIComponent(item.name)}`;
    });

    container.appendChild(card);
  });
}

// Default load
renderCards(games);

// Toggle behavior
gamesTab.addEventListener("click", () => {
  gamesTab.classList.add("active");
  funTab.classList.remove("active");
  renderCards(games);
});

funTab.addEventListener("click", () => {
  funTab.classList.add("active");
  gamesTab.classList.remove("active");
  renderCards(funSites);
});
