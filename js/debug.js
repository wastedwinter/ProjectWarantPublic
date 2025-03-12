(function () {
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function () {
      eruda.init();
  };

  let keysPressed = new Set();

  document.addEventListener('keydown', function (event) {
      keysPressed.add(event.key);
      if (keysPressed.has("\\") && keysPressed.has(";")) {  // Backslash + Semicolon
          if (eruda._isInit) {
              eruda.toggle();
          } else {
              eruda.init();
          }
      }
  });

  document.addEventListener('keyup', function (event) {
      keysPressed.delete(event.key);
  });
})();
