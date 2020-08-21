import $ from 'jquery';
$(function(){ 
   
    $('#mobile-menu-btn').click(function(){
        var tmp= parseInt($('.fixed-sidebar-left').css('left'));
       
        if(tmp === 0 ){
        $('.fixed-sidebar-left').removeAttr("style"); 
        }else if(tmp === -225){
            $('.fixed-sidebar-left').css("left","0px"); 
        }
    })
    $('#desktop-menu-btn').click(function(){

        var tmp= parseInt($('.fixed-sidebar-left').css('width'));
        var windowWidth =parseInt($(window).width());
       
        if(tmp === 44 && windowWidth < 1400 ){
            $('.fixed-sidebar-left').css("width","225px"); 
            $('.right-nav-text').css('opacity',1);
            $('.show').css('display','block');
            $('.side-nav li.navigation-header  i').css("display", "none");
            $('.side-nav li.navigation-header  span').css("display", "block");
            $('.page-wrapper').css('margin-left',"225px");
            $('.list-group-item ').css('padding',"0.75rem 0.25rem");
            
        }else if(tmp === 225  && windowWidth < 1400){
            $('.fixed-sidebar-left').removeAttr("style"); 
            $('.right-nav-text').removeAttr("style"); 
            $('.show').removeAttr("style"); 
            $('.side-nav li.navigation-header  i').removeAttr("style"); 
            $('.side-nav li.navigation-header  span').removeAttr("style"); 
            $('.page-wrapper').removeAttr("style");
            $('.list-group-item ').removeAttr("style");
        }else if(tmp === 225  && windowWidth > 1400){
            
            $('.fixed-sidebar-left').css("width","44px"); 
            $('.right-nav-text').css('opacity',0);
            $('.show').css('display','none');
            $('.side-nav li.navigation-header  i').css("display", "block");
            $('.side-nav li.navigation-header  span').css("display", "none");
            $('.page-wrapper').css('margin-left',"44px");
           
            
        }else if(tmp === 44  && windowWidth > 1400){
            $('.fixed-sidebar-left').removeAttr("style"); 
            $('.right-nav-text').removeAttr("style"); 
            $('.show').removeAttr("style"); 
            $('.side-nav li.navigation-header  i').removeAttr("style"); 
            $('.side-nav li.navigation-header  span').removeAttr("style"); 
            $('.page-wrapper').removeAttr("style");
            $('.list-group-item ').removeAttr("style");            
        }
    })
})