$(function() {
  $("#counter").click(function() {
    var value = +$(this).text();
    value++;
    $(this).text('' + value);
  });
});