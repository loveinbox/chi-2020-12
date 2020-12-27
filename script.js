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


var header = document.querySelector('.header')
header.addEventListener('click', function () {
  document.body.scrollIntoView()
})