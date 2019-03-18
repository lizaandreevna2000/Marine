$(document).ready(function(){
    $(".spoiler_body").hide();
    $(".spoiler_body_1").hide();
    $(".spoiler_body_2").hide();
    $('.plus_click').click(function($e){
        $e.preventDefault();
        $('.plus h1 span').toggleClass('blue_date');
        $('.plus').next().slideToggle();
        if($('.plus h1 span').hasClass('blue_date')) {
            $('.photo').attr('src', 'img/minus.png');
            if(window.innerWidth<992){
              $('#post').css('height','870px')
            }
            if(window.innerWidth<768){
              $('#post').css('height','860px')
            }
            
        }
        else {
            $('.photo').attr('src','img/plus.png');
            if(window.innerWidth<992){
              $('#post').css('height','700px')
            }
            if(window.innerWidth<768){
              $('#post').css('height','600px')
            }
        }
      
    })
   $('.plus_click_1').click(function($e){
        $e.preventDefault();
        $('.plus_1 h1 span').toggleClass('blue_date');
        $('.plus_1').next().slideToggle();
        if($('.plus_1 h1 span').hasClass('blue_date')) {
            $('.photo_1').attr('src', 'img/minus.png');
            if(window.innerWidth<992){
              $('#post').css('height','870px')
            }
            if(window.innerWidth<768){
              $('#post').css('height','860px')
            }

        }
        else {
            $('.photo_1').attr('src','img/plus.png');
            if(window.innerWidth<992){
              $('#post').css('height','700px')
            }
           
            if(window.innerWidth<768){
              $('#post').css('height','600px')
            }
           
        }
    })
    $('.plus_click_2').click(function($e){
        $e.preventDefault();
        $('.plus_2 h1 span').toggleClass('blue_date');
        $('.plus_2').next().slideToggle();
        if($('.plus_2 h1 span').hasClass('blue_date')) {
            $('.photo_2').attr('src', 'img/minus.png');
            if(window.innerWidth<992){
              $('#post').css('height','870px')
            }
            if(window.innerWidth<768){
              $('#post').css('height','860px')
            }
            
        }
        else {
            $('.photo_2').attr('src','img/plus.png');
            if(window.innerWidth<992){
              $('#post').css('height','700px')
            }
            if(window.innerWidth<768){
              $('#post').css('height','600px')
            }
        }
    })
    $('#container_2').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite:false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
            {
              breakpoint: 774,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
            {
              breakpoint: 442,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('#people_cont').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow:true,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite:false,
              dots: false
            }
          },
          {
            breakpoint: 774,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      $('.slideshow-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite:false,
        prevArrow: '<div class="prev">&#10094</div>',
        nextArrow: '<div class="next">&#10095</div>',
      });   
      $('#mobile_bar').hide();
      $('#burg').on('click',function(){
        $('#mobile_bar').slideToggle();
      })
      $(document).click( function(event){
        if( $(event.target).closest(".box").length ) 
        return;
        $(".box").fadeOut()
        event.stopPropagation();
      });
      $('#s').click( function() {
          $('.box').fadeIn();
          return false;
        });
  
})