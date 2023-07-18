document.addEventListener('DOMContentLoaded', function () {
    var backToTopBtn = document.querySelector('#footer-link-back-to-top');

    // Smooth scroll to top when the button is clicked
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
