// Crée une instance de l'IntersectionObserver avec une fonction de rappel
let observer = new IntersectionObserver(function(entries, observer) {
    // La fonction de rappel est exécutée chaque fois que les éléments observés entrent ou sortent de la zone d'intersection
    entries.forEach(function(entry) {
        // Vérifie si l'élément est en train d'entrer dans la zone d'intersection
        if (entry.isIntersecting) {
            // Ajoute la classe 'fadeIn' à l'élément cible
            entry.target.classList.add('fadeIn');

            // Recherche le premier titre (balise h2 ou h3) dans l'élément cible
            const title = entry.target.querySelector('h2, h3');

            // Vérifie si un titre existe et s'il contient du texte
            if (title && title.textContent) {
                // Divise le texte du titre en mots
                const words = title.textContent.split(' ');

                // Remplace le texte du titre par une chaîne vide
                title.textContent = ' ';

                // Pour chaque mot, crée un élément span et ajoute-le au titre
                words.forEach((word) => {
                    const span = document.createElement('span');
                    span.classList.add('animation-title');
                    span.textContent = word;
                    title.appendChild(span);
                });

                // Sélectionne tous les éléments spans créés
                const spans = title.querySelectorAll('.animation-title');

                // Pour chaque span, ajoute progressivement la classe 'visibility' avec un délai différent
                spans.forEach((span, index) => {
                    const delay = (index === 0) ? 400 : index * 600;

                    setTimeout(function () {
                        span.classList.add('visibility');
                    }, delay);
                });
            }
            // Cesse d'observer l'élément cible une fois qu'il est apparu dans la zone d'intersection
            observer.unobserve(entry.target);
        }
    });
}, {
    // Définit une marge pour la zone d'intersection (haut, droite, bas, gauche)
    rootMargin: '-100px 0px -100px 0px'
});

// Sélectionne tous les éléments correspondant aux sélecteurs CSS donnés
let sections = document.querySelectorAll('#characters, .story, #place, #studio, .site-footer');

// Pour chaque section sélectionnée, observe les changements d'intersection
sections.forEach(function(section) {
    observer.observe(section);
});



document.addEventListener('DOMContentLoaded', function () {
    const navbarBurger = document.querySelector('.navbar-burger ');
    const burgerOpen = document.querySelector('.burger-open');

    navbarBurger.addEventListener('click', function () {

        const burgerLinks = burgerOpen.querySelectorAll('ul li a');

        burgerLinks.forEach((link) => {
            link.classList.add('animation-title');
        });

        setTimeout(() => {
            burgerLinks.forEach((link, index) => {
                // Le premier lien a un délai de 400ms, les suivants ont un délai de 600ms * index
                const delay = index === 0 ? 400 : index * 600;

                setTimeout(() => {
                    link.classList.add('visibility');
                }, delay);
            });
        }, 150); // Attend 150ms avant de commencer l'animation
    });
});



// parallax vidéo avec la bibliothèque simpleParallax
// L'événement DOMContentLoaded est utilisé pour s'assurer que le code est exécuté après que le DOM a été chargé
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.banner__video');

    new simpleParallax(video, {
        orientation: 'right',
        scale: 1.15,
        delay: 0.5,
        transition: 'ease-in-out'
    });
});



//SwiperJS Coverflow

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows: false,
        
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  })



// Ajout d'un écouteur d'événement qui détecte le scroll de la fenêtre.
window.addEventListener('scroll', function () {

    // Selection des éléments HTML avec les classes
    const bigCloud = document.querySelector('.big-cloud');
    const littleCloud = document.querySelector('.little-cloud');
    const placeSection = document.querySelector('#place');

    // Récupère la position verticale de l'élément avec l'id 'place' par rapport au haut de la page.
    const sectionOffsetTop = placeSection.offsetTop;
    // Obtenez la position actuelle de défilement de la fenêtre.
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Vérifie si la position verticale de défilement a atteint ou est supérieur à la position de l'élément avec l'id 'place'
    if (scrollPosition >= sectionOffsetTop) {

    // Calculez la valeur de parallaxe, qui est la différence entre la position de défilement et le haut relatif, divisée par 4.
        const parallaxValue = (scrollPosition - sectionOffsetTop) / 4;
        const translationX = Math.min(parallaxValue, 300);

        bigCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
        littleCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
    }
});


//Ouverture Menu Burger

const navbarBurger = document.querySelector('.navbar-burger');
const burgerOpen = document.querySelector('.burger-open');
const menuLinks = burgerOpen.querySelectorAll('a');

navbarBurger.addEventListener('click', () => {
    navbarBurger.classList.toggle('active');
    burgerOpen.classList.toggle('open');
});

// Ajouter un gestionnaire d'événement de clic à chaque lien du menu
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerOpen.classList.remove('open');
        navbarBurger.classList.remove('active');
    });
});