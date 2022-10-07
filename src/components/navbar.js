const toggle = document.getElementById('toggle');
const links = document.getElementById('links');
const activarMenu = () => {
    toggle.classList.toggle('rotate');
    links.classList.toggle('active');
}

toggle.addEventListener('click', () => {
    activarMenu();
});

links.addEventListener('click', () => {
    activarMenu();
})
