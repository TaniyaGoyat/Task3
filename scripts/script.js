const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the active class to show/hide the navbar
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".home-content").classList.add("show");
});


