$(function(){
  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
    $('.logo__text').toggleClass('logo__text--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });

  $('.reviews__inner').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    prevArrow: '<svg class="slider-btn slider-btn__left" width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.839 2.27597C15.0818 2.0245 15.2162 1.6877 15.2132 1.33811C15.2102 0.988509 15.0699 0.654093 14.8227 0.406882C14.5755 0.159671 14.2411 0.0194457 13.8915 0.0164078C13.5419 0.0133699 13.2051 0.147762 12.9536 0.39064L2.05762 11.2866C0.807816 12.5368 0.105713 14.2322 0.105713 16C0.105713 17.7677 0.807816 19.4631 2.05762 20.7133L12.9536 31.6093C13.2051 31.8522 13.5419 31.9866 13.8915 31.9835C14.2411 31.9805 14.5755 31.8403 14.8227 31.5931C15.0699 31.3459 15.2102 31.0114 15.2132 30.6618C15.2162 30.3122 15.0818 29.9754 14.839 29.724L3.94296 18.828C3.19307 18.0779 2.77181 17.0606 2.77181 16C2.77181 14.9393 3.19307 13.9221 3.94296 13.172L14.839 2.27597Z" fill="#C2C8CD"/></svg>',
    
    nextArrow: '<svg class="slider-btn slider-btn__right" width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.39053 29.724C1.26318 29.847 1.1616 29.9941 1.09172 30.1568C1.02185 30.3194 0.985063 30.4944 0.983525 30.6714C0.981987 30.8485 1.01572 31.024 1.08276 31.1879C1.1498 31.3518 1.24881 31.5006 1.374 31.6258C1.49919 31.751 1.64806 31.85 1.81192 31.9171C1.97578 31.9841 2.15136 32.0178 2.32839 32.0163C2.50543 32.0148 2.68039 31.978 2.84306 31.9081C3.00574 31.8382 3.15286 31.7367 3.27586 31.6093L14.1719 20.7133C15.42 19.4623 16.121 17.7672 16.121 16C16.121 14.2328 15.42 12.5377 14.1719 11.2866L3.27586 0.39064C3.02439 0.147762 2.68759 0.0133699 2.33799 0.0164078C1.98839 0.0194457 1.65398 0.159671 1.40677 0.406882C1.15956 0.654093 1.01933 0.988509 1.01629 1.33811C1.01326 1.6877 1.14765 2.0245 1.39053 2.27597L12.2865 13.172C13.0364 13.9221 13.4577 14.9393 13.4577 16C13.4577 17.0606 13.0364 18.0779 12.2865 18.828L1.39053 29.724Z" fill="#C2C8CD"/></svg>',
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint:750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        }
      },
    ],
  });

  $('.questions__item-box').on('click', function(){
    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');
  })
});