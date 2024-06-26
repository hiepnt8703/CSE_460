document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");

    menuItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            menuItems.forEach(i => i.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            item.classList.add("active");
            sections[index].classList.add("active");
        });
    });

    // Hiển thị section đầu tiên khi load trang
    menuItems[0].classList.add("active");
    sections[0].classList.add("active");
});


document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var searchInput = document.getElementById("search-input").value.trim();

    if (searchInput === "") {
        alert("Vui lòng nhập từ khóa tìm kiếm");
    } else if (searchInput.toLowerCase() === "cà phê đen đá") {
        window.location.href = "search.html";
    } else {
        alert("Không tìm thấy kết quả cho từ khóa tìm kiếm này");
    }
});
