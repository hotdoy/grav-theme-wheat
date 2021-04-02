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
        const selects = document.querySelectorAll(".product .variant select");
        for (let select of selects) {
            select.addEventListener('change', function() {
                let val = select.options[select.selectedIndex].value;
                document.querySelector('.snipcart-add-item').setAttribute('data-item-' + select.dataset.field + '-value', val);
            });
        };
    };

    initProduct();
})();