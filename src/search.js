(function () {
  var input = document.getElementById("search");
  var items = document.querySelectorAll("#entries > li");
  if (!input) return;

  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    var heading = null;
    var headingHasMatch = false;

    items.forEach(function (item) {
      if (item.classList.contains("date-heading")) {
        if (heading) heading.classList.toggle("hidden", !headingHasMatch);
        heading = item;
        headingHasMatch = false;
        return;
      }
      var match =
        !q ||
        item.dataset.title.indexOf(q) !== -1 ||
        item.dataset.body.indexOf(q) !== -1;
      item.classList.toggle("hidden", !match);
      if (match) headingHasMatch = true;
    });
    if (heading) heading.classList.toggle("hidden", !headingHasMatch);
  });
})();
