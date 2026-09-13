const toggleBtn = document.querySelector('.topnav_toggle');
const navMenu = document.querySelector('.topnav_nav');

toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
});