//jQuery to add flipping effect on recipes on nutrition page

$('.flip').hover(function(){
    $(this).find('.card').toggleClass('flipped');
});