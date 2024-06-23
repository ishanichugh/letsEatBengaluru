document.addEventListener('DOMContentLoaded', function () {
    // Pagination functionality
    const reviews = document.querySelectorAll('.review-card');
    const reviewsPerPage = 24;
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * reviewsPerPage;
        const end = start + reviewsPerPage;
        reviews.forEach((review, index) => {
            review.style.display = (index >= start && index < end) ? 'block' : 'none';
        });
    }

    document.querySelector('.pagination .next').addEventListener('click', function () {
        if (currentPage * reviewsPerPage < reviews.length) {
            currentPage++;
            showPage(currentPage);
        }
    });

    document.querySelector('.pagination .prev').addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});
