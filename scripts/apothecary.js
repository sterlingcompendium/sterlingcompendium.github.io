window.addEventListener('load', (event) => {
  const filter = "PTHCRY| ";
  const pathname = window.location.pathname;
  const path = pathname.substr(1);
  const slug = path.split("/");

  slug.shift();

  document.body.classList.add("path-" + path);
  document.body.classList.add("slug-" + slug[0]);

  const gallery = document.querySelector("a[href='/range/gallery']");
  if (gallery) {
    gallery.href = "/gallery";
  }
});