let navToggle = document.querySelector('.c-nav__toggle').addEventListener('click', function() {
  this.classList.toggle('c-nav__toggle--active');
  navList.classList.toggle('c-nav__list--opened');
  document.querySelector('body').classList.toggle('is-locked');
})

let subLink = document.querySelectorAll('.c-nav__link--sub');
let subList = document.querySelectorAll('.c-nav__sub-menu');
let navList = document.querySelector('.c-nav__list');
let checkAgreement = document.querySelector('.c-order-form__agree');
let agreementBlock = document.querySelector('.c-order-form__agreement')
let buttonNext = document.querySelector('.c-order-form__button');
let additionalForm = document.querySelector('.c-order-form__additional');

function prevDefault (e) {
  e.preventDefault();
}

checkAgreement.onchange = function () {
  if(checkAgreement.checked) {
    buttonNext.addEventListener('click', function() {
      buttonNext.classList.add('c-order-form__button--clicked')
      agreementBlock.classList.add('c-order-form__agreement--clicked')
      additionalForm.classList.add('c-order-form__additional--active')
    })
   }
}
window.addEventListener('resize', function () {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    this.document.querySelector('section').classList.remove('o-wrapper')
    for (let i = 0; i < subLink.length; i++) {
      subLink[i].addEventListener('click', function() {
        this.classList.toggle('c-nav__link--active');
        subList[i].classList.toggle('c-nav__sub-menu--opened');
      })
    }
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    this.document.querySelector('section').classList.add('o-wrapper')
  }
})

