document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling;

            // Close all other dropdown menus
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });

            // Toggle current dropdown menu
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});
