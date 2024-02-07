//adds style to navbar after nav at a certain position on screen
function navStyleOnScroll(){
    //targets HTML element
    const navbar = document.querySelector('#main-navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            //adds background & shadow
            navbar.classList.add('navbar-clear-bg');
            //navbar.classList.add('shadow');
        }else{
            //removes background & shadow
            navbar.classList.remove('navbar-clear-bg');
            //navbar.classList.remove('shadow');
        }
    });
}

//runs function after the page has loaded
document.addEventListener('DOMContentLoaded', navStyleOnScroll);