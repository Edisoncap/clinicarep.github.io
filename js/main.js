// MENU
document.querySelector('.menu-toggle')
  .addEventListener('click', () =>
    document.querySelector('.menu').classList.toggle('open')
);

// BIO
document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('open');
  });
});

// SWIPER
new Swiper('.heroSwiper', {
  loop: true,
  autoplay: { delay: 3000 }
});
