const linksContainer = document.querySelector(".links");
const toggleNav = document.querySelector(".hamburger");

toggleNav.addEventListener('click', function () {
  linksContainer.classList.toggle("active")
})