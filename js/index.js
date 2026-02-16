/* メニュータブ開閉 */
$(function(){
  $("#title").on("click", function() {
     if($("ul").css('display') == 'none'){
       $("li").next().slideToggle();
       $(".touch").css('width', '100%');
       $(".touch").css('height', '100%'); 
       $(".touch").css('display', 'block'); 
     }else{
       $("li").next().slideToggle();
       $(".touch").css("width", "100%"); 
       $(".touch").css('height', '100%'); 
       $(".touch").css('display', 'block'); 
     }  
  });
});
/* メニュースクロール */
$(function(){
  $(window).on('load scroll',function (){
    $('.animation').each(function(){
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height){
        //クラスを付与
        $(this).addClass('active');
      }
    });
  });
});
/* フッターボックス調整 */

$(window).on('load resize' , function(){
  if (window.matchMedia('(min-width: 1025px)').matches) {
  var windowWidth = $(window).width();
  var deg = 10; // 指定した角度
  var rad = deg * Math.PI/180;  //ラジアンの計算
  var objectTop = (windowWidth/2)*Math.tan(rad)*2;  //高さ計算
  $('#slash-05').css('height' , objectTop);
  var copyright = objectTop - 30 ;
  $('.copyright').css('margin-top' , copyright);
  } else if  (window.matchMedia('(max-width: 1024px)').matches) {

  }
});

/*モーダルウインドウ*/

$(function () {
  $('.openModal001').click(function(){
      $('#modalArea001').fadeIn();
  });
  $('#closeModal001 , #modalBg001').click(function(){
    $('#modalArea001').fadeOut();
  });
    $('#closeModal001 , .modalWrapper').click(function(){
    $('#modalArea001').fadeOut();
  });
});
$(function () {
  $('.openModal002').click(function(){
      $('#modalArea002').fadeIn();
  });
  $('#closeModal002 , #modalBg002').click(function(){
    $('#modalArea002').fadeOut();
  });
    $('#closeModal002 , .modalWrapper').click(function(){
    $('#modalArea002').fadeOut();
  });
});
$(function () {
  $('.openModal003').click(function(){
      $('#modalArea003').fadeIn();
  });
  $('#closeModal003 , #modalBg003').click(function(){
    $('#modalArea003').fadeOut();
  });
});
$(function () {
  $('.openModal004').click(function(){
      $('#modalArea004').fadeIn();
  });
  $('#closeModal004 , #modalBg004').click(function(){
    $('#modalArea004').fadeOut();
  });
});
$(function () {
  $('.openModal005').click(function(){
      $('#modalArea005').fadeIn();
  });
  $('#closeModal005 , #modalBg005').click(function(){
    $('#modalArea005').fadeOut();
  });
});
/*追記-初動表示合わせ--------------------------------------------------*/
$(window).on("load",function(){
  $(".shiori").delay(50).animate({"opacity": 1},500);
  $(".menu").delay(50).animate({"opacity": 1},500);
  $(".titlep").delay(50).animate({"opacity": 1},500);
  $("#particles-js").delay(50).animate({"opacity": 1},500);
});
/*追記-hover--------------------------------------------------*/

$(function () {
  $('.openModal001').hover(function(){
    $(this).stop().animate({"opacity":"0.7"},200);
      
  },function() {
    $(this).stop().animate({"opacity":"1"},200);
  });
  $('.openModal002').hover(function(){
    $(this).stop().animate({"opacity":"0.7"},200);
      
  },function() {
    $(this).stop().animate({"opacity":"1"},200);
  });
    $('.link').hover(function(){
    $(this).stop().animate({"opacity":"0.7"},200);
      
  },function() {
    $(this).stop().animate({"opacity":"1"},200);
  });
});

/*追記-スマホ版トップ画面調整-------------------------------------------------*/
$(window).on('load resize' , function(){
  if (window.matchMedia('(max-width: 1024px)').matches) {
  var windowHeight = $(window).height();
  console.log(windowHeight);
  var heightMenu = $('#shiori-box').height();
  console.log(heightMenu);
  originalHeight = windowHeight - heightMenu;
  $('#slash-01').css('height' , originalHeight);
  }
});
