let wrapper = document.querySelector('.wrapper')

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

    // Отключение автоматизации
    init: false,

    // События 
    on: {
        // СОбытия инициализации
        init: function() {
            menuSlider();
            setScrollType();
            wrapper.classList.add('_loaded')
        },
        // Событие смены слайда
        slideChange: function() {
            menuSliderRemuve();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
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

function setScrollType() {
    if (wrapper.classList.contains) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
    }

    for (let i = 0; i < pageSlider.slides.length; i++) {
        const pageSlide = pageSlider.slides[i];
        const pageSlideContent = pageSlide.querySelector('.screen__content');

        if(pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if (pageSlideContentHeight > window.innerHeight) {
                wrapper.classList.add('._free');
                pageSlider.params.freeMode = true;
                break;
            }
        }
    }
}

pageSlider.init();