$(document).ready(function(){

  // Меню на мобильное версии
  // let isOpen = false;
  $('.js-burger').on('click', function(){

    $('.js-main-nav').toggleClass('main-nav-open');

    // if (isOpen) {
    //   $('.js-main-nav').removeClass('main-nav-open');
    //   isOpen = false;
    //   return;
    // }

    // $('.js-main-nav').addClass('main-nav-open');
    // isOpen = true;
  });



  // Аккордион страница вопросов и ответов
  let prevBtn;
  $('.js-accordion-btn').on('click', function() {

    if (prevBtn === $(this)[0]) {
      $(this).next().slideToggle();
      return;
    }

    $('.js-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = $(this)[0];
  });



  // Табы на странице контактов
  $('.tabs-link').on('click', function(e) {
    e.preventDefault();

    let index = $(this).index('.tabs-link');

    $('.tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');

  });

  // Фильтр на странице портфолио
  $('.filter-link').on('click', function(e) {
    e.preventDefault();

    let linkType = $(this).data('type');
    console.log(linkType);

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.portfolio-item').show();
      return;
    }

    $('.portfolio-item').each(function(){
      let itemType = $(this).data('type');

      if (linkType === itemType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });

  });


  // Слайдер
  // Проверяем есть ли разметка для слайдера на странице
  if ( $('.slides-list').length ) {
    $('.slides-list').slick();
  }


});
