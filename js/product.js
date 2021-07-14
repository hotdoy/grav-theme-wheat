const Product = {

    InitSwiper: function() {
        const e = new Swiper(".product .product__showcase .swiper-container", {
            centeredSlides: true,
            spaceBetween: 5,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
             },
        });
    },

    InitVariant: function() {
        const selects = document.querySelectorAll(".product .variant select");
        for (let select of selects) {
            select.addEventListener('change', function() {
                let key = 'data-item-' + select.dataset.field + '-value';
                let value = select.options[select.selectedIndex].value;
                document.querySelector('.snipcart-add-item').setAttribute(key, value);
            });
        };
    },

};

Product.InitSwiper();
Product.InitVariant();
