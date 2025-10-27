// llamada a componentes
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
async function showInfo(section) {
  const infoContainer = document.getElementById('infoContainer');
  let file = '';

  switch (section) {
    case 'aboutMe':
      file = 'C:\Users\carva\Desktop\portfolio\src\components\aboutMe.html'; 
      break;
    case 'projects':
      file = '../../components/projects.html';
      break;
    case 'studies':
      file = '../../components/studies.html';
      break;
    default:
      infoContainer.innerHTML = '<p>Sección no encontrada.</p>';
      return;
  }

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error('Error al cargar ' + file);

    const html = await response.text();
    infoContainer.innerHTML = html;
    infoContainer.scrollIntoView({ behavior: 'smooth' });
  } catch (error) {
    console.error(error);
    infoContainer.innerHTML = '<p>No se pudo cargar el contenido.</p>';
  }
}
