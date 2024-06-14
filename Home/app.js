const header = document.querySelector('header')

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80)
})
const faqIconBox = document.querySelectorAll(".faq--icon--box");
const answerFaq = document.querySelectorAll(".answer--faq");
const faqBox = document.querySelector(".faq--box");

faqBox.addEventListener("click", function (e) {
  const clicked = e.target.closest(".faq--icon--box");
  if (!clicked) return;

  document
    .querySelector(`.faq--${clicked.dataset.faq}`)
    .classList.toggle("show--faq");
  clicked.classList.toggle("rotate--icon");
});

let menu = document.getElementById('menu-icon')
let navlist = document.querySelector('.nav__links')

const nav = 
menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('open');
}

const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2500,
  reset: true 
})

sr.reveal('.home-text', {delay: 200});
sr.reveal('.about-text', {delay: 300});
sr.reveal('.container-box', {delay: 300});
sr.reveal('.home-text', {delay: 200});