
$(document).ready(function()
{
  var tometo= $('#tometo');
var shape= $('#shape-5');
var shape_7= $('#shape-7');
var shape_4= $('#shape-4');
var shape_h2_5= $('#h2_shape-5');

var layer= $('#main');

layer.mousemove(function(e){
  var ivalueX= (e.pageX * -1 / 30);
  var ivalueY= (e.pageY * -1 / 30);
  var cvalueX= (e.pageX * -1 / 40);
  var cvalueY= (e.pageY * -1 / 60);
/*   console.log('ok'); */
  tometo.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
  shape.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
  shape_7.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
  shape_4.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
  shape_h2_5.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
});

})
var rellax = new Rellax('.rellax');

$(".j-click").click(function()
{
  $(".login-container").addClass("new-j-click");
})
$(document).on("click", function(event){
  var $trigger = $(".j-click");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".login-container").removeClass("new-j-click");
  }            
});
