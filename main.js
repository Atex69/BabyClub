'use strict';
$(document).ready(function () {
    if( /Android|AppleWebKit|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById('contact').href = '#anch8'
    }else {
        document.getElementById('contact').href = '#anch7'
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    $('.mobile-menu').on('click', function (e) {
        e.preventDefault();
        $('.menu-btn').toggleClass('menu-active');
        $('.mobile-menu').toggleClass('menu-active');
        $('.mobile-menu__menu-header-wrap').toggleClass('menu-active');




    });
    $("ul").click(function(){
        $('.menu-btn').not(this).removeClass('menu-active');
        $('.mobile-menu').not(this).removeClass('menu-active');
        $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

    });
    $("button").click(function(){
        $('.menu-btn').not(this).removeClass('menu-active');
        $('.mobile-menu').not(this).removeClass('menu-active');
        $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

    });









    $('.card-head-expand').click(event => {
        const clickedElement = $(event.target);
        let content = clickedElement.parent().parent().find('.reviews-content-card-content');
        if (content.hasClass('hidden')) {
            content.removeClass('hidden');
            clickedElement.html('свернуть');
        } else {
            content.addClass('hidden');
            clickedElement.html('развернуть');
        }
    });
    initVideoGrid();
    initCardSwitcher();
    initSlider();
    initMinicardSlider();
});

let initCardSwitcher = function () {
    let content = [` <div class="exactly-babyClub-card-content ">
                        <div class="exactly-babyClub-card-content-zag animated zoomIn">
                               <h3>Уютная атмосфера</h3>
                        </div>
                        <div class="exactly-babyClub-card-content-text animated zoomIn">
             У нас красивый и яркий клуб, где дети, родители и специалисты чувствуют себя безопасно и уютно, так как наш клуб находится под постоянной охраной и оборудован новейшей системой видеонаблюдения. Для удобстве ожидания предусмотрены родительские комнаты, где можно попить чай, кофе и просто почитать.
                        </div>
                  <button  class="record-butt animated zoomIn">
                                    <a class="btn trigger" href="#">Записаться</a>
                                </button>


                    </div>
                    <div class="exactly-babyClub-card-image exactly-image1 animated zoomIn">
                    </div>`,
        `<div class="exactly-babyClub-card-content">
    <div class="exactly-babyClub-card-content-zag animated zoomIn">
        <h3>Гарантия результата </h3>
    </div>
    <div class="exactly-babyClub-card-content-text animated zoomIn">
Мы знаем точно, что мир для наших детей будет не таким, как сегодня. Быстро развиваются новые идеи, сменяются ориентиры и интересы поколений. Всё это связано со способностями мозга, которые нужно развивать с самого детства. У нашего клуба есть лицензия, так как мы прошли проверки всех инстанций.

    </div>
   <button  class="record-butt animated zoomIn">
                                    <a class="btn trigger " href="#">Записаться</a>
                                </button>
</div>
<div class="exactly-babyClub-card-image exactly-image2 animated zoomIn">
</div>`,
        `<div class="exactly-babyClub-card-content">
    <div class="exactly-babyClub-card-content-zag animated zoomIn">
        <h3>Безопасное пространство </h3>
    </div>
    <div class="exactly-babyClub-card-content-text animated zoomIn">
Мы сделали большой упор на ремонт и гипоаллергенные экологически безопасные материалы. Специальная мебель без острых углов, сертифицированные игрушки. Особое внимание уделяется профилактическим мерам: регулярно проветриваются помещения, воздуху дезинфицируя с помощью бактерицидного рециркулятора, проводятся кварцивание в соответствие с санпин. В нашем штате есть собственный врач-медиатор с 30-летним опытом работы.

    </div>
    <button  class="record-butt animated zoomIn">
                                    <a class="btn trigger" href="#">Записаться</a>
                                </button>
</div>
<div class="exactly-babyClub-card-image exactly-image3 animated zoomIn">
</div>`,
        ` <div class="exactly-babyClub-card-content ">
                        <div class="exactly-babyClub-card-content-zag animated zoomIn">
                               <h3>Маленькие группы </h3>
                        </div>
                        <div class="exactly-babyClub-card-content-text animated zoomIn">
Благодаря запатентованным методикам, маленьким группам и талантливым педагогам в Бэби-кремль мы развиваем любопытство и любовь к новым знаниям. Наши дети умеют свободно мыслить, интересны в общении и всегда чувствуют себя уверенно.
                        </div>
                  <button  class="record-butt animated zoomIn">
                                    <a class="btn trigger" href="#">Записаться</a>
                                </button>


                    </div>
                    <div class="exactly-babyClub-card-image exactly-image4 animated zoomIn">
                    </div>`,
        `<div class="exactly-babyClub-card-content">
    <div class="exactly-babyClub-card-content-zag animated zoomIn">
        <h3>Качественные пособия </h3>
    </div>
    <div class="exactly-babyClub-card-content-text animated zoomIn">
На всех наших курсах дети узнают много нового и без качественных пособий им это было бы очень скучно делать. Поэтому мы сделали особый упор на выбор материалов. часть была заказана в Америке и Голландии, часть в России.
С помощью них наши любознательные дети освоят счет, запомнят геометрические тела и фигуры, цвета, научатся решать логические задачи, научатся вычитать, складывать и умножать. Познакомятся с буквами и звуками, научатся читать. Все наши пособия яркие, красочные и привлекательные для детского восприятия.    
    </div>
   <button  class="record-butt animated zoomIn">
                                    <a class="btn trigger " href="#">Записаться</a>
                                </button>
</div>
<div class="exactly-babyClub-card-image exactly-image5 animated zoomIn">
</div>`,
        `<div class="exactly-babyClub-card-content">
    <div class="exactly-babyClub-card-content-zag animated zoomIn">
        <h3>Лучшие мировые методики  </h3>
    </div>
    <div class="exactly-babyClub-card-content-text animated zoomIn">
Нами освоены на практике лучшие методики по раннему развитию детей: Н. Зайцева, М. Монтессори, З. Дьенеша, А. Валявского, Е. Косиновой, Е. Железновой. Мы взяли из них именно то, что в большей степени способствует интеллектуальному развитию малышей, и совместили с разработками наших специалистов. Для каждого возраста мы предлагаем определенный курс, учитывающий психологические и физиологические особенности малышей.    </div>
    <button  class="record-butt animated zoomIn">
                                    <a class="btn trigger" href="#">Записаться</a>
                                </button>
</div>
<div class="exactly-babyClub-card-image exactly-image6 animated zoomIn">
</div>`,
        `<div class="exactly-babyClub-card-content">
    <div class="exactly-babyClub-card-content-zag animated zoomIn">
        <h3>Опытные педагоги  </h3>
    </div>
    <div class="exactly-babyClub-card-content-text animated zoomIn">
У нас работают только по призванию. Мы берём в команду профессионалов, которые получают удовольствие от того, чем заняты.
Все педагоги имеют педагогическое образование и проходят серьезный конкурсный отбор (по статистике из 50 кандидатов только 1 доходит до обучения). Затем они обучаются ведению занятий по методу Бэби-клуба и проходят психологический курс по методу Виктора Толкачева «Понимание индивидуальных особенностей детей с учетом их психологических и физиологических особенностей». Так же ежемесячно проходят тренинги топовых спикеров, и регулярное обучение на mbi. </div>
    <button  class="record-butt animated zoomIn">
                                    <a class="btn trigger" href="#">Записаться</a>
                                </button>
</div>
<div class="exactly-babyClub-card-image exactly-image7 animated zoomIn">
</div>`,
        `<div class="exactly-babyClub-card-content">
    <div class="exactly-babyClub-card-content-zag animated zoomIn">
        <h3>Исторический центр уфы </h3>
    </div>
    <div class="exactly-babyClub-card-content-text animated zoomIn">
Мы находимся в самом сердце столицы. К нам без проблем можно добраться с любой точки города.  </div>
    <button  class="record-butt animated zoomIn">
                                    <a class="btn trigger" href="#">Записаться</a>
                                </button>
</div>
<div class="exactly-babyClub-card-image exactly-image8 animated zoomIn">
</div>`];


    let updateFiller = () => {
        digits.html(cards[0].text)
    };

    $('.exactly-babyClub-footer-button-left').click(function () {
        if (currentSlide === 1) {
            currentSlide = 9;
        }
            iconClick(currentSlide - 1);
    });
    $('.exactly-babyClub-footer-button-right').click(function () {
        if (currentSlide === 8) {
            currentSlide = 0;
        }
            iconClick(currentSlide + 1);

    });



    let initSwipe = () => {
        $('.exactly-babyClub-card-content-zag , .exactly-babyClub-card-content-text').swipe({
            swipeLeft: () => {
                if (currentSlide === 8) {
                    currentSlide = 0;
                }
                iconClick(currentSlide + 1);
            },
            swipeRight: () => {
                if (currentSlide === 1) {
                    currentSlide = 9;
                }
                iconClick(currentSlide - 1);
            },
            threshold: 0
        });
    };
    updateFiller


    let currentSlide = 1;

    let iconClick = (position) => {
        currentSlide = position;
        $(".icon1-active").fadeIn(500);
        $(".icon2-active").fadeIn(500);
        $(".icon3-active").fadeIn(500);
        $(".icon4-active").fadeIn(500);
        $(".icon5-active").fadeIn(500);
        $(".icon6-active").fadeIn(500);
        $(".icon7-active").fadeIn(500);
        $(".icon8-active").fadeIn(500);
        $('.icon' + position + '-active').show();
        $('.trigger').parent().on('click', function() {
            $('.modal-wrapper').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });

        let $exactly = $('.exactly-babyClub-card');
        $exactly.empty();
        $exactly.html(content[position - 1]);
        initSwipe();

        $exactly.find('.trigger').parent().on('click', function() {
            $('.modal-wrapper').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });

        for (let i = 0; i < 8; i++) {
            if (position - 1 === i) {
                continue;
            }
            $('.icon' + (i + 1) + '-active').hide();
        }
    };
    iconClick(1);
    for (let i = 0; i < 8; i++) {
        $(".icon" + (i + 1)).click(function () {
            iconClick(i + 1);
        });
    }


};


let initSlider = () => {
    const mySlider = $('.my-slider');
    const filler = $('.my-slider-paginator__line__filler');
    const digit = $('.my-slider-paginator__digit');

    let cards = [
        {percents: 4.16, class: 'kids-1', text: '01'},
        {percents: 8.32, class: 'kids-2', text: '02'},
        {percents: 12.48, class: 'kids-3', text: '03'},
        {percents: 16.64, class: 'kids-4', text: '04'},
        {percents: 20.8, class: 'kids-5', text: '05'},
        {percents: 24.96, class: 'kids-6', text: '06'},
        {percents: 29.12, class: 'kids-7', text: '07'},
        {percents: 33.28, class: 'kids-8', text: '08'},
        {percents: 37.44, class: 'kids-9', text: '09'},
        {percents: 41.6, class: 'kids-10', text: '10'},
        {percents: 45.76, class: 'kids-11', text: '11'},
        {percents: 49.92, class: 'kids-12', text: '12'},
        {percents: 54.08, class: 'kids-13', text: '13'},
        {percents: 58.24, class: 'kids-14', text: '14'},
        {percents: 62.4, class:  'kids-15', text: '15'},
        {percents: 66.56, class: 'kids-16', text: '16'},
        {percents: 70.72, class: 'kids-17', text: '17'},
        {percents: 74.88, class: 'kids-18', text: '18'},
        {percents: 79.04, class: 'kids-19', text: '19'},
        {percents: 83.20, class: 'kids-20', text: '20'},
        {percents: 87.36, class: 'kids-21', text: '21'},
        {percents: 91.52, class: 'kids-22', text: '22'},
        {percents: 95.68, class: 'kids-23', text: '23'},
        {percents: 100, class: 'kids-24', text: '24'},
        ];

    let template = (left, center, right) =>
        `<div class="my-slider__item__right animated fadeInRightBig ${right}"></div>
            <div class="my-slider__item__leftt animated fadeInLeftBig ${left}"></div>

            <div class="my-slider__item__left-button"></div>
            <div class="my-slider__item animated fadeIn ${center}"></div>
            <div class="my-slider__item__right-button"></div>`;

    let switchLeft = () => {
        let last = cards.pop();
        cards.unshift(last);
        render();
        updateFiller();
    };

    let switchRight = () => {
        let first = cards.shift();
        cards.push(first);
        render();
        updateFiller();
    };

    let updateFiller = () => {
        filler.css("width", (cards[0].percents) + '%');
        digit.html(cards[0].text)
    };


    let render = () => {
        mySlider.empty();
        let element = template(cards[2].class, cards[0].class, cards[1].class);
        mySlider.html(element);

        let toLeft = $('.my-slider__item__left-button');

        toLeft.click(() => {
            switchLeft();
        });

        let toRight = $('.my-slider__item__right-button');

        toRight.click(() => {
            switchRight();
        });



        $('.my-slider__item').swipe({
            swipeLeft: switchRight,
            swipeRight: switchLeft,
            threshold: 0
        })





    }



    render();
    updateFiller();
};

let initMinicardSlider = () => {
    const sliderWrapper = $('.slider__wrapper');
    const filler = $('.get-baby-paginator__line__filler');
    const digit = $('.get-baby-paginator__digit');
    let toLeft = $('.get-baby-paginator__button-left');
    toLeft.click(() => switchLeft());
    let toRight = $('.get-baby-paginator__button-right');
    toRight.click(() => switchRight());

    let cards = [
        {
            percents: 25,
            text: '01',
            iconClass: 'icon_intelect',
            smallCardIconClass:'icon_intelectMini',
            bigCardClass: 'orange',
            title: 'Развитие интелекта',
            bigText: 'Развиваем интеллектуальные\n' +
                'и познавательные способности\n' +
                'малышей с учетом\n' +
                'психологических особенностей\n' +
                'каждого ребенка - это наш метод\n' +
                'бережного развития интеллекта'},

        {
            percents: 25,
            text: '02',
            iconClass: 'icon_study',
            smallCardIconClass:'icon_studyMini',
            bigCardClass: 'blue',
            title: 'Интерес к учебе',
            bigText: 'Для каждого возраста мы выбираем те задания, которые способствуют гармоничному развитию. Ребята привыкают выполнять всё самостоятельно, поэтому и в школе помогать с домашним заданием им не придётся.'},

        {
            percents: 50,
            text: '03',
            iconClass: 'icon_speak',
            smallCardIconClass:'icon_speakMini',
            bigCardClass: 'green',
            title: 'Навык общения',
            bigText: 'Ребёнок в Бэби-клубе Кремль чувствует себя самостоятельным, отстаивает своё мнение без поддержки родителей. Детей мотивируют их сверстники, они учатся общаться и дружить друг с другом.'},

        {
            percents: 75,
            text: '04',
            iconClass: 'icon_krug',
            smallCardIconClass:'icon_krugMini',
            bigCardClass: 'orange',
            title: 'Широкий кругозор',
            bigText: 'В нашем клубе не просто готовят\n' +
                ' к детскому саду и школе, мы\n' +
                ' помогаем ребятам в осознании\n' +
                ' себя. Дети рано начинают\n' +
                ' понимать чем хотят заниматься\n' +
                ' в жизни и в каком направлении\n' +
                ' им развиваться.'},



        {
            percents: 100,
            text: '05',
            iconClass: 'icon_maximum',
            smallCardIconClass:'icon_maximumMini',
            bigCardClass: 'green',
            title: 'Максимум внимания',
            bigText: 'Уважаем свободу детей: они живут в ритме, который зависит от особенностей восприятия и характера каждого. Бэби-клуб Кремль поддерживает интерес ребенка, занимаясь с ним в игровой форме.'},


    ];


    $(".menu-header-wrap").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });




    let templateBig = (bigCardClass, iconClass, title, bigText) =>
        ` <a  class="slider__item animated flipInY">
                            <div class="get-baby-content__card big ${bigCardClass}">
                                <div class="get-baby-content__card-icon ${iconClass}"></div>
                                <div class="get-baby-content__card_tittle">${title}
                                </div>
                                <div class="get-baby-content__card_text"><p>${bigText}</p></div>
                            </div>
                        </a>`;


    let templateSmall = (iconClass, title) =>
        `  <a class="slider__item ">
                            <div class="get-baby-content__card miniCard flip">
                                <div class="get-baby-content__card-icon ${iconClass}"></div>
                                <div class="get-baby-content__card_tittleMini">${title}</div>
                            </div>
                        </a>`;

    let switchLeft = () => {
        let last = cards.pop();
        cards.unshift(last);
        render();
        updateFiller();
    };

    let switchRight = () => {
        let first = cards.shift();
        cards.push(first);
        render();
        updateFiller();
    };

    let updateFiller = () => {
        filler.css("width", (cards[0].percents) + '%');
        digit.html(cards[0].text)
    };




    let render = () => {
        sliderWrapper.empty();
        let element = '';
        for (let i = 0; i < 4; i++) {
            let card = cards[i];
            if (i < 2) {

                element += templateBig(card.bigCardClass, card.iconClass, card.title, card.bigText);
            } else  {
                element += templateSmall(card.smallCardIconClass, card.title);
            }
        }
        sliderWrapper.html(element);

    };

    sliderWrapper.swipe( {
        swipeLeft:switchRight,
        swipeRight:switchLeft,
        threshold:0
    });


    render();
    updateFiller();
};




let initVideoGrid = () => {
    let video = $('.video-grid__video');

    $('.video1').click(() => {
        video.html('<iframe src="https://www.youtube.com/embed/y9nHBvG8zi8" frameborder="0"\n class="video-grid__video__content"' +
            '                                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>')
    });

    $('.video2').click(() => {
        video.html('<iframe src="https://www.youtube.com/embed/AKnMy0dK7qk" frameborder="0"\n class="video-grid__video__content"' +
            '                                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>')
    });

    $('.video3').click(() => {
        video.html('<iframe src="https://www.youtube.com/embed/3QFk7FdWRIg" frameborder="0"\n class="video-grid__video__content"' +
            '                                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>')
    })

};



$('.triggerPol').parent().on('click', function() {
    $('.modals-wrap').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
    return false;
});

$(function(){

    $("#phone").mask("+7 (999) 999-9999");
});

$('.modals-wrap').on('click', function (){
    $('.modals-wrap').removeClass('open');
});

$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none");
});

