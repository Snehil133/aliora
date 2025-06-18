// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        // Initialize menu state
        let menuActive = false;

        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent click from closing menu
            menuActive = !menuActive;
            menuToggle.classList.toggle('active', menuActive);
            navLinks.classList.toggle('active', menuActive);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuActive = false;
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});
