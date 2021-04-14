let pageSlider = new Swiper('.page', {
    // Свои классы
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    
    // Вертикальный слайдер
    direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: 'auto',

    // Включение параллакса
    parallax: true,

    // Управдение клавиатурой
    keyboard: {
        // Включить/выключить
        enabled: true,
        // Включить/выключить 
        // только когда слайдер 
        // в пределах видимости
        onlyInViewport: true,
        // Включить/выключить 
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },
    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объектана котором 
        // будет срабатывать прокрутка мышью.
        // eventsTarget: ".image-slider"
    },

    // Отключение функцирнала
    // Если слайдов больше чем нужно
    watchOverflow: true,
    
    // Скорость
    speed: 800,

    // Обновить слайдер
    // при изменении элементов слайдера
    observer: true,

    // Обновить слайдер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить слайдер
    // при изменении дочерних 
    // элементов слайда
    observeSlideChildren: true,

    // Навигация
    // буллеты, текущее положение, прогрессбар
    pagination: {
        el: ".page__pagination",
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
    },
    // Скролл
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        // возможность перетаскивать скролл
        draggable: true,
    },
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let i = 0; i < menuLinks.length; i++) {
            const menuLink = menuLinks[i];
            menuLink.addEventListener('click', function (e) {
                menuSliderRemuve();
                pageSlider.slideTo(i, 800);
                menuLink.classList.add('_active');
                e.preventDefault()
            });
        }
    }
}

function menuSliderRemuve(params) {
    let menuLinkActive = document.querySelector('.menu__link._active');

    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}