window.addEventListener('load', (event) => {
  const filter = "PTHCRY| ";
  const path = window.location.pathname;
  const slug = path.split("/");

  slug.shift();

  /*
    if (slug[0] === "range" || slug[0] === "store") {
      document.body.classList.add("path-" + slug[0]);
    }
  */

  document.body.classList.add("path-" + slug[0]);

  const gallery = document.querySelector("a[href='/range/gallery']");
  if (gallery) {
    gallery.href = "/gallery";
  }
});