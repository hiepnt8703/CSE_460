const buttons = document.querySelectorAll('.btnsize1');

        // Thêm sự kiện click cho mỗi nút
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Loại bỏ class 'selected' khỏi tất cả các nút
                buttons.forEach(btn => btn.classList.remove('selected'));

                // Thêm class 'selected' cho nút được nhấp vào
                button.classList.add('selected');
            });
        });