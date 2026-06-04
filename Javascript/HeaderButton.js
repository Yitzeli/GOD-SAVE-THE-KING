// HEADER BUTTON

$(".button-login").click(function() {
    $(".cambio-cuenta").addClass("cambio-cuenta-open");
    $(".cambio-cuenta-back").addClass("cambio-cuenta-back2");
    $(".header-right").removeClass("header-right-open");
    $(".nav-toggle").removeClass("nav-close");
});

$(".nav-toggle").click(function() {
    $(".nav-toggle").toggleClass("nav-close");
    $(".header-right").toggleClass("header-right-open");
    $(".header-info").toggleClass("header-info-open");
});

$(".header-button").click(function() {
    $(".header-button").toggleClass("button-active");
    $(".header-slide1").toggleClass("header-slide2");
    $(".header-index-back").toggleClass("header-index-back2");
});

$(".nav-button").click(function() {
    $(".nav-content-back").toggleClass("nav-content-back2");
    $(".nav-content").toggleClass("nav-content2");
    $(".nav-content1").removeClass("nav-content2");
});

$(".nav-button1").click(function() {
    $(".nav-content1").toggleClass("nav-content2");
    $(".header-right").removeClass("header-right-open");
    $(".nav-toggle").removeClass("nav-close");
});

$(".nav-content-back").click(function() {
    $(".nav-content-back").removeClass("nav-content-back2");
    $(".nav-content").removeClass("nav-content2");
});

$(".grup-toggle").click(function() {
    $(".grup-toggle").toggleClass("grup-close");
    $(".header-right").toggleClass("header-right-open");
    $(".header-info").toggleClass("header-info-open");
});

$(".grup-button").click(function() {
    $(".grup-content-back").removeClass("grup-content-back2");
    $(".grup-content1").removeClass("grup-content2");
});

$(".grup-button1").click(function() {
    $(".grup-content-back").toggleClass("grup-content-back2");
    $(".grup-content1").addClass("grup-content2");
    $(".header-right").removeClass("header-right-open");
    $(".grup-toggle").removeClass("grup-close");
    $(".nav-toggle").removeClass("nav-close");
});

$(".grup-content-back").click(function() {
    $(".grup-content-back").removeClass("grup-content-back2");
    $(".grup-content1").removeClass("grup-content2");
});

$(".info_notif").click(function() {
    $(".notif-content-back").toggleClass("notif-content-back2");
    $(".notif-content").toggleClass("notif-content2");
    $(".header-right").removeClass("header-right-open");
    $(".nav-toggle").removeClass("nav-close");
});

$(".notif-button").click(function() {
    $(".notif-content-back").removeClass("notif-content-back2");
    $(".notif-content").removeClass("notif-content2");
});

$(".notif-content-back").click(function() {
    $(".notif-content-back").removeClass("notif-content-back2");
    $(".notif-content").removeClass("notif-content2");
});


$("#header-fix-user").click(function() {
    $(".user-content-back").toggleClass("user-content-back2");
    $(".user-content").toggleClass("user-content2");
});

$(".user-button").click(function() {
    $(".user-content-back").removeClass("user-content-back2");
    $(".user-content").removeClass("user-content2");
});

$(".user-content-back").click(function() {
    $(".user-content-back").removeClass("user-content-back2");
    $(".user-content").removeClass("user-content2");
});