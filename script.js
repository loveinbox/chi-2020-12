// 视频播发源
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

// 图片放大
var images = document.querySelectorAll('.big')
for (var i = 0;i< images.length;i++){
  (function (j) {
    var dom = images[j]
    
    dom.addEventListener('click', function () {
      var domC = dom.cloneNode(true)
      domC.className = 'big home-video temp'
      document.body.appendChild(domC)
      // panzoom(domC.querySelector('img'), {
      //   maxZoom: 2,
      //   minZoom: 1,
      // })
      setTimeout(function () {
        var domT = document.querySelector('.temp')
        document.body.addEventListener('click', function () {
          domT.remove()
        })
      }, 0)
    })
  })(i)
}

// 回到头部
var header = document.querySelector('.header')
header.addEventListener('click', function () {
  document.body.scrollIntoView()
})