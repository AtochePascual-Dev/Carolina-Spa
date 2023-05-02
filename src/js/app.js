var swiper = new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  loop: true,
  longSwipesMs: 2000,
  pagination: {
    el: ".swiper-pagination",
  },
});