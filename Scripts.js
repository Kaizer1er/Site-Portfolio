var typed  = new Typed('#text', {
    strings:['Développeur SIG.', 'Cartographe.', 'Analyste spatiale.'],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});

// AFFICHAGE DES COMPETENCES 
let compétencesBtn = document.querySelector('.compétences_btn');
let compétencesDet = document.querySelector('.about_bottom');

compétencesBtn.addEventListener('click', () =>{
    compétencesDet.classList.toggle('show_compétences');
});

// STICKY NAV
let nav = document.querySelector('nav');
window.addEventListener('scroll', () =>{
    if(window.scrollY > 100){
        nav.classList.add('sticky_nav');
    }
    else{
        nav.classList.remove('sticky_nav');
    }
});

// FILTERS
var mixer = mixitup('.realisation_images');

// EXPERIENCES SWIPER SLIDE
var swiper = new Swiper('.testSwiper', {
    slidesPerview:3,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerview:2,
            spaceBetween:10,
        },
        900:{
            slidesPerview:2,
            spaceBetween:10,
        },
        500:{
            slidesPerview:2,
            spaceBetween:10,
        },
    },
});

// SHOW NAV (Afficher la navigation)
let bar = document.querySelector('bars');
let menu = document.querySelector('menu');

bar.addEventListener('click', () =>{
    menu.classList.toggle('show_nav');
});
