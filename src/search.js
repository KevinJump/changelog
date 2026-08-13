(function () {
  var input = document.getElementById("search");
  var entries = document.querySelectorAll("#entries .entry");
  if (!input) return;

  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    entries.forEach(function (entry) {
      var match =
        !q ||
        entry.dataset.title.indexOf(q) !== -1 ||
        entry.dataset.body.indexOf(q) !== -1;
      entry.classList.toggle("hidden", !match);
    });
  });
})();
