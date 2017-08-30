var gotop = $("#gotop");
$(function(){
    
    $("#nav_sub").hide()

    $(".nav-list").mouseenter(function(){
        var index = $(this).index();
        if(index==1){
            $("#nav_sub").show()
        }
    })
    $(".nav-list").mouseleave(function(){
        var index = $(this).index();
        if(index==1){
            $("#nav_sub").hide()
        }
    })
    $(".nav-wx").mouseenter(function(){
        $("#nav_qr").show()
    })
    $(".nav-wx").mouseleave(function(){
        $("#nav_qr").hide()
    })

    gotop.click(function () {
        document.body.scrollTop = 0
    })
});

$("body").scroll(function(){

    if(document.body.scrollTop>100){
        gotop.show()
    }else{
        gotop.hide()
    }
})