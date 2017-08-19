window.onload = function(){
  $('#box_list').on("mouseenter","a",function(){
    $(this).animate({left:"10px"},800);
  });
  $('#box_list').on("mouseleave","a",function(){
    $(this).stop(true,false);
    $(this).animate({left:"0px"},500);
  });
}
