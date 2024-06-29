// document.addEventListener('DOMContentLoaded', function() {
//     const menuItems = document.querySelectorAll('.vertical-menu a');
//     const contentContainer = document.querySelector('.content');

//     menuItems.forEach(item => {
//         item.addEventListener('click', function(event) {
//             event.preventDefault();
            
//             // Thay đổi lớp active
//             menuItems.forEach(link => link.classList.remove('active'));
//             this.classList.add('active');
            
//             // Tải nội dung từ trang được liên kết
//             const pageUrl = this.getAttribute('href');
//             loadContent(pageUrl);
//         });
//     });

//     function loadContent(url) {
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text();
//             })
//             .then(html => {
//                 contentContainer.innerHTML = html;
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//     }
// });
