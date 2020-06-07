$('.owl-carousel').owlCarousel({
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        680: {
            items: 2
        },
        960: {
            items: 3
        }
    }
});

const toggleButton = document.getElementsByClassName('toggle__button')[0]
const navbarList = document.getElementsByClassName('nav__list')[0]

toggleButton.addEventListener('click', () => {
    navbarList.classList.toggle('active')
});