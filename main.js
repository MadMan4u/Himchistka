
// SECTION calculater
$('#full').on('click', function () {
    var check_full = $('#full > .main__choice-text').text();
    // button visible
    if ($('#seats').css('display') == 'none') {
        $('#seats').css('display', 'inline-flex');
        $(".main__choice-arrow").addClass('arrow--active');
    } else {
        $('#seats').css('display', 'none')
        $(".main__choice-arrow").removeClass('arrow--active');
    }
    // button - check text
    if (check_full == "Полная") {
        $('#full_price').css('display', 'flex');
        $('#seats_price').css('display', 'none');
        $('.calc__included').css('display', 'block');
    }
    else {
        $('#full_price').css('display', 'none');
        $('#seats_price').css('display', 'flex');
        $('.calc__included').css('display', 'none');
    }
})

$('#seats').on('click', function () {
    var check_seats = $('#seats > .main__choice-text').text();
    // button check text
    if (check_seats == 'Сидения') {
        $('#seats > .main__choice-text').text('Полная');
        $('#full > .main__choice-text').text('Сидения');

    } else {
        $('#seats > .main__choice-text').text('Сидения');
        $('#full > .main__choice-text').text('Полная');
    }
    if (check_seats == "Сидения") {
        $('#full_price').css('display', 'none');
        $('#seats_price').css('display', 'flex');
        $('.calc__choice').css('display', 'none');
        $('.calc__included').css('display', 'none');
    }
    else {
        $('#full_price').css('display', 'flex');
        $('#seats_price').css('display', 'none');
        $('.calc__choice').css('display', 'flex');
        $('.calc__included').css('display', 'block');
    }
    // rotate arrow
    $(".main__choice-arrow").removeClass('arrow--active');
    $("#seats").css('display', 'none');
})

// hover effect

$('.calc__choice-item').on('click', function PriceForItem() {
    $('.calc__choice .calc__choice-item').each(function () {
        $(this).removeClass('item--active');
    })
    $(this).addClass('item--active');

    // text change

    var price = $('#full_price > .calc__price-item > .calc__price-group > .calc__price-title');
    var time = $('#full_price > .calc__price-item > .calc__price-subtitle');
    if ($(this).attr('data-section') == 1) {
        price.text('от 4 000 ₽');
        time.text('Время: ~10 часов');
    }
    if ($(this).attr('data-section') == 2) {
        price.text('от 5 000 ₽');
        time.text('Время: ~11 часов');
    }
    if ($(this).attr('data-section') == 3) {
        price.text('от 6 000 ₽');
        time.text('Время: ~12 часов');
    }
    if ($(this).attr('data-section') == 4) {
        price.text('от 7 000 ₽');
        time.text('Время: ~13 часов');
    }
    if ($(this).attr('data-section') == 5) {
        price.text('от 8 000 ₽');
        time.text('Время: ~14 часов');
    }
    if ($(this).attr('data-section') == 6) {
        price.text('от 9 000 ₽');
        time.text('Время: ~15 часов');
    }
})

// SECTION example works

$(function () {
    var gallery_img = $('.main__gallery-content').find('a');
    if (gallery_img.length <= 6) {
        $('.main__gallery-btn').hide();
    }
    gallery_img.each(function (index) {
        if (index >= 6) {
            $(this).hide();
        }
    })
});

$(function () {
    $('.main__gallery-btn').on('click', function () {
        var gallery_img = $('.main__gallery-content').find('a');
        gallery_img.each(function (index) {
            if (index >= 6) {
                $(this).show();
            }
        })
    })
})

// SECTION questions and answers
var element = $('.questions__item-btn');

$('.questions__item-btn').on('click', function () {
    textContentWiget($(this));
})

