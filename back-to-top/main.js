
/* global $ */

function updateButton() {
  if($(this).scrollTop() >= 300) {
    // 300px以上スクロールしたとき
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
}

$(document).ready(function() {
  // DOMの読み込みが完了したタイミング
  updateButton();
  
  // スクロールされる度にupdateButtonを実行
  $(window).scroll(updateButton);
  
  // ボタンをクリックしたらページトップへスクロール
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0,
  //  scrollTop: $("#contents").offset().top, // d="contents"までスクロール
    }, 600);  // 600ms 
    return false; // リンクページへの遷移を行わない
  });
});

window.onload = function() {
  // ページ内のすべての外部CSSや画像の読み込みが完了したタイミング
};

