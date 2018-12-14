
/* global $ */

var slideWidth = 400;  // スライド1枚の幅(px)
var currentSlide = 0;  // 現在表示中のスライドのindex
var numSlides;          // スライド総枚数

/*
  指定されたindexのスライドを表示
  @param index 表示したいスライドのindex
*/
function showSlide(index) {
  if(index === 0) {
    // 最初のスライドのときだけ１枚戻す矢印を非表示にする
    $('.carousel-control-prev').hide();
  } else {
    $('.carousel-control-prev').show();
  }

  if(index === numSlides - 1) {
    // 最後のスライドのときだけ１枚進める矢印を非表示にする
    $('.carousel-control-next').hide();
  } else {
    $('.carousel-control-next').show();
  }
  
  /* スライドアニメーション */
  $('.slides').stop().animate({
    left: -slideWidth * currentSlide + 'px',
  }, 600);  // 600ms
}


$(document).ready(function() {
  // DOMの読み込みが完了したタイミング
  
  // 初期化
  numSlides = $('.slides > li').length;  // スライドの総枚数取得
  
  // 矢印が押された際のページめくり
  $('.carousel-control-prev').click(function() {
    currentSlide--;
    showSlide(currentSlide);
    return false;
  });
  $('.carousel-control-next').click(function() {
    currentSlide++;
    showSlide(currentSlide);
    return false;
  });
});

window.onload = function() {
  // ページ内のすべての外部CSSや画像の読み込みが完了したタイミング
};

