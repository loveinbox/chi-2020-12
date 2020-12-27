// new PinchZoom(document.querySelector('#test'))
var test = document.querySelector('#test')

//创建一个新的hammer对象并且在初始化时指定要处理的dom元素
var hammertime = new Hammer(test);
//var hammertime = new Hammer(document.getElementById("test"));
hammertime.get('pinch').set({ enable: true });
hammertime.add(new Hammer.Pinch());

hammertime.on("pinchout", function (e) {
  var W = $("#testimg").width();
  var H = $("#testimg").height();
  var scale = 2;
  var mouseX=e.center.x;//捏开点
  var mouseY=e.center.y;

  if($("#test").attr("data-scale")==1){
      var translateX=0;
      var translateY=0;
      //计算当前点击点相对于图片的偏移比例
      var posX = mouseX/W;
      var posY = mouseY/H;
      translateX= (W * posX / scale) * -1;
      translateY= (H * posY / scale) * -1;
      
      $("#test").css("transformOrigin","0% 0%");
      $("#test").css("transform","scale(2,2) translate("+translateX+"px, "+translateY+"px)");
      $("#test").attr("data-x",translateX);
      $("#test").attr("data-y",translateY);
      $("#test").attr("data-scale",2);
  }

});