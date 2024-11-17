//   NAVABAR

// Resaltado De La PaginaActiva
const navLinks = document.querySelectorAll("#main-nav a");

  // verificar si el href de la navbar es isgual a la pagina actual
  // Aplicar la clase ".active" al enlace
navLinks.forEach((link) => {
  if (link.href === window.location.href) link.classList.add("active");
});

// Menu para versión movil
  // verficar si la lista del menu desplegable esta visible
  // ocultar lista de enlaces del menu
  // mostramos la lista
const navbarIcon = document.querySelector("#navbar-toggle");
const navbarConatiner = document.querySelector("#main-nav");
navbarIcon.addEventListener("click", () => {

  if (navbarConatiner.style.display === "block")  navbarConatiner.style.display = "none";
  else navbarConatiner.style.display = "block";
});

// Ventana Modal
// Mostrar la ventana modal
const loginLink = document.querySelector("#login-register");
const modalContainer = document.querySelector("#modal-container");

loginLink.addEventListener("click", () => modalContainer.style.display = "block");

// Cerrar ventana modal
 // si el click fuera, se cierra la ventana
modalContainer.addEventListener("click", (e) => {
  e.preventDefault(); 
  if (e.target === modalContainer) modalContainer.style.display = "none";
  
});

// Establecer año actual
const currentYear = document.querySelector("#date");
currentYear.innerHTML = new Date().getFullYear();
