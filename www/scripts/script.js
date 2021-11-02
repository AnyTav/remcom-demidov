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
  if ( $('.js-slider-wrap').length ) {
    $('.js-slider-wrap').each(function() {
      $(this).find('.js-slider').slick({
        prevArrow: $(this).find('.js-btn-prev'),
        nextArrow: $(this).find('.js-btn-next'),
      });
    });
  }



  $('.js-btn-review').on('click', function() {

    let button = $(this);
    button.text('...');
  
    $.ajax({
      type: 'POST',
      url: '/json/reviews.json',
      data: 'count=4',
      success: function(response){
        let html = createHtml(response);
        addToHtml(html);
        button.text('Еще отзывы');
      },
      error: function(){}
    });

    function addToHtml(string) {
      $('.js-reviews-list').append(string);
    }

    function createHtml(data) {
      let dataArray = data.reviews;
      let htmlString = '';

      dataArray.forEach(function(item){
        htmlString = htmlString + `<div class="reviews-item">
          <div class="review-card">
            <div class="review-card-photo">
              <img src="${item.imageUrl}" alt="${item.imageAlt}" class="review-card-ava">
            </div>
            <div class="review-card-content">
              <span class="review-card-name">${item.name}</span>
              <blockquote class="review-card-quote">
                “${item.text}”
              </blockquote>
            </div>
          </div>
        </div>`;
      });

      return htmlString;
    }

  });
});
