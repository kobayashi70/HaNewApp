function displayRandomImage() {
  const image = document.getElementById("image");
  const randomButton = document.getElementById("random-button");
  const randomText = document.getElementById("random-text");

  const images = [
    "image/yuzuranai1.jpg",
    "image/yuzuranai2.jpg",
    "image/yuzuranai3.jpg",
    "image/yuzuru1.jpg",
    "image/yuzuru2.jpg",
    "image/yuzuru3.jpg",
  ];

  randomButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);

    const imagePath = images[randomIndex];
    image.src = imagePath;

    if (imagePath.includes("yuzuranai")) {
      randomText.textContent = "譲らない！！";
      randomText.style.backgroundColor = "#c23410";
    } else {
      randomText.textContent = "譲る！";
      randomText.style.backgroundColor = "#00FF00";
    }
  });
}

displayRandomImage();
