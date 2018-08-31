var hero = document.querySelector("#intro-section .index-section-image img");
var source = "https://static1.squarespace.com/static/592eecaf725e2507268ada41/t/5a1c075d24a694106db578f2/1511786335366/about_tonyvacher.jpg?format=2500w"

if (!!hero) {
  hero.load = function() {
    console.log(hero)
    hero.src = "";
    hero.style.background = "orange";
  };
}

// document.querySelector("[data-widget-name='appointment']").addEventListener("change", function(event) {
document.querySelector("#page").addEventListener("change", function(event) {
  if (event.target.id === "session_type") {
    colourfulLanguage(event)
  }
}, true);

function colourfulLanguage(event) {
  const target = event.target;
  const value = parseInt(target.value, 10);
  const parent = target.parentNode;
  const list = target.nextElementSibling;
  const messages = {
    colour: "We only accept colour bookings over the phone. Please call our salon."
  }

  if (value === 34) {
    colourfulListing(messages["colour"], parent);
    target.querySelectorAll("option ")[0].selected = true;

    // console.log("Gracious, that's colourful language!");

  } else if (value > 0 && value !== 34) {
    if (list && list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}

function colourfulListing(message, parent) {
  const stet = parent.querySelector(".parsley-info-list");
  const list = document.createElement("ul");
  const item = document.createElement("li");

  list.classList.add("parsley-info-list");
  list.classList.add("filled");

  item.innerText = message;

  if (stet) {
    stet.appendChild(list);
  } else {
    list.appendChild(item);
    parent.appendChild(list);
  }
}