// scripts/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('nav');

    // Change background color of menu on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menu.style.backgroundColor = '#5d4037'; // Dark brown
        } else {
            menu.style.backgroundColor = '#8d6e63'; // Light brown
        }
    });

    // Change font color of menu items on hover
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = '#fff'; // White
        });

        item.addEventListener('mouseleave', () => {
            item.style.color = '#ffeb3b'; // Yellow
        });
    });

});
