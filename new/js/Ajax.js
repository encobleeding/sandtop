function ajax(data){
  //data = {data:"",dataType:"xml/json",type:"get/post",url:"",asyn:"true/false",success:function(){},failure:function(){}}
  var xhr = null;
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  }else{
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  var type = data.type == 'get'?'get':'post';
  var url = '';
  if(data.url){
    url = data.url;
    if(type == 'get'){
      url += "?"+data.data + "&_t="+new Date().getTime();
    }
  }
  var flag = data.asyn == 'true'?'true':'false';
  xhr.open(type,url,flag);
  if(type == 'get'){
    xhr.send(null);
  }else if(type == 'post'){
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(data.data);
  }

  xhr.onreadystatechange = function(){
    if(this.readyState == 4){
      if(this.status == 200){
        if(typeof data.success == 'function'){
          var d = data.dataType == 'xml'?xhr.responseXML:xhr.responseText;
          data.success(d);
        }
      }else {
        if(typeof data.failure == 'function'){
          data.failure();
        }
      }
    }
  }
}
//alert(1111);
