(function () {
    if (window.location.search.includes("debug")) {
      var script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/eruda";
      document.body.appendChild(script);
      script.onload = function () {
        eruda.init();
      };
    }
  })();
