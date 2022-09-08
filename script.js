const list = document.querySelectorAll('.ul a'),
      nav = document.querySelector('.ul'),
      bar = document.querySelector('.icons > :first-child');

list.forEach((lists) => {

    lists.onclick = function(){
        
        for (let i = 0;  i < list.length; i++) {
            if (list[i].classList = 'li-active') {
                list[i].classList.remove('li-active')
            }
        }

        lists.classList.add('li-active')
    }
  });

bar.onclick = function(){

    bar.classList.toggle('fa-xmark')
    nav.classList.toggle('active')   

    // if (nav.style.display === 'none') {
    //     nav.style.display = 'flex'   
    // } else {
    //     nav.style.display = 'none'
    // }
}

// let swiper = new Swiper("#home", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
// });

let swip = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});