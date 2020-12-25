function autoVideo(selector) {
  var video = document.querySelector(selector)

  var timer = setInterval(function () {
    var top = video.getBoundingClientRect().top
    if (top > 0 && top < 1000) {
      video.play()
      console.log(123)
      clearInterval(timer)
    }
  }, 500)
}

autoVideo('#video1')
autoVideo('#video2')


var header = document.querySelector('.header')
header.addEventListener('click', function () {
  document.body.scrollIntoView()
})