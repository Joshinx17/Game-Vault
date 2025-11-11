const container = document.getElementById("gameContainer");

games.forEach(game => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${game.img}" alt="${game.name}">
    <div class="card-content">
      <h3>${game.name}</h3>
      <p>${game.desc}</p>
      <div class="card-buttons">
        <button class="play-btn">Play Now</button>
        <button class="read-btn">Read More</button>
      </div>
    </div>
  `;

  card.querySelector(".play-btn").addEventListener("click", () => {
    window.open(game.link, "_blank");
  });

  card.querySelector(".read-btn").addEventListener("click", () => {
    window.location.href = `game.html?name=${encodeURIComponent(game.name)}`;
  });

  container.appendChild(card);
});
