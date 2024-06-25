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
