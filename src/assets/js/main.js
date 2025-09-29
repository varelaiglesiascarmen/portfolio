// navbar
function toggleMenu() {
  const menu = document.querySelector('.navbar-menu');
  const navbar = document.querySelector('.navbar');
  
  menu.classList.toggle('active');
  navbar.classList.toggle('menu-open'); 
}

// Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });

  // Footer
  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});

// show info "Who i am?" "What i do?" "What did i study?"
function showInfo(section) {
  const infoContainer = document.getElementById('infoContainer');
  let content = '';

  // interactive div
  switch (section) {
    case 'aboutMe':
      content = '<h2>LOREM ME</h2>';
      break;
    case 'projects':
      content = '<h2>LOREM Projects</h2>';
      break;
    case 'studies':
      content = '<h2>LOREM Studies</h2>';
      break;
    default:
      content = '<p>Sección no encontrada.</p>';
  }

  infoContainer.innerHTML = content;
}