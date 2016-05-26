$(document).ready(function () {
    $('.icons').hover(function () {
            /*$(this).animate({"padding": "4em"}, "fast");*/
            $(this).addClass('highlighted');
        },
        function () {
            /*$(this).animate({"padding": "1em"}, "fast");*/
            $(this).removeClass('highlighted');
        }
    );
});