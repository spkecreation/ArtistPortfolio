document.addEventListener('DOMContentLoaded', function () {
    var popupIcon = document.querySelector('.popup');
    var popupMenu = document.querySelector('.popupmenu');

    // Open or close popup menu when clicking the icon
    popupIcon.addEventListener('click', function () {
        popupMenu.classList.toggle('show');
    });

    // Close popup menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!popupMenu.contains(event.target) && !popupIcon.contains(event.target)) {
            // Clicked outside of the popup menu and icon, so close the menu
            popupMenu.classList.remove('show');
        }
    });
});
