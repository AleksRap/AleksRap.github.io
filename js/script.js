$(document).ready(function () {
    // Кроссбраузерная поддержка SVG спрайтов
    svg4everybody({});

  // Fullpage
  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollOverflow: true,
    scrollHorizontally: true,
    menu: '#pagination',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
    parallax: true
  });

  // lightgallery
  $("#lightgallery").lightGallery();

  // Swiper
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  //MaskedInput
  jQuery(function ($) {
    $("#callback-phone").mask("+7 (999) 999-9999");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modalCallback = new Modal('modal-callback');

  const arrBtnOpenModal = toArray(document.querySelectorAll('[data-modal=open]'));
  arrBtnOpenModal.forEach(btn => {
    btn.addEventListener('click', () => modalCallback.open());
  });

  const arrBtnCloseModal = toArray(document.querySelectorAll('[data-modal=close]'));
  arrBtnCloseModal.forEach(btn => {
    btn.addEventListener('click', () => modalCallback.close());
  });

  const checkboxConsent = document.getElementById('consent');
  const btnForm = document.getElementById('callback-btn');
  checkboxConsent.addEventListener('change', function() {
    btnForm.disabled = !this.checked;
  });
});

class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.modalWindow = this.modal.querySelector('.modal__window');

    this.modal.addEventListener('click', (event) => {
      const modal = event.target.closest('.modal__window');
      if (!modal) this.close();
    });
  }

  open() {
    this.modal.classList.add('modal_open');
    this.modalWindow.classList.add('modal__window_500_open');
  }
  close() {
    this.modal.classList.remove('modal_open');
    this.modalWindow.classList.remove('modal__window_500_open');
  }
}

function toArray(obj) {
  const arr = [];

  for (let i = 0; i < obj.length; i++) {
    arr[i] = obj[i];
  }

  return arr;
}