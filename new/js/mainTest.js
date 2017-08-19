window.onload = function(){
  var box = document.getElementById('box');
  var list = document.getElementById('list');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var timer = null;
  var key = 0;
  var point = 0;
  var imgList = list.children;
  list.appendChild(list.children[0].cloneNode(true));
  console.log(screen.availWidth);
  list.style.width = 5*screen.availWidth+'px';
  for(var i=0;i<imgList.length;i++){
    imgList[i].style.width = screen.availWidth + 'px';
  }
  //console.log(imgList);
  //imgList[0].style.width = screen.availWidth;
  var ol = document.createElement("ol");
  box.appendChild(ol);
  for(var i=0;i<imgList.length-1;i++){
    var li = document.createElement("li");
    ol.appendChild(li);
  }
  ol.children[0].className = "on";
  list.onmouseenter = function(){
    clearInterval(timer);
    prev.style.display = 'block';
    next.style.display = 'block';
  }
  list.onmouseout = function(){
    //console.log(timer);
      clearInterval(timer);
      timer = setInterval(autoplay,5000);
      prev.style.display = 'none';
      next.style.display = 'none';
    //console.log(timer);

  }
  function animate(obj,target){
    clearInterval(obj.timer);
    var speed = obj.offsetLeft < target ? 15:-15;
    obj.timer = setInterval(function(){
      var result = target - obj.offsetLeft;
      obj.style.left = obj.offsetLeft + speed +"px";
      if(Math.abs(result)<=15){
        clearInterval(obj.timer);
        obj.style.left = target + "px";
      }
    },20)
  }
  var btnList = ol.children;
  for(var i=0;i<btnList.length;i++){
    btnList[i].index = i;
    btnList[i].onmouseover = function(){
      for(var j=0;j<btnList.length;j++){
        btnList[j].className = "";
        clearInterval(timer);
        prev.style.display = 'block';
        next.style.display = 'block';
      }
      this.className = "on";
      animate(list,-this.index*(screen.availWidth));
      point = key = this.index;
    }
  }
  timer = setInterval(autoplay,5000);
  function autoplay(){
    key++;
    if(key>imgList.length-1){
      list.style.left = 0;
      key = 1;
    }
    animate(list,-key*(screen.availWidth));
    point++;
    if(point>btnList.length-1){
      point =0;
    }
    for(var i=0;i<btnList.length;i++){
      btnList[i].className = "";
    }
    btnList[point].className = "on";
  }

  next.onclick = function (){
    key++;
    if(key>imgList.length-1){
      list.style.left = 0;
      key = 1;
    }
    animate(list,-key*(screen.availWidth));
    point++;
    if(point>btnList.length-1){
      point =0;
    }
    for(var i=0;i<btnList.length;i++){
      btnList[i].className = "";
    }
    btnList[point].className = "on";
  }
  prev.onclick = function (){
    key--;
    if(key<0){
      //alert(12);
      list.style.left = -(btnList.length)*(screen.availWidth)+"px";
      key = btnList.length-1;
    }
    animate(list,-key*(screen.availWidth));
    point--;
    if(point<0){
      point =btnList.length-1;
    }
    for(var i=0;i<btnList.length;i++){
      btnList[i].className = "";
    }
    btnList[point].className = "on";
  }
}
