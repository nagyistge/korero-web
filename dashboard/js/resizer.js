/*jslint browser: true*/
/*global $, jQuery, alert*/

(function () {
    'use strict';

    $(document).ready(function () {
        $('#menu-hide').click(function () {
            $('.navigation-panel').css("visibility", "hidden");
            $('.navigation-panel').css("display", "none");
        });

        $('#menu-icon').click(function () {
            $('.identity-info').css("visibility", "hidden");
            $('.identity-info').css("display", "none");
            $('#menu-hide').css("visibility", "visible");
            $('#menu-hide').css("display", "flex");
            $('.navigation-panel').css("visibility", "visible");
            $('.navigation-panel').css("display", "flex");
        });

        $(window).resize(function () {
            $('.identity-info').removeAttr('style');
            $('#menu-hide').removeAttr('style');
            $('.navigation-panel').removeAttr('style');
        });
    });
}());
