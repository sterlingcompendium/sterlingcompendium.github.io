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