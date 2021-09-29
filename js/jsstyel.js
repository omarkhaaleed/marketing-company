/*header */
// header when click botton  show menue
$(".buoton").click(function() {
    $(".nav_list").slideToggle();
})




//when scroll body ... stickey navbar 


$(window).scroll(function() {
    var scr = $(window).scrollTop();
    if (scr > 600) {
        $("header").addClass("stickey")
    } else {
        $("header").removeClass("stickey")

    }


    if (scr > 1890) {

        $('.timer').countTo();
        $(window).off("scroll")
    }


});




// the owl cauror >> team section 


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


// count to plugins >>>>>>> statics



// console.log($('.stat').offset().top)


//botoon click portfolio >>>


$('.buttons button').click(function() {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
    var cssfilter = $(this).attr('id');

    if (cssfilter === 'all') {
        $('.images > div ').fadeIn();

    } else {
        $('.images > div ').fadeOut();

        $('.images > div ').contents().filter('.' + cssfilter).fadeIn();

    }

});




// choose section 


$('.c_panal li').click(function() {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');

    var p = $(this).data('role')
    $('.content > div').hide();
    $('.content').contents().filter('#' + p).fadeIn();
});



// section video


$('.pop').magnificPopup({
    type: 'iframe'
        // other options
});




// usage slick in pleaure>>>>>>>>>



$('.slick').slick({
    nextArrow: false,
    prevArrow: false,
    autoplay: true,

});




$(window).scroll(function() {
    var ss = $(this).scrollTop();

    if (ss > 800) {

        $('.scrolltop ').fadeIn();
    } else {
        $('.scrolltop ').fadeOut();
    }
})



$('.scrolltop').click(function() {

    $('body,html').animate({
        scrollTop: 0
    }, 200);
})

// how to make when i click button on section go to this section directly
$('.list a').click(function() {
    $('body,html').animate({

        scrollTop: $($(this).attr('href')).offset().top()

    });
})