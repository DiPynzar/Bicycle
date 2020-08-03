$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();
@@include('slick.min.js');
@@include("sliders.js");
@@include("forms.js");

// let langButtons = document.querySelectorAll(.header-top-lang__item);

// langButtons.addEventListener('click', function(event) {
//     if 
// })
