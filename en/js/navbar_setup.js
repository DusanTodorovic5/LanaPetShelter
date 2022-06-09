var prijavljen = localStorage.getItem("prijavljen");
var lang = localStorage.getItem("lang");
if (lang == null) {
    localStorage.setItem("lang","rs");
}

function navbar_setup() {
    if ($(window).width() < 768) {
        $("#large-navbar").css('display', 'none');
        $("#mobile-navbar").css('display', 'block');
        $("#specialLogo").css('display', 'none');
        $("#ordLogo").css('height', '110');
    }
    else {
        $("#mobile-navbar").css('display', 'none');
        $("#large-navbar").css('display', 'block');
        $("#specialLogo").css('display', 'block');
        $("#ordLogo").css('height', '70');
    }
    $(window).resize(function () {
        if ($("body").height() > $(window).height()) {
            $("#footer").removeClass("footer-fix");
            $("#footer").addClass("footer-rel");
        } else {
            $("#footer").removeClass("footer-rel");
            $("#footer").addClass("footer-fix");
        }
        if ($(window).width() < 768) {
            $("#large-navbar").css('display', 'none');
            $("#mobile-navbar").css('display', 'block');
            $("#specialLogo").css('display', 'none');
            $("#ordLogo").css('height', '110');
        }
        else {
            $("#mobile-navbar").css('display', 'none');
            $("#large-navbar").css('display', 'block');
            $("#specialLogo").css('display', 'block');
            $("#ordLogo").css('height', '70');
        }
    });

    var pozicije_hover = [-5, 15, 45, 75, 120];

    for (let i = 1; i < 6; i++) {
        $("#hoverMenuButton" + i).mouseenter(function (e) {
            if ($(window).width() > 767) {
                $("#hoverDropDownMenu" + i).css('display', 'block');
                if (i > 1) {
                    $("#hoverDropDownMenu" + i).css("position", "absolute");
                    $("#hoverDropDownMenu" + i).css("top", pozicije_hover[i - 1]);
                    $("#hoverDropDownMenu" + i).css("left", "100%");
                }
            }
        }).mouseleave(function () {
            $("#hoverDropDownMenu" + i).css('display', 'none');
        });
        $("#hoverDropDownMenu" + i).mouseenter(function () {
            $("#hoverDropDownMenu" + i).css('display', 'block');
        }).mouseleave(function () {
            $("#hoverDropDownMenu" + i).css('display', 'none');
        });
    }
    $("#odjava2").click(function (){
        var lang = localStorage.getItem("lang");
        localStorage.clear();
        window.location.reload();
        localStorage.setItem("lang",lang);
    });

    $("#odjava").click(function (){
        var lang = localStorage.getItem("lang");
        localStorage.clear();
        window.location.reload();
        localStorage.setItem("lang",lang);
    });

    $("#hoverMenuButton1").click(function () {
        window.location.href = $("#hoverMenuButton1").attr('href');
    });
    $("#hoverMenuButton2").click(function () {
        window.location.href = $("#hoverMenuButton2").attr('href');
    });
    $("#hoverMenuButton3").click(function () {
        window.location.href = $("#hoverMenuButton3").attr('href');
    });
    $("#hoverMenuButton4").click(function () {
        window.location.href = $("#hoverMenuButton4").attr('href');
    });
    $("#hoverMenuButton5").click(function () {
        window.location.href = $("#hoverMenuButton5").attr('href');
    });


    if (prijavljen) {
        $("#dodajOglas").removeClass("ne-prijavljen");
        $("#mojNalog").removeClass("ne-prijavljen");
        $("#prijaviSe").removeClass("prijavljen");
        $("#odjava").removeClass("ne-prijavljen");

        $("#dodajOglas").addClass("prijavljen");
        $("#mojNalog").addClass("prijavljen");
        $("#prijaviSe").addClass("ne-prijavljen");
        $("#odjava").addClass("prijavljen");

        $("#dodajOglas2").removeClass("ne-prijavljen");
        $("#mojNalog2").removeClass("ne-prijavljen");
        $("#prijaviSe2").removeClass("prijavljen");
        $("#dodajOglas2").addClass("prijavljen");
        $("#mojNalog2").addClass("prijavljen");
        $("#prijaviSe2").addClass("ne-prijavljen");
    } else {
        $("#dodajOglas").removeClass("prijavljen");
        $("#mojNalog").removeClass("prijavljen");
        $("#prijaviSe").removeClass("ne-prijavljen");
        $("#odjava").removeClass("prijavljen");

        $("#dodajOglas").addClass("ne-prijavljen");
        $("#mojNalog").addClass("ne-prijavljen");
        $("#prijaviSe").addClass("prijavljen");
        $("#odjava").addClass("ne-prijavljen");

        $("#dodajOglas2").removeClass("prijavljen");
        $("#mojNalog2").removeClass("prijavljen");
        $("#prijaviSe2").removeClass("ne-prijavljen");
        $("#odjava2").removeClass("prijavljen");

        $("#dodajOglas2").addClass("ne-prijavljen");
        $("#mojNalog2").addClass("ne-prijavljen");
        $("#prijaviSe2").addClass("prijavljen");
        $("#odjava2").addClass("ne-prijavljen");
    }
    if ($("body").height() > $(window).height()) {
        $("#footer").removeClass("footer-fix");
        $("#footer").addClass("footer-rel");
    } else {
        $("#footer").removeClass("footer-rel");
        $("#footer").addClass("footer-fix");
    }
    var path = $("#language-icon").attr('href');
    if (typeof path == 'undefined'){
        path = "";
    }
    if (lang == "en") {
        $("#language-icon").attr("src", path + "../assets/gb.svg");
    } else {
        $("#language-icon").attr("src", path + "../assets/rs.svg");
    }
    $("#language-icon").click(function (){
        lang = localStorage.getItem("lang");
        var path = $("#language-icon").attr('href');
        if (typeof path == 'undefined'){
            path = "";
        }
        console.log(lang);
        if (lang == "rs") {
            lang = "en";
            localStorage.setItem("lang",lang);
            $("#language-icon").attr("src", path + "../assets/gb.svg");
            var windowPath = window.location.pathname.split("/");
            var page = windowPath.pop();
            var pageFolder = windowPath.pop();
            if (path == ""){
                window.location.href = "en/" + page;
            } else {
                window.location.href = "../en/" + pageFolder + "/" + page;
            }
        } else {
            lang = "rs";
            localStorage.setItem("lang",lang);
            $("#language-icon").attr("src", path + "../assets/rs.svg");
            var windowPath = window.location.pathname.split("/");
            var page = windowPath.pop();
            var pageFolder = windowPath.pop();
            if (path == ""){
                window.location.href = "../" + page;
            } else {
                window.location.href = "../../" + pageFolder + "/" + page;
            }
        }
    });
}