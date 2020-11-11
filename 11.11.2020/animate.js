// -------------------------------------------------Задание1
/*
$(document).ready(function () {
    $('.block .blokOne').on('click', f_acc);
});

function f_acc() {
    $('.block .text').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(2000);
};*/

$('.block_item').click(function () {
    $(this).next().slideToggle(600);
});

$(document).ready(function () {
    $('.cont .cont_item').hover(function () {
        $(this).next().animate({opacity:'show', top:'-90'}, 'fast')
    }, function() {
        $(this).next().animate({opacity: "hide", top: "-85"}, "fast");
    });
})

