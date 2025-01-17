//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#back-to-top');

    if(window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});

// Close hamburger without click hamburger
window.addEventListener('click', function(e){
    if( e.target != nav && e.target != hamburger){
        hamburger.classList.remove('hamburger-active');
        nav.classList.add('hidden');
    }
});