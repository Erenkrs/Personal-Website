window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var scrollPosition = window.scrollY;
    var threshold = 50;

    if (scrollPosition > threshold) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
