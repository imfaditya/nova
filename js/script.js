// Hamburger Menu
const menuToggleInput = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const menuToggleSlide = document.querySelector ('.menu-toggle');

menuToggleInput.addEventListener('click', function(){
    nav.classList.toggle('slide');
    menuToggleSlide.classList.toggle('slide');
})

// Smooth Scroll
const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}