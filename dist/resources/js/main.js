//adds style to navbar after nav at a certain position on screen
function navStyleOnScroll(){
    //targets HTML element
    const navbar = document.querySelector('#main-navbar');
    const toTopBtn = document.querySelector('#to-top');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            //adds background & shadow
            navbar.classList.add('navbar-clear-bg');
            toTopBtn.classList.add('show');
            //navbar.classList.add('shadow');
        }else{
            //removes background & shadow
            navbar.classList.remove('navbar-clear-bg');
            toTopBtn.classList.remove('show');
            //navbar.classList.remove('shadow');
        }
    });
}

function dropStats(){
    //gets all counter elements
    const counters = document.querySelectorAll('.counter');

    //loops through all counter elements
    counters.forEach((counter) => {
        counter.innerText = 0;

        //gets data-target value and dynamically increases until it matches target value
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const counterVal = +counter.innerText;

            const increment = target / 200;

            if(counterVal < target){
                counter.innerText = Math.ceil(counterVal + increment);
                setTimeout(updateCounter, 1);
            }else{
                counter.innerText = target;
            }
        };

        updateCounter();

    });
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



//runs function after the page has loaded
document.addEventListener('DOMContentLoaded', navStyleOnScroll);
document.addEventListener('DOMContentLoaded', dropStats);

//Event Listeners
document.querySelector('#to-top').addEventListener('click', scrollToTop);