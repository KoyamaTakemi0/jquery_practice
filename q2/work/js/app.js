// idは「#id名」classは「.class名」で指定

// フェードイン
$(".modal_open_button").on('click', function(){
  $(".modal_win").fadeIn(500);
});
// フェードアウト
$(".modal_close_button").on('click', function(){
  $(".modal_win").fadeOut(500);
});