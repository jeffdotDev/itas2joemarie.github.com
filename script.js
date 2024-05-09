let iconMenu = document.querySelector('#menIcon');
let navBar = document.querySelector('.nava-bar');

iconMenu.onclick = () => {
    iconMenu.classList.toggle('bx-x');
    navBar.classList.toggle('active');

};



