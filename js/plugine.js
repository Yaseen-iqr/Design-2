$(document).ready(function(){


    $(function(){new WOW().init();});      /* should be exist To control item animation visable time  */



            //  Use nice scroll
        $(function(){
            $("html").niceScroll({cursorcolor: "#36cfd1", cursorwidth: "5px",cursorborder: "1px solid #000", 
            mousescrollstep: 110,scrollspeed: 90,smoothscroll: false, hidecursordelay: 400} );
        });






    // show color option on click setting button
    $(".Setting").click(function(){
    $(".color-option").fadeToggle();
    });

    // Change Theme color on click
    var colorLi=$(".color-option ul li");
    colorLi
    .eq(0).css("backgroundColor","rgb(0, 204, 255)").end()
    .eq(1).css("backgroundColor","rgb(255, 196, 0)").end()
    .eq(2).css("backgroundColor","rgb(20, 245, 0)").end()
    .eq(3).css("backgroundColor","rgb(0, 132, 255)").end()
    colorLi.click(function(){
    $("link[href*='theam']").attr("href",$(this).attr("data-value"));
    });


    // ****************************** To process Loading page
    $(window).load(function()
    {

    $(".overlay .loader").fadeOut(6000,        //for hide h1
        function(){
            $("body").css("overflow","auto");

    $(this).parent().fadeOut(1000,function(){
    
        $(this).remove();  });     
    });
    });

    //*************************** */  To process scroll up 
    var scrollbutton=$("#scroll-up");
    $(window).scroll(function(){

        if($(this).scrollTop()>=700){
            scrollbutton.show();
        }
        else{scrollbutton.hide();
        }

        //  when click go up
        scrollbutton.click(function() {
        document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        // $("html,body").animate({scrollTop:"0"},6000);    });
    });
    });




});
