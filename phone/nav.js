$(function(){
    // var menu = $("#menu")
    var nav = '<div class="logo"><img src="../img/logo.png" alt=""></div>'+
              '<div class="menu" id="menu">'+
              '  <img src="../img/menu.png" alt="">'+
              '</div>'+
              '<div class="menu-wrap">'+
              '  <ul class="menu-cont">'+
              '    <li class="menu-item"><a href="../index/index.html">首页</a></li>'+
              '    <li class="menu-item"><a href="../thin/index.html">瘦身</a></li>'+
              '    <li class="menu-item"><a href="../coo/index.html">企业合作</a></li>'+
              '    <li class="menu-item"><a href="../about/index.html">关于我们</a></li>'+
              '  </ul>'+
              '</div>'
    $("#nav").append(nav)
    $("#menu").click(function () {
      $(".menu-wrap").toggle()
    })
    $(".menu-wrap").click(function () {
        $(".menu-wrap").toggle()
    })
  })