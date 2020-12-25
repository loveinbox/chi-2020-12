function autoVideo() {
  var video = document.querySelector(selector)

  var timer = setInterval(function () {
    var top = video.getBoundingClientRect().top
    if (top > 0 && top < 1000) {
      video.play()
      clearInterval(timer)
    }
  }, 500)
}