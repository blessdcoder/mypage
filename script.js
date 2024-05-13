console.log("Script Loaded");

// For Small Screen Menu
const smallMenu = document.querySelector(".small-menu");
const navMenu = document.querySelector(".nav-menu");

smallMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
    smallMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    smallMenu.classList.remove("active");
    navMenu.classList.remove("active");
}


// For Scroll to the top Button
let myButton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    myButton.style.display = "block";
    } else {
    myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// For Carousel Images
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }

    currentImg = (currentImg + 1) % imgs.length; // update the index number

    if (n != undefined) {
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}

var timer = setInterval(changeSlide, interval);