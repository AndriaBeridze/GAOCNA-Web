document.addEventListener('DOMContentLoaded', () => {
    // Select the navigation toggle button, its icon, and the navigation menu
    const navToggleButton = document.querySelector('#navbar-toggler');
    const navToggleIcon = document.querySelector('#navbar-toggler i');
    const navMenu = document.querySelector('#navbar-menu');

    // Toggle the menu visibility and icon state on button click
    navToggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('slide');
        navToggleIcon.classList.toggle('bi-x');
        navToggleIcon.classList.toggle('bi-list');
    });

    // Select all dropdown items and add click event listeners
    const dropdownItems = document.querySelectorAll('.dropdown');
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.querySelector('a').addEventListener('click', () => {
            if (window.innerWidth < 992) { // Check if the viewport width is less than 992px
                // Collapse all dropdowns and toggle the clicked one
                dropdownItems.forEach(item => {
                    if (item != dropdownItem) {
                        item.classList.remove('unfold');
                    }
                });
                dropdownItem.classList.toggle('unfold');
            }
        });
    });
});
