var index = $('.page-index')
var manifesto = $('.page-manifesto')
var menu = $('.page-contents')
var pageItem = $('.page-li')

// 首页
index.click(function () {
  index.fadeOut()
  manifesto.show()
  menu.show()
  pageItem.hide()
})

// manifesto
manifesto.click(function () {
  manifesto.fadeOut()
  menu.show()
  pageItem.hide()
})

// 功能按钮
var backToIndex = $('.js-back-index')
var backToMenu = $('.js-back-menu')
backToIndex.click(function () {
  index.show()
  manifesto.show()
  pageItem.hide()
})
backToMenu.click(function () {
  index.hide()
  manifesto.hide()
  menu.show()
  pageItem.hide()
})

// 各页面
for(var counter = 1;counter <= 9;counter++){
  (function(cc) {
    $(`.js-menu-${cc}`).click(function () {
      menu.hide()
      pageItem.show()
      $(`.js-content-${cc}`).get(0).scrollIntoView()
    })
  })(counter)
}














/* 滑动 */
// var min_horizontal_move = 30;
// var max_vertical_move = 30;
// var within_ms = 1000;

// var start_xPos;
// var start_yPos;
// var start_time;
// function touch_start(event) {
//     start_xPos = event.touches[0].pageX;
//     start_yPos = event.touches[0].pageY;
//     start_time = new Date();
// }

// function touch_end(event) {
//     var end_xPos = event.changedTouches[0].pageX;
//     var end_yPos = event.changedTouches[0].pageY;
//     var end_time = new Date();
//     let move_x = end_xPos - start_xPos;
//     let move_y = end_yPos - start_yPos;
//     let elapsed_time = end_time - start_time;
//     if (Math.abs(move_x) > min_horizontal_move && Math.abs(move_y) < max_vertical_move && elapsed_time < within_ms) {
//         if (move_x < 0) {
//           $(this).fadeOut()
//           $('.page-contents').show()
//           $('.page-li').show()
//         } else {
//             //alert("right");
//         }
//     }
// }

// var content = $('.page-manifesto').get(0)
// content.addEventListener('touchstart', touch_start);
// content.addEventListener('touchend', touch_end);

/* 滑动 */