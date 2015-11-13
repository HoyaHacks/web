$(function() {

    init();
    $(window).resize(init);
    $(window).scroll(headerFix);
});

function init() {
    splashPaneFullHeight();
    centerSplashContent();
}

function splashPaneFullHeight() {
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var navHeight = $('#breadcrumbs').outerHeight();
    var $splash = $('#splash');
    if (winWidth > 750) {
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
        $splash.css('margin-bottom',navHeight);

    } else {
        $nav.removeClass('fixed');
        $splash.css('margin-bottom', 0);
    }
}