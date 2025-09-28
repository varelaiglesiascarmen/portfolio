// navbar
function toggleMenu() {
  const menu = document.querySelector('.navbar-menu');
  const navbar = document.querySelector('.navbar');
  
  menu.classList.toggle('active');
  navbar.classList.toggle('menu-open'); // Añade o quita la clase al navbar
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

  // Define el contenido según la sección
  switch (section) {
    case 'aboutMe':
      content = '<h2>About Me</h2><p>Información sobre quién eres...</p>';
      break;
    case 'projects':
      content = '<h2>Projects</h2><p>Información sobre tus proyectos...</p>';
      break;
    case 'studies':
      content = '<h2>Studies</h2><p>Información sobre tus estudios...</p>';
      break;
    default:
      content = '<p>Sección no encontrada.</p>';
  }

  // Actualiza el contenido del contenedor
  infoContainer.innerHTML = content;
}