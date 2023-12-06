$(document).ready(function () {
    function submenu() {
        var profile = document.getElementById('profle');
        profile.classList.toggle("active");
    }


    $("#hamburger").click(function () {
        var resposiveMenu = $(".responsive-nav");
        var bodyappend = $(".body-append");
        resposiveMenu.animate({
            right: 0
        }, 200);
        // $('body').append('<div class="body-append"></div>');
        $('.cancel').click(function () {
            resposiveMenu.animate({
                right: '-200px'
            }, 200);
        });
    });

    window.addEventListener('scroll', function () {
        var pageOffset = window.pageYOffset;
        var innerHeight = window.innerHeight;
        var scrollerHeight = this.document.documentElement.scrollHeight;
        var scrolled = (pageOffset) / (scrollerHeight - innerHeight) * 100;
        var progressbar = document.getElementById("progressbar");
        progressbar.style.width = scrolled + "%";
    })

    window.addEventListener("load", function(){
var topAdWrapper = document.querySelector(".reg-grid-container");

for(var i = 0; i < 6; i++)
{
    topAdWrapper.removeChild(topAdWrapper.childNodes[0]);
}

var body = document.querySelector("div");
body.style.backgroundImage = "url('../images/cup-coffee-with-heart-drawn-foam.jpg')";
});
    
});

