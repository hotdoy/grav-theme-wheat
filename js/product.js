(function () {

    'use strict';

    const initProduct = function(){

        var swiper = new Swiper('.module.product .swiper-container', {
            spaceBetween: 10,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    initProduct();

})();










