$(function() {
  var canvas = document.getElementById('canvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');

  var startX,
      startY,
      x,
      y,
      borderWidth = 10;

  $('canvas').mousedown(function(e) {
    startX = e.pageX - $(this).offset().left - borderWidth;
    startY = e.pageY - $(this).offset().top - borderWidth;
  })
  .mousemove(function(e) {
    x = e.pageX - $(this).offset().left - borderWidth;
    y = e.pageY - $(this).offset().top - borderWidth;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(x, y);
    ctx.stroke();
    startX = x;
    startY = y;
  });
});
