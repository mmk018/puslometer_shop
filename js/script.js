// Natsalo Slick
$(document).ready(function(){
    $('.carousel__inner').slick({
        /* dots: true, *///totski pod slaiderom dlja navigatsii
        
        speed: 1200,//skorostj s kotoroj mi budem perekljutsatj slaideri milisekundi
        slidesToShow: 1,//skoko otobrazatj za raz
        adaptiveHeight: true,//podstraivatjsa pod raznuju sirinu kartinok
        autoplay: true,//avtoproigrivanie
        autoplaySpeed: 2000,//skorostj avtoprouigrivanija, pausa mezdu perekljutsenijami
        fade: true,//auvtoprajevlinie kartinki
        cssEase: 'linear',//stilj projavlenija
        /* arrows: false, *///uberem knopoki strelki nazad vpered
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',//Javascript poniumaet putj bukvaljno!!!
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        //nastroiki pod raznie media query
        responsive: [
            {
              breakpoint: 992,//isjeznut strelki i pojavjatsas totsestki
              settings: {
                dots: true,
                arrows: false
              }
            },
            
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]



    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    /* $('.catalog-item__link').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog_item__list').eq(i),toggleClass('catalog_item__list_active');
      })
    })

    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i),toggleClass('catalog-item__list_active');
      })
    }) */

    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // For modal

    $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    /* $('.button_mini').on('click', function () {
      $('.overlay, #order').fadeIn('slow');
    }); */
    $('.button_mini').each(function(i) {
      $(this).on('click', function () {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
      })

    });

    /* $('#consultation-form').validate();
    $('#consultation form').validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }

      }
    });
    $('#order form').validate(); */

    function valideForms(form){
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
  
        }
      });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    $('input[name=phone]').mask("+49 999-999-999");

    $('form').submit(function(e) {
      e.preventDefault();//Eta funktsija otmenit reload
      $.ajax({// Metod is Jquery
        type: "POST",//Otpravit na server 
        url: "mailer/smart.php",//eto kuda budet otpravljatj dannie
        data: $(this).serialize()// Eto vse AJAX zapros
        //this eto to s tsem seitsas rabotaem
      }).done(function () {
        $(this).find("input").val("");
        //v etom naiti input so znatseniem i obnulitj proi pomosi trigger reset
        $('#consultation, #order').fadeOut();// posle vsego uberet modaljnoe okno
        $('.overlay, #thanks').fadeIn('slow');//pokazatj thanks i overlay
        $('form').trigger('reset');
      });
      
      return false;
    });//Eto Frontend otpravki na server
    
    
    /* Smooth scroll and page up */
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }

    });

    $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });//End Scrolling script

    new WOW().init();

  });  //Eto prostoi slider
// KOntes Slick  

/* $(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,//beskonets dvigatj mozno
        slidesToShow: 2,// odnovremenno pokazivatj
        slidesToScroll: 2//skoljko za raz perelistivatj
    });//V slick v gruglie skobki mi dobabljaem nastroikiz saita multiple responsive itd , too sto slick(suda dobavljaem nastroiki)
});  */


//Tiny slider