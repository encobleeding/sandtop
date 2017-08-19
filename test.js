const http = require("http")
const fs = require("fs")
const url = require('url');
const path = require('path');
const querystring = require("querystring");
//var mime = require('mime');

http.createServer(function(req,res){
  console.log(req.url);
  if(req.url == "/"){
    fs.readFile("./new/index.html",function (error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/works.html"){
    fs.readFile("./new/works.html",function (error,data){
      res.end(data.toString());
    })
  }

  if(req.url == "/js/vendor/OwlCarousel2-2.2.1/dist/assets/owl.carousel.min.css"){
    fs.readFile("./new/js/vendor/OwlCarousel2-2.2.1/dist/assets/owl.carousel.min.css",function (error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/js/vendor/OwlCarousel2-2.2.1/dist/assets/owl.theme.default.min.css"){
    fs.readFile("./new/js/vendor/OwlCarousel2-2.2.1/dist/assets/owl.theme.default.min.css",function (error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/js/vendor/jquery.min.js"){
    fs.readFile("./new/js/vendor/jquery.min.js",function (error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/js/vendor/jquery.min.js"){
    fs.readFile("./new/js/vendor/jquery.min.js",function (error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/news.html"){
    fs.readFile("./new/news.html",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/index.html"){
    fs.readFile("./new/index.html",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/news_com.html"){
    fs.readFile("./new/news_com.html",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/news_content.html"){
    fs.readFile("./new/news_content.html",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/news_world.html"){
    fs.readFile("./new/news_world.html",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/css/main.css"){
    fs.readFile("./new/css/main.css",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/js/news.js"){
    fs.readFile("./new/js/news.js",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/js/vendor/OwlCarousel2-2.2.1/dist/owl.carousel.min.js"){
    fs.readFile("./new/js/vendor/OwlCarousel2-2.2.1/dist/owl.carousel.min.js",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/js/main.js"){
    fs.readFile("./new/js/main.js",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/js/Ajax.js"){
    fs.readFile("./new/js/Ajax.js",function(error,data){
      res.end(data.toString());
    })
  }
  if(req.url == "/img/small_banner1.jpg"){
    fs.readFile("./new/img/small_banner1.jpg",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/img/banner1.jpg"){
    fs.readFile("./new/img/banner1.jpg",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/img/banner2.jpg"){
    fs.readFile("./new/img/banner2.jpg",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/img/banner3.jpg"){
    fs.readFile("./new/img/banner3.jpg",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/img/banner4.jpg"){
    fs.readFile("./new/img/banner4.jpg",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/img/123.jpg"){
    fs.readFile("./new/img/123.jpg",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/news_list"){
    fs.readFile("./jsonNewsList.json",function(error,data){
      res.writeHead(200,{"Content-Type":"text/json"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/ComNews_list"){
    fs.readFile("./jsonComList.json",function(error,data){
      res.writeHead(200,{"Content-Type":"text/json"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/works_list"){
    fs.readFile("./works.json",function(error,data){
      res.writeHead(200,{"Content-Type":"text/json"});
      res.write(data);
      res.end();
    })
  }
  if(req.url == "/WorldNews_list"){
    fs.readFile("./jsonWorldList.json",function(error,data){
      res.writeHead(200,{"Content-Type":"text/json"});
      res.write(data);
      res.end();
    })
  }

  fs.readFile("./jsonAbout.json",function(error,data){
    var b = JSON.parse(data);
    var a = querystring.parse(req.url,"?");
    console.log(a);
     if(a.about = 'about'){
       if(a.aboutPage == 1 ){
         console.log(1);
         var html = b.about[a.aboutPage-1].html;
         fs.writeFile('./new/news_content.html', html);
         fs.readFile('./new/news_content.html','utf8',function(error,data){
               //console.log(data);
               res.end(data.toString());
          })
       }
     }
  })

  fs.readFile("./jsonNews.json",function(error,data){
    var b = JSON.parse(data);
    var a = querystring.parse(req.url,"?");
    //console.log(a);
    if(a.page !=undefined){
      if(a.news ==1){
        var html = b.news_content[a.page-1].html;
        //console.log(html);
        fs.writeFile('./new/news_content.html', html);
        fs.readFile('./new/news_content.html','utf8',function(error,data){
          //console.log(data);
          res.end(data.toString());
        })
      }
    }
  })
  fs.readFile("./jsonComNews.json",function(error,data){
    var b = JSON.parse(data);
    var a = querystring.parse(req.url,"?");
    //console.log(a);
    if(a.page !=undefined){
      if(a.news ==2){
        var html = b.news_content[a.page-1].html;
        //console.log(html);
        fs.writeFile('./new/news_content.html', html);
        fs.readFile('./new/news_content.html','utf8',function(error,data){
          //console.log(data);
          res.end(data.toString());
        })
      }
    }
  })
  fs.readFile("./jsonWorldNews.json",function(error,data){
    var b = JSON.parse(data);
    var a = querystring.parse(req.url,"?");
    //console.log(a);
    if(a.page !=undefined){
      if(a.news ==3){
        var html = b.news_content[a.page-1].html;
        //console.log(html);
        fs.writeFile('./new/news_content.html', html);
        fs.readFile('./new/news_content.html','utf8',function(error,data){
          //console.log(data);
          res.end(data.toString());
        })
      }
    }
  })
  if(req.url.indexOf('/img/workpic/') > -1){
    //console.log(666);
    var arrImg = req.url.split("");
    //console.log(arrImg[arrImg.length-5]);
    fs.readFile("./new/img/workpic/"+arrImg[arrImg.length-5]+".jpg",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }

  if(req.url.indexOf('/img/work1/ppt/') > -1){
    //console.log(666);
    var arrImg1 = req.url.split("");
    arrImg1.splice(0,15);
    console.log(arrImg1.join(""));
    if(arrImg1.length==5){
      var num1 = arrImg1[0];
    }
    if(arrImg1.length==6){
      var num1 = parseInt(arrImg1.join(""));
    }
    if(arrImg1.length>=7){
      var num1 = parseInt(arrImg1.join(""));
    }
    //console.log(arrImg);
    fs.readFile("./new/img/work1/ppt/"+num1+".JPG",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }

  if(req.url.indexOf('/img/work2/ppt/') > -1){
    console.log(666);
    var arrImg2 = req.url.split("");
    arrImg2.splice(0,15);
    console.log(arrImg2.join(""));
    if(arrImg2.length==5){
      var num2 = arrImg2[0];
    }
    if(arrImg2.length==6){
      var num2 = parseInt(arrImg2.join(""));
    }
    if(arrImg2.length>=7){
      var num2 = parseInt(arrImg2.join(""));
    }
    //console.log(arrImg);
    fs.readFile("./new/img/work2/ppt/"+num2+".JPG",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }
  if(req.url.indexOf('/img/work3/ppt/') > -1){
    console.log(666);
    var arrImg3 = req.url.split("");
    arrImg3.splice(0,15);
    console.log(arrImg3.join(""));
    if(arrImg3.length==5){
      var num3 = arrImg3[0];
    }
    if(arrImg3.length==6){
      var num3 = parseInt(arrImg3.join(""));
    }
    if(arrImg3.length>=7){
      var num3 = parseInt(arrImg3.join(""));
    }
    //console.log(arrImg);
    fs.readFile("./new/img/work3/ppt/"+num3+".JPG",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }
  if(req.url.indexOf('/img/work1/newspic/') > -1){
    //console.log(666);
    var arrImgW1 = req.url.split("");
    arrImgW1.splice(0,19);
    console.log(arrImgW1.join(""));
    if(arrImgW1.length==5){
      var numW1 = arrImgW1[0];
    }
    if(arrImgW1.length==6){
      var numW1 = parseInt(arrImgW1.join(""));
    }
    if(arrImgW1.length>=7){
      var numW1 = parseInt(arrImgW1.join(""));
    }
    //console.log(arrImg);
    fs.readFile("./new/img/work1/newspic/"+numW1+".JPG",function(error,data){
      res.writeHead(200,{"Content-Type":"image/jpg"});
      res.write(data);
      res.end();
    })
  }

  if(req.url.indexOf('/worksPage') > -1){
    //console.log(req.url);
    var arrHTML = req.url.split("");
    //console.log(arrImg[arrImg.length-5]);

    fs.readFile("./new/worksPage"+arrHTML[arrHTML.length-6]+".html",function(error,data){
      //console.log(6666);
      res.end(data.toString());
    })
  }
}).listen(5000);
