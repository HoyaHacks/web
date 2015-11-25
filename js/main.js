$(function() {

    init();

    //nav links: go to according pane
    $('#breadcrumbs li').click( function() {
        var id = $(this).attr('id');
        activatePane(id);
        scrollToPane(id);

    });

    $(window).resize(init);
    $(window).scroll(scrollInit);
});

function init() {
    splashPaneFullHeight();
    centerSplashContent();
}

function scrollInit() {
    headerFix();
    updateActive();
}

function splashPaneFullHeight() {
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var navHeight = $('#breadcrumbs').outerHeight();
    var $splash = $('#splash');
    if (winWidth > 767) {
        $splash.css('min-height', winHeight-navHeight);
    } else {
        $splash.css('min-height', 'auto');
    }
}

function centerSplashContent() {
    var $splash = $('#splash');
    var $content = $splash.find('.content');
    var paneHeight = $splash.height();
    var contentHeight = $content.outerHeight();
    var space = paneHeight - contentHeight;
    $content.css('margin-top', space/2);
}

function headerFix() {
    var $nav = $('#breadcrumbs');
    var $splash = $('#splash');
    var scroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var navHeight = $nav.outerHeight();
    if (scroll > winHeight - navHeight && winWidth > 920) {
        $nav.addClass('fixed');
        $splash.css('margin-bottom', navHeight);

    } else {
        $nav.removeClass('fixed');
        $splash.css('margin-bottom', 0);
    }
}

//nav links: update depending on scroll
function scrollToPane(pane) {

    var $nav = $('#breadcrumbs');
    var newPos = $('.pane.' + pane).offset().top;

    $('html, body').animate({
        scrollTop: newPos - $nav.outerHeight()
    }, 500);
}

function activatePane(id) {
    $('#breadcrumbs .active').removeClass('active');
    $('#' + id).addClass('active');
}

function updateActive() {
    var pos = $(window).scrollTop();
    var panes = [];
    $('#breadcrumbs li').each(function() {
        panes.push($(this).attr('id'));
    });
    var curPane = "splash";
    for (var i in panes) {
        var $pane = $('.pane.' + panes[i]);
        var offset = $pane.outerHeight()/3;
        if (offset < 100) {
            offset = 200;
        }
        if (pos > $pane.offset().top - offset) {
            curPane = panes[i];
        }
    }
    if (curPane !== "splash") {
        activatePane(curPane);
    }
}