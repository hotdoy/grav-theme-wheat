(function () {

    'use strict';

    const initMaterialQuotes = function(){

        var swiper = new Swiper('.module.material_quotes .swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            effect: 'fade',
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    initMaterialQuotes();

})();










