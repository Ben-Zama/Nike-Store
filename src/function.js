var hamburger = document.getElementById('hamburger');
var sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger');
    sidebar.classList.toggle('-left-full');
    sidebar.classList.toggle('left-0');
    sidebar.style.transition = '.3s'; 
})

var dark = document.getElementById('dark');
var background = document.getElementById('main');
var icons = document.getElementById('icons');
var title = document.getElementById('title');
var nav = document.getElementById('nav');
var trans = document.getElementById('trans');

dark.addEventListener('click', () => {
    background.classList.toggle('dark-main');
    icons.classList.toggle('text-white');
    icons.classList.toggle('text-black');
    hamburger.classList.toggle('hamburger-dark');
    sidebar.classList.toggle('bg-zinc-700');
    sidebar.classList.toggle('bg-gray-200');
    title.classList.toggle('text-white');
    title.classList.toggle('text-black');
    nav.classList.toggle('text-white');
    nav.classList.toggle('text-black');
    trans.classList.toggle('text-gray-200');
    trans.classList.toggle('opacity-25');
    trans.classList.toggle('opacity-75');
})