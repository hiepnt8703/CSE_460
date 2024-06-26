// js/main.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btnsize1');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Loại bỏ class 'selected' khỏi tất cả các nút
            buttons.forEach(btn => btn.classList.remove('selected'));

            // Thêm class 'selected' cho nút được nhấp vào
            button.classList.add('selected');
        });
    });
});
