(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalcFun = function () {
    var clientWidth = docEl.clientWidth
    docEl.style.fontSize = 16 * (clientWidth / win.designBaseWidth) + 'px'
    // for dpr=2.xx -> 2, dpr=3.xx -> 3
    docEl.setAttribute('data-dpr', Math.floor(window.devicePixelRatio))
  }
  recalcFun()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvent, recalcFun, false)
})(document, window)
