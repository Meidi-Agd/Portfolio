var swiper = new Swiper('.swiper-parcours', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "cards",

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


function reveal() {
    var revealsL = document.querySelectorAll(".al");
    var revealsR = document.querySelectorAll(".ar");
    var revealsB = document.querySelectorAll(".ab");

    for (var i = 0; i < revealsL.length; i++) {
        var aLwindowHeight = window.innerHeight;
        var aLelementTop = revealsL[i].getBoundingClientRect().top;
        var aLelementVisible = 150;


        if (aLelementTop < aLwindowHeight - aLelementVisible) {
            revealsL[i].classList.add("w3-animate-left");
        } else {
            revealsL[i].classList.remove("w3-animate-left");
        }
    }

    for (var i = 0; i < revealsB.length; i++) {
        var aBwindowHeight = window.innerHeight;
        var aBelementTop = revealsL[i].getBoundingClientRect().top;
        var aBelementVisible = 150;


        if (aBelementTop < aBwindowHeight - aBelementVisible) {
            revealsL[i].classList.add("w3-animate-bottom");
        } else {
            revealsL[i].classList.remove("w3-animate-bottom");
        }
    }

    for (var i = 0; i < revealsR.length; i++)
    {
        var windowHeight = window.innerHeight;
        var elementTop = revealsR[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsR[i].classList.add("w3-animate-right");
        } else {
            revealsR[i].classList.remove("w3-animate-right");
        }
    }
}
window.addEventListener("scroll", reveal);


