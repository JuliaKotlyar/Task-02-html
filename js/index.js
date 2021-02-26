setInterval(updateDateTime, 1000);
function updateDateTime() {
  const dateTime = document.querySelector('.date-time');
  dateTime.innerText = new Date().toLocaleString();
}

// carousel

const images = [
  'img/children-fit.jpg',
  'img/fitness-seniors.jpg',
  'img/man-fitness.jpg',
  'img/pilates-yoga.jpg',
  'img/pregnant-fitness.jpg',
];

let currIdx = 0;

function showCurrentImage() {
  const imgContainer = document.querySelector('.classes-image');
  imgContainer.src = images[currIdx];
}

showCurrentImage();

function nextImage() {
  currIdx++;
  if (currIdx >= images.length) currIdx = 0;
  showCurrentImage();
}

function prevImage() {
  currIdx--;
  if (currIdx < 0) currIdx = images.length - 1;
  showCurrentImage();
}

document.querySelector('.btn-prev').addEventListener('click', prevImage);
document.querySelector('.btn-next').addEventListener('click', nextImage);
