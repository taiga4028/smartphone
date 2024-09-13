$(function () {
  // ハンバーガーメニューをクリックした時
  $(".toggle").on("click", function () {
    $("header").toggleClass("open");
  });
  // ヘッダーに対してopenクラスを付与
  // openクラスがついているときはopenクラスを削除
  // toogleClassメソッドはその両方を行う
});