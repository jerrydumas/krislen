// const nav = document.querySelector('.nav');
// window.addEventListener('scroll', fixNav);

// function fixNav() {
//     if (window.scrollY > nav.offsetHeight + 150) {
//         nav.classList.add('contract');
//     } else {
//         nav.classList.remove('contract');
//     }
// }
const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    window.scrollY > nav.offsetHeight + 150 ? nav.classList.add('navChange') : nav.classList.remove('navChange');
}

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
})
const closeNav = document.querySelector('.closeNav')
closeNav.addEventListener('click', () => {
    sidebar.classList.toggle('open')

})