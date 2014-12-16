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
           var name = $('#videoPopup').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

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
            var videoURL = $('#videoPopup1').attr('data-player-url');
            var name = $('#videoPopup1').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo1")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
				.append(c);

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
$(function(){

    // --- Video Popup
    var $videoButton2 = $('#videoPopup2');
    var $toolsVideoShield2 = $('#toolsVideoShield2');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton2.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton2.bind('touchstart', function (ev) {
        $videoButton2.addClass('active');
    });
    $(document).bind('touchend', resetButton2);
    $(document).bind('touchcancel', resetButton2);
    function resetButton2() {
        $videoButton1.removeClass('active');
    }

    $videoButton2.click(function(event) {
        if ($toolsVideoShield2.is(":hidden"))
            $toolsVideoShield2.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup2').attr('data-player-url');
            var name = $('#videoPopup2').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo2")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield2.click(closeShield2);
    $('videoPopupClose2').click(closeShield2);

    function closeShield2() {
        $toolsVideoShield2.hide();
        $("#toolsVideo2").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton3 = $('#videoPopup3');
    var $toolsVideoShield3 = $('#toolsVideoShield3');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton3.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton3.bind('touchstart', function (ev) {
        $videoButton3.addClass('active');
    });
    $(document).bind('touchend', resetButton3);
    $(document).bind('touchcancel', resetButton3);
    function resetButton3() {
        $videoButton1.removeClass('active');
    }

    $videoButton3.click(function(event) {
        if ($toolsVideoShield3.is(":hidden"))
            $toolsVideoShield3.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup3').attr('data-player-url');
            var name = $('#videoPopup3').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo3")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield3.click(closeShield3);
    $('videoPopupClose3').click(closeShield3);

    function closeShield3() {
        $toolsVideoShield3.hide();
        $("#toolsVideo3").empty();
    }
});

$(function(){

    // --- Video Popup
    var $videoButton4 = $('#videoPopup4');
    var $toolsVideoShield4 = $('#toolsVideoShield4');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton4.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton4.bind('touchstart', function (ev) {
        $videoButton4.addClass('active');
    });
    $(document).bind('touchend', resetButton4);
    $(document).bind('touchcancel', resetButton4);
    function resetButton4() {
        $videoButton1.removeClass('active');
    }

    $videoButton4.click(function(event) {
        if ($toolsVideoShield4.is(":hidden"))
            $toolsVideoShield4.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup4').attr('data-player-url');
            var name = $('#videoPopup4').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo4")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield4.click(closeShield4);
    $('videoPopupClose4').click(closeShield4);

    function closeShield4() {
        $toolsVideoShield4.hide();
        $("#toolsVideo4").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton5 = $('#videoPopup5');
    var $toolsVideoShield5 = $('#toolsVideoShield5');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton5.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton5.bind('touchstart', function (ev) {
        $videoButton5.addClass('active');
    });
    $(document).bind('touchend', resetButton5);
    $(document).bind('touchcancel', resetButton5);
    function resetButton5() {
        $videoButton1.removeClass('active');
    }

    $videoButton5.click(function(event) {
        if ($toolsVideoShield5.is(":hidden"))
            $toolsVideoShield5.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup5').attr('data-player-url');
            var name = $('#videoPopup5').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo5")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield5.click(closeShield5);
    $('videoPopupClose5').click(closeShield5);

    function closeShield5() {
        $toolsVideoShield5.hide();
        $("#toolsVideo5").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton6 = $('#videoPopup6');
    var $toolsVideoShield6 = $('#toolsVideoShield6');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton6.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton6.bind('touchstart', function (ev) {
        $videoButton6.addClass('active');
    });
    $(document).bind('touchend', resetButton6);
    $(document).bind('touchcancel', resetButton6);
    function resetButton6() {
        $videoButton1.removeClass('active');
    }

    $videoButton6.click(function(event) {
        if ($toolsVideoShield6.is(":hidden"))
            $toolsVideoShield6.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup6').attr('data-player-url');
            var name = $('#videoPopup6').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo6")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield6.click(closeShield6);
    $('videoPopupClose6').click(closeShield6);

    function closeShield6() {
        $toolsVideoShield6.hide();
        $("#toolsVideo6").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton7 = $('#videoPopup7');
    var $toolsVideoShield7 = $('#toolsVideoShield7');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton7.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton7.bind('touchstart', function (ev) {
        $videoButton7.addClass('active');
    });
    $(document).bind('touchend', resetButton7);
    $(document).bind('touchcancel', resetButton7);
    function resetButton7() {
        $videoButton1.removeClass('active');
    }

    $videoButton7.click(function(event) {
        if ($toolsVideoShield7.is(":hidden"))
            $toolsVideoShield7.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup7').attr('data-player-url');
            var name = $('#videoPopup7').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo7")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield7.click(closeShield7);
    $('videoPopupClose7').click(closeShield7);

    function closeShield7() {
        $toolsVideoShield7.hide();
        $("#toolsVideo7").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton8 = $('#videoPopup8');
    var $toolsVideoShield8 = $('#toolsVideoShield8');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton8.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton8.bind('touchstart', function (ev) {
        $videoButton8.addClass('active');
    });
    $(document).bind('touchend', resetButton8);
    $(document).bind('touchcancel', resetButton8);
    function resetButton8() {
        $videoButton1.removeClass('active');
    }

    $videoButton8.click(function(event) {
        if ($toolsVideoShield8.is(":hidden"))
            $toolsVideoShield8.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup8').attr('data-player-url');
            var name = $('#videoPopup8').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo8")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield8.click(closeShield8);
    $('videoPopupClose8').click(closeShield8);

    function closeShield8() {
        $toolsVideoShield8.hide();
        $("#toolsVideo8").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton9 = $('#videoPopup9');
    var $toolsVideoShield9 = $('#toolsVideoShield9');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton9.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton9.bind('touchstart', function (ev) {
        $videoButton9.addClass('active');
    });
    $(document).bind('touchend', resetButton9);
    $(document).bind('touchcancel', resetButton9);
    function resetButton9() {
        $videoButton1.removeClass('active');
    }

    $videoButton9.click(function(event) {
        if ($toolsVideoShield9.is(":hidden"))
            $toolsVideoShield9.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup9').attr('data-player-url');
            var name = $('#videoPopup9').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo9")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield9.click(closeShield9);
    $('videoPopupClose9').click(closeShield9);

    function closeShield9() {
        $toolsVideoShield9.hide();
        $("#toolsVideo9").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton10 = $('#videoPopup10');
    var $toolsVideoShield10 = $('#toolsVideoShield10');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton10.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton10.bind('touchstart', function (ev) {
        $videoButton10.addClass('active');
    });
    $(document).bind('touchend', resetButton10);
    $(document).bind('touchcancel', resetButton10);
    function resetButton10() {
        $videoButton1.removeClass('active');
    }

    $videoButton10.click(function(event) {
        if ($toolsVideoShield10.is(":hidden"))
            $toolsVideoShield10.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup10').attr('data-player-url');
            var name = $('#videoPopup10').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo10")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield10.click(closeShield10);
    $('videoPopupClose10').click(closeShield10);

    function closeShield10() {
        $toolsVideoShield10.hide();
        $("#toolsVideo10").empty();
    }
});
$(function(){

    // --- Video Popup
    var $videoButton11 = $('#videoPopup11');
    var $toolsVideoShield11 = $('#toolsVideoShield11');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton11.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton11.bind('touchstart', function (ev) {
        $videoButton11.addClass('active');
    });
    $(document).bind('touchend', resetButton11);
    $(document).bind('touchcancel', resetButton11);
    function resetButton11() {
        $videoButton1.removeClass('active');
    }

    $videoButton11.click(function(event) {
        if ($toolsVideoShield11.is(":hidden"))
            $toolsVideoShield11.show();

        if ($("#toolsVideo1 iframe").length == 0) {
            var videoURL = $('#videoPopup11').attr('data-player-url');
            var name = $('#videoPopup11').attr('data-player-name');
            var c="<div id='videoPopupClose' class='video-popup-close'></div><div class='massage'>"+name+"</div>"
            $("#toolsVideo11")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append(c);

        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield11.click(closeShield11);
    $('videoPopupClose11').click(closeShield11);

    function closeShield11() {
        $toolsVideoShield11.hide();
        $("#toolsVideo11").empty();
    }
});



