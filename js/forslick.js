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