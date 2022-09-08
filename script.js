const list = document.querySelectorAll(".ul a"),
  nav = document.querySelector(".ul"),
  bar = document.querySelector(".icons > :first-child"),
  moon = document.querySelector(".fa-moon");

list.forEach((lists) => {
  lists.onclick = function () {
    for (let i = 0; i < list.length; i++) {
      if ((list[i].classList = "li-active")) {
        list[i].classList.remove("li-active");
      }
    }

    lists.classList.add("li-active");
  };
});

bar.onclick = function () {
  bar.classList.toggle("fa-xmark");
  nav.classList.toggle("active");
};

moon.onclick = function () {
    // moon.classList.toggle("fa-moon");
    moon.classList.toggle("fa-sun-bright");
    // nav.classList.toggle("active");
};

let swip = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
