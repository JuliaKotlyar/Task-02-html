setInterval(updateDateTime, 1000);
function updateDateTime() {
  const dateTime = document.querySelector('.date-time');
  dateTime.innerText = new Date().toLocaleString();
}

function openNav() {
  documen.getElementByClassName('.menu').style.width = '100%';
}
function closeNav() {
  document.getElementsByClassName('.menu').style.width = '0';
}
