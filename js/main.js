let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse")

toggle.addEventListener('click', function() {
    collapse.forEach(col => col.classList.toggle("collapse-toggle"))
})

// Wrapped Masonry and Swiper object creation inside a function and call it in window.onload property (Fixes issue #2)
window.onload = function() { masonryInit() }

function masonryInit() {
    new Masonry("#posts .grid", {
        itemSelector: '.grid-item',
        gutter: 100
    });
    
    // swiper library initialization
    new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        autoplay: {
            delay: 3000
        },
        //responsive breakpoints
        breakpoints: {
            '@0': {
                slidesPerView: 2
            },
            //>888px
            '@1.00': {
                slidesPerView: 3
            },
            //>1110px
            '@1.25': {
                slidesPerView: 4
            },
            //>1330px
            '@1.50': {
                slidesPerView: 5
            }
        }
    })
}

//Sticky Navigation Bar
window.onscroll = function() { createStickyHeader() };

let navbar = document.getElementById("header");
let sticky = navbar.offsetTop;

//sticky function
function createStickyHeader() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}