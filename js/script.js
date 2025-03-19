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

const addError = (elm) => {
  elm.parentNode.classList.add('error');
  elm.parentNode.querySelector('.form__message').innerText = 'Vui lòng điền thông tin';
}

const removeError = (elm) => {
  elm.parentNode.classList.remove('error');
  elm.parentNode.querySelector('.form__message').innerText = '';
}

const firstForm = () => {
  const name = document.querySelector('.screen10__form input[name="name"]');
  const phone = document.querySelector('.screen10__form input[name="phone"]');
  const submit = document.querySelector('.screen10__form input[type="button"]');
  submit.addEventListener('click', () => {
    removeError(name);
    removeError(phone);
    if (!name.value || !phone.value) {
      if (!name.value) {
        addError(name);
      }
      if (!phone.value) {
        addError(phone);
      }
    } else {
      submit.setAttribute('disabled', '');
      submit.value = 'Đang gửi...';
      setTimeout(() => {
        submit.removeAttribute('disabled');
        submit.value = 'Đặt hẹn ngay';
        alert("Thành công!");
      }, 3000)
      $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLScD_eN89d9wIrOXPJk3fyOM5841-B5AicupcABWVHjHayE2Nw/formResponse",
        data: {
          "entry.1745789035": name.value,
          "entry.886269586": phone.value,
        },
        type: "POST",
        dataType: "json",
        statusCode: {
          0: function (data) {
          },
          200: function (data) {
          },
        },
      });
      name.value = '';
      phone.value = '';
    }

  })
}
firstForm();

AOS.init();

const items9 = document.querySelectorAll('.screen9__item');
items9.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-video');
  })
})

// document.querySelector('.screen4__btn').addEventListener('click', () => {
//   document.querySelector('#modal-pop').style.display = 'flex';
// });
// document.querySelector('.modal-bg').addEventListener('click', () => {
//   document.querySelector('#modal-pop').style.display = 'none';
// });
// document.querySelector('.modal-close').addEventListener('click', () => {
//   document.querySelector('#modal-pop').style.display = 'none';
// });
