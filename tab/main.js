
/* global $ */

/* @param selector 表示するコンテンツのidのセレクタ */
function showTab(selector) {
  $('.tabs-menu li').removeClass('active');
  $('.tabs-menu a[href="' + selector + '"]').parent('li').addClass('active');
  
  $('.tabs-content > section').hide();
  $(selector).show();
}

$(document).ready(function() {
  // DOMの読み込みが完了したタイミング
  
  // 初期化
  showTab('#tabs-1');
  
  $('.tabs-menu a').click(function() {
    var selector = $(this).attr('href');
    showTab(selector);
    return false;
  });
});

window.onload = function() {
  // ページ内のすべての外部CSSや画像の読み込みが完了したタイミング
};

