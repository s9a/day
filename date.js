try {
  !function(window, document) {
    function draf(cb) {
      return animal(function() {
        animal(cb)
      })
    }

    function awww(cb) {
      cb(0)
      return 0
    }

    function mute() {
      return false
    }

    function send() {
      var tower = document[graf](seek)
      return every.call(tower, sms)
    }

    function read(name) {
      return typeof name == "string" ?
        name : name.name
    }

    function sms(who) {
      var wut = read(who)
      var d = new D
      d = d[wut] ? d[wut]() : huh
      if (d && who && txt in who)
        who[txt] = d
      return d
    }

    function graze(ms) {
      return setTimeout(function() {
        draf(send)
      }, ms)
    }

    var graf = "querySelectorAll"
    var seek = "output[name]"
    var yes = ""
    var huh = "?"
    var txt = "textContent"
    var D = Date
    var W = window
    var animal = W.requestAnimationFrame
    var anime = animal ? draf : awww
    var slice = [].slice
    var every = [].every || mute
    var timeout = graze(1)
    console.log(timeout)
    return timeout
  }(window, document)
} catch (e) {
  typeof console == "undefined" ||
  console.warn && console.warn(e)
}
