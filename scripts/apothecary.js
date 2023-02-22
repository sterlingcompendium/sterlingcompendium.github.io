window.addEventListener('load', (event) => {
  const path = window.location.pathname;
  const slug = path.split("/");
  slug.shift();

  if (slug[0] === "range") {
    document.body.classList.add("slug-" + slug[1]);
  }

  const gallery = document.querySelector("a[href='/range/gallery']");
  if (gallery) {
    gallery.href = "/gallery";
  }
});