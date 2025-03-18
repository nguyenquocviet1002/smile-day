var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

// func move item
const funcDragDoctor_knhd_1_0_0 = (element) => {
  let mouseDown = false;
  let startX, scrollLeft;
  const slider = document.querySelector(element);

  const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }

  const stopDragging = (e) => {
    mouseDown = false;
    document.querySelector('.screen4__scroll').classList.remove('hide');
  }

  const move = (e) => {
    if (!mouseDown) { return; }
    document.querySelector('.screen4__scroll').classList.add('hide');
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  }
  // Add the event listeners
  slider.addEventListener('mousemove', move, false);
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
};

funcDragDoctor_knhd_1_0_0('.screen4__list');

// document.querySelector('.screen4__btn').addEventListener('click', () => {
//   document.querySelector('#modal-pop').style.display = 'flex';
// });
// document.querySelector('.modal-bg').addEventListener('click', () => {
//   document.querySelector('#modal-pop').style.display = 'none';
// });
// document.querySelector('.modal-close').addEventListener('click', () => {
//   document.querySelector('#modal-pop').style.display = 'none';
// });
