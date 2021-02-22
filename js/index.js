setInterval(updateDateTime, 1000);
function updateDateTime() {
  const dateTime = document.querySelector('.date-time');
  dateTime.innerText = new Date().toLocaleString();
}
