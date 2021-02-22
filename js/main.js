// let preScroll = $('html').scrollTop();
// $(document).scroll(function () {
//     console.log(window.pageYOffset)
//     if (preScroll < window.pageYOffset) {
//         $('header').css({
//             top: -$('header').height(),
//             transition: 'all 0.4s ease-in-out'
//         });
//     }
//     else {
//         $('header').css({ top: 0, transition: 'all 0.4s ease-in-out' })
//     }
//     preScroll = window.pageYOffset
// })
document.querySelector('.fcopyright__img').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollBy({
        top: -document.body.offsetHeight,
        behavior: "smooth"
    })
})

let headerMenu = document.querySelector('.btnmenu')
let navMenu = document.querySelector('.nav')
let navClose = document.querySelector('.close-nav')
navClose.addEventListener('click', function () {
    navMenu.classList.remove('active')
})
headerMenu.addEventListener('click', function () {
    navMenu.classList.add('active')
})



window.addEventListener('scroll', function (e) {
    //Lấy ra vị trí khi mình scroll đến
    let scrollPos = document.querySelector('html').scrollTop;
    let menuFBIcon = document.querySelector('header .fbicon');
    let menuHeader = document.querySelector('header .submenu');
    let menuLogo = document.querySelector('header .logo');
    let menuLogoSub = document.querySelector('.menu__sub .logo')
    if (scrollPos > 90) {
        // alert("Day la mobile")
        menuHeader.classList.add('enable')
        menuFBIcon.style.display = "none";
        menuLogoSub.classList.add('rotate')
        menuLogo.style.display = "none";

    }
    else {
        menuFBIcon.style.display = "block";
        menuHeader.classList.remove('enable')
        menuLogoSub.classList.remove('rotate')
        menuLogo.style.display = "block";
    }
})




let $carosuel = $('.detail__img').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    fullscreen: true,
})
let backToAllDetail = $('.detail__name-backtoall');
backToAllDetail.click(function () {
    $('.detail__img').flickity('select', 0);
})



$(window).on('load', function () {
    $('.svg').inlineSvg();
})





let btnNumber = document.querySelectorAll('.rentalcustomer__booking-studio .number');
btnNumber.forEach((item, index) => {
    item.addEventListener('click', function () {
        btnNumber.forEach((item) => {
            item.classList.remove("actived");
        })
        item.classList.add("actived");
    })
})



















