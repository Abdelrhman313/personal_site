$(function(){
    
    //Toggle Active Class

    $(".navbarSection .menu li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //Zoom Image 
    
    $('.zoom_btn').click(function(){
        var src = $(this).parent().parent().data('class');        
        $('.overlay img').attr('src',src);
        $('.overlay').css('display','block');
        console.log(src);
        
    })

    //close Zoom Image

    $('.Portfolio .overlay .fa').click(()=>{
        $('.overlay img').attr('src',"");
        $('.overlay').css('display','none');
    })


});