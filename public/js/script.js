$(document).ready(function(){
    // For the sticky navigation
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    // Scroll on buttons
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    // Navigation scroll
    $('.js--main-nav li a').click(function(e) {
  	
        var targetHref = $(this).attr('href');
        
      $('html, body').animate({
          scrollTop: $(targetHref).offset().top
      }, 1000);
      
      e.preventDefault();
    });

    // Animations on scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });

    // Mobile navi
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);
    });

    // Button to-start
    var btn = $('.js--start-btn');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });


});