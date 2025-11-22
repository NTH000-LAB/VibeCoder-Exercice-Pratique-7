const button = document.getElementById("generate-btn");
const img = document.getElementById("random-img");
const message = document.getElementById("message");

button.addEventListener("click", async () => {
  message.textContent = "Chargement de l'image...";
  message.style.color = "#c5c6c7";

  try {
    // Generate a random number to force refresh
    const randomCacheBreaker = Math.floor(Math.random() * 10000);

    img.src = `https://picsum.photos/600/400?random=${randomCacheBreaker}`;

    message.textContent = "Nouvelle image générée ! 🎉";
    message.style.color = "#66fcf1";

  } catch (error) {
    console.error(error);
    message.textContent = "Erreur lors du chargement de l'image.";
    message.style.color = "#ff6b6b";
  }
});
