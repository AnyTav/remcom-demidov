$(document).ready(function(){

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



  let prevBtn;

  $('.js-accordion-btn').on('click', function() {
    console.log($(this));


    if (prevBtn === $(this)[0]) {
      $(this).next().slideToggle();
      return;
    }

    $('.js-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = $(this)[0];
  });

});
