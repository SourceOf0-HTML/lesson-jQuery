
/* global $ */

var speed = 3;   // 背景スクロール速度（数字が小さいほど早い）
var slideHeight; // スライド1枚の高さ

// パララックス適用
function showParallax() {
  var scrollTop = $(window).scrollTop();
  
  $('.parallax-section').each(function(index) {
    var pos = Math.round((slideHeight * index - scrollTop) / speed);
    $(this).css({
      'background-position': 'center ' + pos + 'px',
    });
  });
}

// パララックス初期化
function initParallax() {
  slideHeight = $(window).height();  // ウインドウの高さをスライドの高さとする
  showParallax();
}


$(window).resize(function() {
  // 画面をリサイズしたタイミング
  initParallax();  // パララックス初期化
});

$(document).ready(function() {
  // DOMの読み込みが完了したタイミング
  
  initParallax();
  $(window).scroll(showParallax);  // スクロール毎に表示更新
});

window.onload = function() {
  // ページ内のすべての外部CSSや画像の読み込みが完了したタイミング
};
