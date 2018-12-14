
/* global $ */

$(document).ready(function() {
  // DOMの読み込みが完了したタイミング
  
  $('.accordion-title a').click(function() {
    var $content = $(this).closest('section').find('.accordion-content');
    
    if(!$content.is(':visible')) {
      // クリックされた要素がまだ表示されていないとき
      
      // 表示中の要素すべてを畳む
      $('.accordion-content:visible').slideUp();
      
      // 対象のコンテンツを開く
      $content.slideDown();
    }
    
    return false;
  });
});

window.onload = function() {
  // ページ内のすべての外部CSSや画像の読み込みが完了したタイミング
};

