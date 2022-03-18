const images = ['0.jpeg', '1.jpeg', '2.jpeg']

const randomIndex = Math.floor(images.length * Math.random());
const randomImage = images[randomIndex];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${randomImage}`;

document.body.appendChild(backgroundImage);