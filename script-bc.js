function autoVideo(selector) {
  var video = document.querySelector(selector)

  var timer = setInterval(function () {
    var top = video.getBoundingClientRect().top
    if (top > 0 && top < 1000) {
      video.play()
      clearInterval(timer)
    }
  }, 500)
}

// autoVideo('#p-1')
// autoVideo('#p-2')
// autoVideo('#p-3')
// autoVideo('#video1')
// autoVideo('#video2')
// autoVideo('#video3')

function videoRealPlay(obj) {
  var videoOri = document.querySelector(`#${obj.ori}`)
  var videoReal = document.querySelector(`#${obj.real}`)
  videoOri.addEventListener('click', function () {
    videoReal.play()
    videoReal.style.visibility = 'visible'
  })

  videoReal.addEventListener('click', function () {
    videoReal.pause()
    videoReal.style.visibility = 'hidden'
  })
}

videoRealPlay({ori: 'p-1', real: 'p1r'})
videoRealPlay({ori: 'p-2', real: 'p2r'})
videoRealPlay({ori: 'p-3', real: 'p3r'})

var images = document.querySelectorAll('.big img')
for (var i = 0;i< images.length;i++){
  (function (j) {
    var dom = images[j]
    
    dom.addEventListener('click', function () {
      if (dom.className === 'big home-video') {
        dom.className = 'big'
      } else {
        // new PinchZoom(dom)
        dom.className = 'big home-video'
      }
    })
  })(i)
}


var header = document.querySelector('.header')
header.addEventListener('click', function () {
  document.body.scrollIntoView()
})

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