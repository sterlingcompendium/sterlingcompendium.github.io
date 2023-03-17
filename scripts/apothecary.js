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


/*
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
  } else {
    document.querySelector(":first-child img").classList.add("focused");
  }

  const index = current.dataset.slideIndex;
  // const indices = [0, 1, 2];
  // const swap = indices[index];
  const slide = (index) ? index - 1 : 0;

  console.log(filter + slide)

  const focus = focusable + ":nth-child(" + slide + ") img";
  const focusing = document.querySelector(focus);

  focusing.classList.add("focused");

  // console.log(focus)
  // console.log(filter + selected)
  // console.log(thumbnailed)
  // console.log(current)
  // console.log(index, swap)
  console.log(index)
  // console.log(focusing)
}
*/

const focusable = ".ProductItem-gallery-slides-item";
document.querySelectorAll(focusable).forEach(element => {
  onClassChange(element, focusThumbnail, "selected");
});

function onClassChange(element, callback, className) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {

        if (mutation.target.classList.contains(className)) {
          callback(mutation.target);
        }
      }
    });
  });
  observer.observe(element, {
    attributes: true
  });

  // return observer.disconnect;
}

function focusThumbnail(target) {
  const focusable = ".ProductItem-gallery-thumbnails-item";
  const focused = focusable + " img.focused";
  const thumbnailed = document.querySelector(focused);

  if (thumbnailed) {
    thumbnailed.classList.remove("focused");
  }

  const selected = target.dataset.slideIndex;
  const focusing = focusable + ":nth-child(" + selected + ") img";

  document.querySelector(focusing).classList.add("focused");

  if (!thumbnailed) {
    console.log(filter + "CHICKEN")
    document.querySelector(focusable + ":first-child img").classList.add("focused");
  } else {
    console.log(filter + "buhGAWK")
  }
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