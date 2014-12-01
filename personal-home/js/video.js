$(function(){

    // --- Video Popup
    var $videoButton = $('#videoPopup');
    var $toolsVideoShield = $('#toolsVideoShield');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton.bind('touchstart', function (ev) {
        $videoButton.addClass('active');
    });
    $(document).bind('touchend', resetButton);
    $(document).bind('touchcancel', resetButton);
    function resetButton() {
        $videoButton.removeClass('active');
    }

    $videoButton.click(function(event) {
        if ($toolsVideoShield.is(":hidden"))
            $toolsVideoShield.show();

        if ($("#toolsVideo iframe").length == 0) {
            var videoURL = $('#videoPopup').attr('data-player-url');

            $("#toolsVideo")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append('<div id="videoPopupClose" class="video-popup-close"></div>');

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield.click(closeShield);
    $('videoPopupClose').click(closeShield);

    function closeShield() {
        $toolsVideoShield.hide();
        $("#toolsVideo").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton1 = $('#videoPopup1');
    var $toolsVideoShield1 = $('#toolsVideoShield1');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton1.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton1.bind('touchstart', function (ev) {
        $videoButton1.addClass('active');
    });
    $(document).bind('touchend', resetButton1);
    $(document).bind('touchcancel', resetButton1);
    function resetButton1() {
        $videoButton1.removeClass('active');
    }

    $videoButton1.click(function(event) {
        if ($toolsVideoShield1.is(":hidden"))
            $toolsVideoShield1.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL1 = $('#videoPopup1').attr('data-player-url');

            $("#toolsVideo1")
                .html('<iframe src="' + videoURL1 + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append('<div id="videoPopupClose1" class="video-popup-close"></div>');

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield1.click(closeShield1);
    $('videoPopupClose1').click(closeShield1);

    function closeShield1() {
        $toolsVideoShield1.hide();
        $("#toolsVideo1").empty();
    }
});





