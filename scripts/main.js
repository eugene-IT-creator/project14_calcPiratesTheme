// ADDITIONAL 8: CALCULATOR

$(document).ready(function () {

    let total = $('textarea');
    let field = $('#input');

    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #power, #dot, #para1, #para2').click(function () {
        let v = $(this).val();
        total.val(total.val() + v);
    });

    // Clicking equal sign evaluates the textarea
    $('#equal').click(function () {
        total.val(eval(total.val()));
    });

    // ANIMATION
    $('#rum').click(function () {
        field.val('');
        field.animate({transitionProperty: "width"}, 300)
            .animate({backgroundColor: "rgb(112,51,2)"}, 500)
            .animate({animationTimingFunction: "linear"}, 500)
            .animate({backgroundColor: 'rgba(140, 64, 3, 0.7)'}, 2000)
            .animate({transitionProperty: "width"}, 300);
    });
});

