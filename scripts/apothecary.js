window.addEventListener('load', (event) => {
  const filter = "PTHCRY| ";
  const pathname = window.location.pathname;
  const path = pathname.substr(1);
  const slug = path.split("/");
  const gallery = document.querySelector("a[href='/range/gallery']");

  slug.shift();

  if (path.indexOf("/")) {
    path = slug[0];
  }

  document.body.classList.add("path-" + path);

  if (slug[0]) {
    document.body.classList.add("slug-" + slug[0]);
  }

  if (gallery) {
    gallery.href = "/gallery";
  }
});