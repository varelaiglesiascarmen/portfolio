const button = document.querySelector('.info-button');
const panel = document.getElementById('aboutMe');
const closeBtn = panel.querySelector('.close-panel');

button.addEventListener('click', () => {
  panel.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  panel.classList.remove('active');
});
