$(function () {
    
    "use strict";
    
    $('.header .arrow i').click(function() {
        
       $('html, body').animate( {
           
           scrollTop: $('.features').offset().top
           
       }, 1000);
        
    });
    
    $('.but').click(function () {
        
       $('.our-work .hello').fadeIn();
        
    });
    
    
    var rightArrow = $('.testiem .fa-chevron-right'), 
        
        leftArrow = $('.testiem .fa-chevron-left')
     
    function check() {
            
           $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
            
            $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        
    }
    
    check();    
    
    $('.testiem i').click(function () {
        
       if ($(this).hasClass('fa-chevron-right')) {
           
           $('.testiem .active').fadeOut(100, function () {
               
              $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                 check(); 
               
           });
           
       } else {
           
             $('.testiem .active').fadeOut(100, function () {
               
              $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                 check(); 
             
             });
           
       }
        
    });
    
});