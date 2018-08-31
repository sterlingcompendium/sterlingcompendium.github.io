var hero = document.querySelector("#intro-section .index-section-image img");
var source = "https://static1.squarespace.com/static/592eecaf725e2507268ada41/t/5a1c075d24a694106db578f2/1511786335366/about_tonyvacher.jpg?format=2500w"

if (!!hero) {
  hero.load = function() {
    console.log(hero)
    hero.src = "";
    hero.style.background = "orange";
  };
}

document.querySelector("[data-widget-name='appointment']").addEventListener("change", function(event) {
  if (event.target.id === "session_type") {
    colourfulLanguage(event)
  }
}, true);

function colourfulLanguage(event) {
  const value = parseInt(event.target.value, 10);
  const parent = event.target.parentNode;
  const list = parent.nextElementSibling;
  const messages = {
    colour: "We only accept colour bookings over the phone. Please call our salon."
  }

  if (value === 34) {
    event.target.querySelectorAll("option ")[0].selected = true;
    colourfulListing(messages["colour"], parent.parentNode);

    // console.log("Gracious, that's colourful language!");

  } else if (value > 0 && value !== 34) {
    if (list && list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}

function colourfulListing(message, parent) {
  const list = document.createElement("ul");
  const item = document.createElement("li");

  list.classList.add("parsley-info-list");
  list.classList.add("filled");

  item.innerText = message;

  list.appendChild(item);
  parent.appendChild(list);
}