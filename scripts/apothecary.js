window.addEventListener('load', (event) => {
  const filter = "PTHCRY| ";
  const pathname = window.location.pathname;
  let path = pathname.substr(1);
  const slug = path.split("/");
  const gallery = document.querySelector("a[href='/range/gallery']");

  if (!slug[0]) {
    console.log(filter + slug[0])
    slug.shift();
  }

  if (path.indexOf("/")) {
    path = slug[0];
  } else if (path == undefined) {
    path = "range";
  }

  document.body.classList.add("path-" + path);

  if (slug[1]) {
    document.body.classList.add("slug-" + slug[1]);
  }

  if (gallery) {
    gallery.href = "/gallery";
  }
});