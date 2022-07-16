try {
  !function(window, document) {
    var free // undefined
    var data = "data-day"
    var dome = document.documentElement
    var graf = "querySelector"
    var lang = dome.lang || free
    var anima = window.requestAnimationFrame
    var anime = anima ? draf : function() {}
    var get = "getAttribute"
    var set = "setAttribute"
    var put = "output[name=day]"
    var txt = "textContent"

    function draf(cb) {
      return anima(function() {
        anima(cb)
      })
    }

    function day(d) {
      return (d || new Date).getDay()
    }

    function db(el, fresh) {
      if (!el) return false
      var dataset = el.dataset
      if (!dataset) return false
      var found = dataset.day
      if (found == fresh) return "found"
      dataset.day = fresh
      return "fresh"
    }

    function sms(el, fresh) {
      if (!el) return false
      var tower = txt in el
      if (!tower) return false
      var found = el[txt]
      if (found === fresh) {
        return "found"
      }
      el[txt] = fresh
      return "fresh"
    }

    function update() {
      console.log("...")
      var i = day()
      var out = document[graf](put)
      console.log(db(dome, i))
      console.log(sms(out, i))
    }

    function graze(ms) {
      return setTimeout(function() {
        update()
        setTimeout(graze, ms)
      }, 0)
    }

    graze(1000)
  }(window, document)
} catch (e) {
  try {
    console.warn(e)
  } catch (e) {}
}
