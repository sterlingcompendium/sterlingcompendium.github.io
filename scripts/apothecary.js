window.addEventListener('load', (event) => {
  const filter = "PTHCRY| ";
  const pathname = window.location.pathname;
  let path = pathname.substr(1);
  const paths = ["store", "trade"];
  const slug = path.split("/");
  const gallery = document.querySelector("a[href='/range/gallery']");

  if (!slug[0]) slug.shift();

  if (path.indexOf("/") !== -1) {
    path = slug[0];
  } else if (!path) {
    path = "range";
  }

  document.body.classList.add("path-" + path);

  if (slug[1]) {
    document.body.classList.add("slug-" + slug[1]);
  }

  if (paths.contains(path)) {
    document.body.classList.add("header-light");
  } else {
    alert(path)
  }

  if (gallery) {
    gallery.href = "/gallery";
  }
});