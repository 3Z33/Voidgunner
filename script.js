
let loginSlider = document.querySelector('#navbar-login');
let loginBt = document.querySelector('nav > ul > li:last-child');
let registration = document.getElementById('registration');
let registrationField = document.getElementById('registrationField');
let cancel1 = document.getElementById('cancel1');
let playBt = document.getElementById('playBt');
let loginBt2 = document.getElementById('connectionRequired');

if(loginBt){
    loginBt.addEventListener('mouseover', () => {
        loginSlider.classList.add('active');
        loginSlider.addEventListener('mouseover', () => {
            loginSlider.classList.add('active');
        })
    });
}

if(loginBt){
    loginBt.addEventListener('mouseleave', () => {
        loginSlider.classList.remove('active');
        loginSlider.addEventListener('mouseleave', () => {
            loginSlider.classList.remove('active');
        })
    });
}

if(registration){
    registration.addEventListener('click', () => {
        registrationField.style.display = 'flex';
    });
}
/*
cancel1.addEventListener('click', () => {
    registrationField.style.display = 'none';   // ??????????????????????????????????????????????
});
*/
// open game window
if(playBt) {
    playBt.addEventListener('click', () => {
        window.open('../app/play.html', '_blank');
    
    });
}

// send user to login panel
if(loginBt2){
    loginBt2.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        setTimeout(() => {
            loginSlider.classList.add('active');
            document.getElementById('login-userName').focus();
        }, 700);
    });
}

if(loginBt){
    document.addEventListener('click', (event) => {
        if (!loginSlider.contains(event.target) && !loginBt.contains(event.target)) {
            loginSlider.classList.remove('active');
        }
    });
}


// ------------- Hangar

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${currentIndex * 324}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarouselPosition();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarouselPosition();
});

