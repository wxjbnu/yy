$(function(){
    // var nav = '<div class="logo"><img src="../img/logo.png" alt=""></div>'+
    //     '    <div class="menu-del" id="menu">'+
    //     '      <span></span>'+
    //     '      <span></span>'+
    //     '      <span></span>'+
    //     '    </div>';
    // var menu = '<div class="menu-wrap">'+
    //     '  <div class="menu-head">'+
    //     '    <div class="menu-icon"><img src="../img/menu_icon.png"/></div>'+
    //     '    <div class="menu-del">'+
    //     '      <span></span>'+
    //     '      <span></span>'+
    //     '      <span></span>'+
    //     '    </div>'+
    //     '  </div>'+
    //     '  <ul class="menu-cont">'+
    //     '    <li class="menu-item"><a href="../index/index.html">首页</a></li>'+
    //     '    <li class="menu-item"><a href="../thin/index.html">瘦身服务</a></li>'+
    //     '    <li class="menu-item"><a href="../coo/index.html">企业合作</a></li>'+
    //     '    <li class="menu-item"><a href="../about/index.html">关于我们</a></li>'+
    //     '  </ul>'+
    //     '</div>'
    var nav = '<div class="logo"><img src="../img/logo.png" alt=""></div>'+
              '<div class="menu" id="menu">'+
              '  <img src="../img/menu.png" alt="">'+
              '</div>';
    var menu = '<div class="menu-wrap">'+
              '  <div class="menu-head">'+
              '    <div class="menu-icon"><img src="../img/menu_icon.png"/></div>'+
              '    <div class="menu-del">'+
              '      <span></span>'+
              '      <span></span>'+
              '      <span></span>'+
              '    </div>'+
              '  </div>'+
              '  <ul class="menu-cont">'+
              '    <li class="menu-item"><a href="../index/index.html">首页</a></li>'+
              '    <li class="menu-item"><a href="../thin/index.html">瘦身服务</a></li>'+
              '    <li class="menu-item"><a href="../coo/index.html">企业合作</a></li>'+
              '    <li class="menu-item"><a href="../about/index.html">关于我们</a></li>'+
              '  </ul>'+
              '</div>'
              
    $("body").append(menu)
    $("#nav").append(nav)
    $("#menu").click(function () {
      $(".menu-wrap").toggle()
    })
    $(".menu-wrap").click(function () {
        $(".menu-wrap").toggle()
    })
  })