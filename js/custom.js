/*global $, alert, console*/   

$(function () {
    
    "use strict";
    
    var myHeader =  $('.header'); 
    
     myHeader.height($(window).height());
    
       $(window).resize(function () {
        
          myHeader.height($(window).height());
        
    }); 
    
    $('.nav li').click(function () {
        
       $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    
      $('.nav li a').click(function () {
        
        $('html,body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });  
    
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
            
           if (!$(this).is(':last-child')) {
               
               $(this).delay(3000).fadeOut(3000, function () {
                   
                  $(this).removeClass('active').next().addClass('active').fadeIn();
                   
                    autoSlider();
                   
               });
               
           } else {
               
               $(this).delay(3000).fadeOut(1000, function () {
                   
                  $(this).removeClass('active');
                   
                   $('.slider div').eq(0).addClass('active').fadeIn();
                   
                     autoSlider();
                   
               })
               
           }
            
        });
        
    }());
    
     $('#Container').mixItUp();
    
     $('.select li').click(function () {
                        
                        
            $(this).addClass('active').siblings().removeClass('active');
                        
            });
    
});
