(function() {
    "use strict";

    const initProduct = function() {

        // Swiper
        const swiper = new Swiper(".product .product__showcase .swiper-container", {
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
            },
        });

        // Variant
        const selects = document.querySelectorAll(".product .product__showcase .variant select");
        for (let select of selects) {
            select.addEventListener('change', function(){
              console.log(select.options[select.selectedIndex].value);
            });
        };
    };

    initProduct();
})();