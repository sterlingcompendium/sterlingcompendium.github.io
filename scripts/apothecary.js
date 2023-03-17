const filter = "PTHCRY| ";

window.addEventListener('DOMContentLoaded', (event) => {
  const pathname = window.location.pathname;
  let path = pathname.substr(1);
  const slug = path.split("/");
  const paths = ["store", "trade"];
  const sans = ["classic-shampoo", "classic-conditioner", "deep-cleanse", "brilliant-cream"];

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
    const slugs = slug[2].split("-");
    const slugged = [slugs[0], slugs[1]].join("-");

    if (sans.contains(slugged)) {
      document.body.classList.add("product-sans");
    }
  }

  if (paths.contains(path)) {
    document.body.classList.add("header-light");
  }
});

const control = ".product-item-gallery-carousel-control";

document.querySelectorAll(control).forEach(element => element.addEventListener('click', function(event) {
  focusThumbnail();
}));

function focusThumbnail() {
  const focusable = ".ProductItem-gallery-thumbnails-item";
  const focused = focusable + " img.focused";
  const selected = ".ProductItem-gallery-slides-item.selected";
  const thumbnails = document.querySelectorAll(focusable);
  const thumbnailed = document.querySelector(focused);
  const current = document.querySelector(selected);

  if (thumbnailed) {
    thumbnailed.classList.remove("focused")
    console.log("focused was removed")
  } else {
    console.log("nothing was focused")
  }

  const indices = [0, 2, 1];
  const index = current.dataset.slideIndex;
  const swap = indices[index];
  const focus = focusable + ":nth-child(" + swap + ") img";
  const focusing = document.querySelector(focus);

  focusing.classList.add("focused");

  // console.log(focus)
  // console.log(filter + selected)
  // console.log(thumbnailed)
  // console.log(current)

  console.log(index,
    switch)
  console.log(focusing)

}

window.addEventListener('load', (event) => {
  const gallery = document.querySelector("a[href='/range/gallery']");
  const pathname = window.location.pathname;
  const store = pathname.indexOf("store/p/") > -1;

  if (gallery) {
    gallery.href = "/gallery";
  }

  if (store) {
    focusThumbnail();
  }
});