window.addEventListener('DOMContentLoaded', (event) => {
  const filter = "PTHCRY| ";
  const pathname = window.location.pathname;
  let path = pathname.substr(1);
  const paths = ["store", "trade"];
  const untested = ["classic-shampoo", "classic-conditioner", "deep-cleanse", "brilliant-cream"];
  const slug = path.split("/");

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

  if (slug[2]) {
    if (untested.contains(slug[2])) {
      document.body.classList.add("product-sans");
    }
  }

  if (paths.contains(path)) {
    document.body.classList.add("header-light");
  }
});

window.addEventListener('load', (event) => {
  const gallery = document.querySelector("a[href='/range/gallery']");

  if (gallery) {
    gallery.href = "/gallery";
  }
});