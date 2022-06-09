var izgubljene = JSON.parse(localStorage.getItem("oglasi"));
if (izgubljene == null) {
    izgubljene = oglasi;
    localStorage.setItem("oglasi", JSON.stringify(izgubljene));
}
$(document).ready(function () {
    navbar_setup();

    $("#tekst1").text(izgubljene[izgubljene.length - 1].opis);
    $("#outterA1").click(function() {
        localStorage.setItem("index", izgubljene.length - 1);
        window.location.href = "oglas.html";
    });
    $("#innerA1").click(function() {
        localStorage.setItem("index", izgubljene.length - 1);
        window.location.href = "oglas.html";
    });

    $("#tekst2").text(izgubljene[izgubljene.length - 2].opis);
    $("#outterA2").click(function() {
        localStorage.setItem("index", izgubljene.length - 2);
        window.location.href = "oglas.html";
    });
    $("#innerA2").click(function() {
        localStorage.setItem("index", izgubljene.length - 2);
        window.location.href = "oglas.html";
    });

    $("#tekst3").text(izgubljene[izgubljene.length - 3].opis);
    $("#outterA3").click(function() {
        localStorage.setItem("index", izgubljene.length - 3);
        window.location.href = "oglas.html";
    });
    $("#innerA3").click(function() {
        localStorage.setItem("index", izgubljene.length - 3);
        window.location.href = "oglas.html";
    });
});