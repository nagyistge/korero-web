$(document).ready(function () {
    $('#form').submit(function (e) {
        e.preventDefault();
        $('.flip1').css({transform: 'rotateY(180deg)'});
        $('.flip2').css({transform: 'rotateY(360deg)'});
        console.log('transform');
    });
});
