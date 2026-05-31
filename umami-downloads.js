document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href$=".pdf"]').forEach(function (link) {
    if (!link.dataset.umamiEvent) {
      link.dataset.umamiEvent = "file-download";
      link.dataset.umamiEventFile = decodeURIComponent(
        link.href.split("/").pop().split("?")[0]
      );
    }
  });
});
