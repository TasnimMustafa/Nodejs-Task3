const navbar = document.querySelector('.Hnav');
const navLink = document.querySelectorAll('.nav-link');
const navbarBrand = document.querySelector('.nav-branding');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        navbarBrand.classList.add('brand-active');
        navLink.forEach(el=>{el.classList.add('link-active')});
    } else {
        navbar.classList.remove('nav-active');
        navbarBrand.classList.remove('brand-active');
        navLink.forEach(el=>{el.classList.remove('link-active')});
    }
};


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))