var textContentWiget = element => {
    var self = element;
    var parent_id = self.parent().parent().parent().attr('class');
    if (self.siblings(".questions__item-text").hasClass('--active-text')) {
        self.siblings(".questions__item-text").removeClass('--active-text');
        self.addClass('isActive');
        setTimeout(function () {
            self.removeClass('isActive')
        }, 700);
        if (parent_id == 'main__questions-list') {
            self.find('img').attr('src', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTEuNXB4IiBoZWlnaHQ9IjE3Ljg3NXB4IiB2aWV3Qm94PSIwIDAgMTEuNSAxNy44NzUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDExLjUgMTcuODc1IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMTAxMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMS45OTMsMS43NTMgDQoJOS4wODQsOC44NDUgMS45OTMsMTUuOTM3ICIvPg0KPC9zdmc+DQo=');
        } else {
            self.find('img').attr('src', './img/dropdown.svg');
        }
    } else {
        self.siblings(".questions__item-text").addClass('--active-text');
        self.addClass('isActive');
        setTimeout(function () {
            self.removeClass('isActive')
        }, 700);
        self.find('img').attr('src', './img/close.svg');
    }
}

// SECTION before and after

$('.comparison__list-item').on('click', function () {
    var list__li = $('.main__comparison-list').find('li');
    list__li.removeClass('--active-tab');
    $(this).addClass('--active-tab');
})

document.querySelectorAll('.cocoen').forEach(function (element) {
    new Cocoen(element);
});

$('#tab1').on('click', function () {
    $('#tab-content1').css('visibility', 'visible');
    $('#tab-content1').css('max-height', '940px');
    $('#tab-content1').css('height', 'auto');
    $('#tab-content2').css('visibility', 'hidden');
    $('#tab-content2').css('max-height', '0px');
    $('#tab-content2').css('height', '0px');
    $('#tab-content3').css('visibility', 'hidden');
    $('#tab-content3').css('max-height', '0px');
    $('#tab-content3').css('height', '0px');
    $('#tab-content4').css('visibility', 'hidden');
    $('#tab-content4').css('max-height', '0px');
    $('#tab-content4').css('height', '0px');
})

$('#tab2').on('click', function () {
    $('#tab-content1').css('visibility', 'hidden');
    $('#tab-content1').css('max-height', '0px');
    $('#tab-content1').css('height', '0px');
    $('#tab-content2').css('visibility', 'visible');
    $('#tab-content2').css('max-height', '940px');
    $('#tab-content2').css('height', 'auto');
    $('#tab-content3').css('visibility', 'hidden');
    $('#tab-content3').css('max-height', '0px');
    $('#tab-content3').css('height', '0px');
    $('#tab-content4').css('visibility', 'hidden');
    $('#tab-content4').css('max-height', '0px');
    $('#tab-content4').css('height', '0px');
})

$('#tab3').on('click', function () {
    $('#tab-content1').css('visibility', 'hidden');
    $('#tab-content1').css('max-height', '0px');
    $('#tab-content1').css('height', '0px');
    $('#tab-content2').css('visibility', 'hidden');
    $('#tab-content2').css('max-height', '0px');
    $('#tab-content2').css('height', '0px');
    $('#tab-content3').css('visibility', 'visible');
    $('#tab-content3').css('max-height', '940px');
    $('#tab-content3').css('height', 'auto');
    $('#tab-content4').css('visibility', 'hidden');
    $('#tab-content4').css('max-height', '0px');
    $('#tab-content4').css('height', '0px');
})

$('#tab4').on('click', function () {
    $('#tab-content1').css('visibility', 'hidden');
    $('#tab-content1').css('max-height', '0px');
    $('#tab-content1').css('height', '0px');
    $('#tab-content2').css('visibility', 'hidden');
    $('#tab-content2').css('max-height', '0px');
    $('#tab-content2').css('height', '0px');
    $('#tab-content3').css('visibility', 'hidden');
    $('#tab-content3').css('max-height', '0px');
    $('#tab-content3').css('height', '0px');
    $('#tab-content4').css('visibility', 'visible');
    $('#tab-content4').css('max-height', '940px');
    $('#tab-content4').css('height', 'auto');
})


var arr = ' [45.024202, 41.949141] ';
var pointer = arr.split("|");
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: JSON.parse(pointer[0]),
                zoom: 18
            }),


            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                // hintContent: '',
                // balloonContent: '<img src="./img/yandex-logo.png"/>'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/yandex-logo.png',
                // Размеры метки.
                iconImageSize: [32, 55],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-13, -55],
                // balloonCloseButton: true,
                // balloonPanelMaxMapArea: 0,
            });

        myMap.geoObjects.add(myPlacemark);
        // myPlacemark.balloon.open();

        if (pointer[1]) {
            myPlacemark_1 = new ymaps.Placemark(JSON.parse(pointer[1]), {
                // hintContent: '',
                // balloonContent: '<img src="./img/yandex-logo.png"/>'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/yandex-logo.png',
                // Размеры метки.
                iconImageSize: [32, 55],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-13, -55],
                // balloonCloseButton: true,
                // balloonPanelMaxMapArea: 0,
            });

            myMap.geoObjects.add(myPlacemark_1);
            myPlacemark_1.balloon.open();
        }


    });
} else {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: JSON.parse('[45.024202, 41.949141]'),
                zoom: 18
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                // hintContent: '',
                // balloonContent: '<img src="./img/yandex-logo.png"/>'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/yandex-logo.png',
                // Размеры метки.
                iconImageSize: [32, 55],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-13, -55],

            });

        myMap.geoObjects.add(myPlacemark);

        if (pointer[1]) {
            myPlacemark_1 = new ymaps.Placemark(JSON.parse(pointer[1]), {
                // hintContent: '',
                // balloonContent: '<img src="./img/yandex-logo.png"/>'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/yandex-logo.png',
                // Размеры метки.
                iconImageSize: [32, 55],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-13, -55],
                // balloonCloseButton: true,
                // balloonPanelMaxMapArea: 0,
            });

            myMap.geoObjects.add(myPlacemark_1);
        }
    });
}

//  burger menu

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');

//   text hidden
$(function () {
    var element_text_all = $('.text');
    element_text_all.each(function (step) {
        if ($(element_text_all[step]).html().length > 400) {
            $(element_text_all[step]).after("<div class='wiget-text-button'><button>Показать еще</button></div>");
        }
    })
    var element_button = $('.wiget-text-button button');
    element_text_all.addClass('hid');

    element_button.click(function () {

        var element_text = $(this).parent().prev();

        if (element_text.hasClass('viz')) {
            element_text.removeClass('viz');
        } else {
            element_text.addClass('viz');
        }

        if (element_text.hasClass('hid')) {
            element_text.removeClass('hid');
            element_text.addClass('act');
            $(this).text('Свернуть');
        } else if (element_text.hasClass('act')) {
            element_text.removeClass('act');
            element_text.addClass('hid');
            $(this).text('Показать еще');
        }


    });

})

// slider
  
$(function() {
    $('.main__gallery-mobile .rslides').responsiveSlides({
      nav: true,
      pager: false,
      timeout: 5000,
      pauseControls: true,
      prevText: '<i class="fa fa-chevron-left"></i>',
      nextText: '<i class="fa fa-chevron-right"></i>',
    });
  }); 