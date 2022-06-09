$(document).ready(function () {
    navbar_setup();

    $("#prijavaButtomElement").click(function(){
        if (localStorage.getItem("prijavljen")){
            var izgubljene = JSON.parse(localStorage.getItem("oglasi"));
            if (izgubljene == null){
                izgubljene = oglasi;
                localStorage.setItem("oglasi",JSON.stringify(izgubljene));
            }
    
            izgubljene.push({
                "naziv" : "test",
                "kontakt" : $("#kontakt-field").val(),
                "opis" : $("#opis").val(),
                "komentari" : []
            });
            localStorage.setItem("oglasi",JSON.stringify(izgubljene));
        }
    });
});

