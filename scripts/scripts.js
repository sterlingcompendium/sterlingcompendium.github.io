var hero = document.querySelector("#intro-section .index-section-image img");
var source = "https://static1.squarespace.com/static/592eecaf725e2507268ada41/t/5a1c075d24a694106db578f2/1511786335366/about_tonyvacher.jpg?format=2500w"

if (!!hero) {
  hero.load = function() {
    console.log(hero)
    hero.src = "";
    hero.style.background = "orange";
  };
}