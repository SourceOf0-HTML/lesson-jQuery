
/* global $, Image */

var initialSize = 60;   // 画像ロード中の表示エリアサイズ(px)
var padding = 100;      // 拡大表示時にウインドウの端に開ける距離(px)
var animDuration = 300; // アニメーション時間(ms)

/*
  img要素を表示する
  @param image要素
*/
function showImage(img) {
  /* ウインドウサイズ取得 */
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  
  /* アスペクト比算出 */
  var windowAspectRatio = windowWidth / windowHeight;
  var imageAspectRatio = img.width / img.height;
  
  /* 表示サイズ算出 */
  var dispWidth;
  var dispHeight;
  if(windowAspectRatio > imageAspectRatio) {
    // 画像の方が縦長いとき
    dispHeight = windowHeight - padding;
    dispWidth = dispHeight * imageAspectRatio;
  } else {
    // 画像の方が横長いとき
    dispWidth = windowWidth - padding;
    dispHeight = dispWidth / imageAspectRatio;
  }
  
  $(img).css({
    'width': dispWidth + 'px',
    'height': dispHeight + 'px',
    'display': 'none',
  });
  
  // 拡大アニメーション
  $('.popup-content').html(img).animate({
    'width': dispWidth + 'px',
    'height': dispHeight + 'px',
    'margin-left': -dispWidth / 2 + 'px',
    'margin-top': -dispHeight / 2 + 'px',
  }, animDuration, "swing", function() {
    // アニメーション終了後
    $(img).fadeIn(animDuration);
  });
}

/*
  指定されたURLの画像をポップアップで表示
  @param imageUrl 画像のURL
*/
function showPopup(imageUrl) {
  // 初期化
  $('.popup-content').html('').css({
    'width': initialSize,
    'height': initialSize,
    'margin-left': -initialSize / 2 + 'px',
    'margin-top': -initialSize / 2 + 'px',
  });

  $('.overlay').fadeIn(animDuration);
  
  var img = new Image();
  img.onload = function() {
    // 画像のロードが終わった後
    showImage(img);
  }
  // 画像のURLをセット（ロード開始）
  img.src = imageUrl;
}

// ポップアップを閉じる
function closePopup() {
  $('.overlay').fadeOut(animDuration);
}

$(document).ready(function() {
  // DOMの読み込みが完了したタイミング
  
  $('.popup').click(function() {
    // ポップアップの要素がクリックされたとき
    showPopup($(this).attr('href'));
    return false;
  });
  
  $('.overlay').click(function() {
    closePopup();
    return false;
  });
});

window.onload = function() {
  // ページ内のすべての外部CSSや画像の読み込みが完了したタイミング
};

