document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.vertical-menu a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            menuItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
