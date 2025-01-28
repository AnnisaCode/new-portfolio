$(document).ready(function() {
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('a.nav-link').removeClass('active');
            $(this).addClass('active');
            var hash = this.hash;
            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
            }, 800);
        }
    });
});