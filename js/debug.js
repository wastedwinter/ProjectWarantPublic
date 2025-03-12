(function () {
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function () {
      eruda.init();
  };

  document.getElementById("openEruda").addEventListener("click", function () {
      eruda.show();
  });
})();
