document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btnsize1');
    const addToCartButton = document.getElementById('add-to-cart');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    let selectedSize = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Loại bỏ class 'selected' khỏi tất cả các nút
            buttons.forEach(btn => btn.classList.remove('selected'));

            // Thêm class 'selected' cho nút được nhấp vào
            button.classList.add('selected');

            selectedSize = button.getAttribute('data-size');
        });
    });

    addToCartButton.addEventListener('click', function () {
        if (!selectedSize) {
            alert('Vui lòng chọn size!');
        } else {
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        }
    });

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi submit mặc định
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
        else {
            alert('Vui lòng nhập từ khóa tìm kiếm!');
        }
    });
});



// search

document.addEventListener('DOMContentLoaded', function () {
    const box1 = document.querySelector('.box1');
    
    box1.addEventListener('click', function () {
        window.location.href = 'detail.html';
    });
});