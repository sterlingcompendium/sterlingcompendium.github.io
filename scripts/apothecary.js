window.addEventListener('load', (event) => {
  const filter = "PTHCRY| ";
  const path = window.location.pathname;
  const slug = path.split("/");

  slug.shift();

  // console.log(filter + path);
  console.log({
    filter: slug,
    path: path
  });

  if (slug[0] === "range") {
    document.body.classList.add("slug-" + slug[1]);
  } else if (path === "/store") {
    document.body.classList.add("path-store");
  }

  const gallery = document.querySelector("a[href='/range/gallery']");
  if (gallery) {
    gallery.href = "/gallery";
  }
});