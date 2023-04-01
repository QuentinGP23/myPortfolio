var toggleHeight = window.outerHeight / 2;

window.addEventListener('scroll', function() {
    if (window.scrollY > toggleHeight) {
        document.querySelector('.m-backtotop').classList.add('active');
    } else {
        document.querySelector('.m-backtotop').classList.remove('active');
    }
});

document.querySelector('.m-backtotop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
});
