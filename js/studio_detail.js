//studio_detail
let $carosuelA = $('.slider__img').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    fullscreen: true,
})
let backToAllStudioDetail = $('.slider__backtoall .btn-backtoall');
backToAllStudioDetail.on('click', () => {
    $('.slider__img').flickity('select', 0);
});
let pre = $('.slider__detail-prenext .btn-pre');
pre.click(function () {
    $('.slider__img').flickity('previous');
})
let next = $('.slider__detail-prenext .btn-next');
next.click(function () {
    $('.slider__img').flickity('next');
})
var openPhotoSwipeStudio = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../img/slide-studio-detail.jpg',
            w: 1000,
            h: 556
        },
        {
            src: '../img/img-detail2.jpg',
            w: 863,
            h: 569
        },
        {
            src: '../img/img-detail3.jpg',
            w: 863,
            h: 569
        }
    ];

    // define options (if needed)
    var options = {
        // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
$(window).on('load', function () {
    document.querySelector('.slider__detail-fullscreen').onclick = openPhotoSwipeStudio;
})