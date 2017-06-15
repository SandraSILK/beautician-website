$(document).ready(function () {
    $('.scroll').click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var fu = this.hash;
            $('html, body').animate({
                scrollTop: $(fu).offset().top
            }, 800, function () {
                window.location.hash = fu;
            });
        }
    });
});