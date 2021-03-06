import * as FsLightbox from 'fslightbox';





// accordion
let accItem = document.querySelectorAll('.accordionItem');

function toggleItem(item, isClosed = item.classList.contains('close')) {
  item.classList.remove('first-state');
  if (isClosed) {
    item.classList.remove('close');
    item.classList.add('open');
  } else {
    item.classList.remove('open');
    item.classList.add('close');
  }
}

accItem.forEach((item, index) => {
  console.log(item);
  let header = item.querySelector('.accordionItemHeading');
  let content = item.querySelector('.accordionItemContent');
  if (item.classList.contains('first-state')) {
    if (content.children.length <= 10) {
      item.classList.remove('first-state');      
    }
  } else {
    item.classList.add('close');
  }
  header.addEventListener('click', () => toggleItem(item), false);
});


// end accordion
// slider
var mySwiper1 = new Swiper('.swiper-container', {
	effect: 'coverflow',
  loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 0,
		stretch: -300,
		depth: 1000,
		modifier: 1,
		slideShadows : false,
	},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
// end slider
// slider
var mySwiper2 = new Swiper('.swiper-box', {
	spaceBetween: 30,
  effect: 'fade',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',

  // If we need pagination
  pagination: {
		el: '.swiper-pagination',
		clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
// end slider
// modal
let modalOpen = document.getElementsByClassName('btn-modal');
let bodyVar = document.getElementsByTagName('body');
let modalClose = document.querySelector('[data-modal="close"]');
let modalWrapper = document.querySelector('[data-modal="wrapper"]');
let openModal = () => {
	modalWrapper.classList.add("modal-opened");
  bodyVar[0].classList.add("oveflowHidden");
  setTimeout(() => document.addEventListener('click', handleOnModalClick));
}
let closeModal = () => {
	modalWrapper.classList.remove("modal-opened");
  bodyVar[0].classList.remove("oveflowHidden");
  document.removeEventListener('click', handleOnModalClick);
}

for(let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener('click', openModal, false);
}

modalClose.onclick = () => {
  closeModal();
}

const handleOnModalClick = (event) => {
  let window = document.querySelector('[data-modal="window"]');
  let clickInside = window.contains(event.target);
  if(!clickInside ) {
    closeModal();
  }
}

function formSubmit(form) {
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', form.getAttribute('action'), true);
	xhr.onload = () =>  {
    try {
      let response = JSON.parse(xhr.response);
      if (response.error) {
        alert(response.message);
        return;
      }
      alert('Спасибо, мы с вами свяжемся.');
      form.reset();
      closeModal();
    }
    catch {
      alert(xhr.responseText);
    }
	};
	// SEND
	xhr.send(formData);
}

Array.from(document.forms).forEach((form) => {
  form.addEventListener("input", function (event) {
    const error = getErrorFormElement(event.target);
    error.classList.remove('active');
  }, false);

  form.addEventListener("submit", function (event) {
    const form = event.target;
    const email = form.elements.mail;
    const number = form.elements.number;
    const nameValue = form.elements.name;
    const error = getErrorFormElement(event.target);
    const invalid = !nameValue.value || !number.value || !email.value || !email.validity.valid;

    event.preventDefault();

    if (invalid) {
      error.classList.add('active');
      if (email.value && !email.validity.valid) {
        error.innerHTML = 'Некорректный адрес электронной почты';
      } else {
        error.innerHTML = "Не заполнено одно из обязательных полей";
      }
      return;
    }

    formSubmit(event.target);
  }, false);
})

function getErrorFormElement(target) {
  return target.closest('form').querySelector('.error-message');
}