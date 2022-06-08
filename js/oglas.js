$(document).ready(function () {
    var index = localStorage.getItem("index");
    if (index == null) {
        navbar_setup();
        return;
    }

    var izgubljene = JSON.parse(localStorage.getItem("oglasi"));
    if (izgubljene == null){
        izgubljene = oglasi;
        localStorage.setItem("oglasi",JSON.stringify(izgubljene));
    }


    $("#naslov").text(izgubljene[index].naziv);
    $("#opis").text(izgubljene[index].opis);
    $("#kontakt").text(izgubljene[index].kontakt);

    $("#printaj").click(function(){
        print();
    })

    function get_element(komentar) {
        let element = $("<div>", {
            'class': "row",
        });
        let innerDiv = $("<div>", {
            'class': "col border rounded marginica",
        });
        let h11 = $("<h4>");
        h11.text(komentar.korisnik);
        h11.appendTo(innerDiv);

        let h41 = $("<h4>");
        h41.text(komentar.text);
        h41.appendTo(innerDiv);

        innerDiv.appendTo(element);

        return element;
    }

    for (let i=0;i<izgubljene[index].komentari.length;i++){
        let el = get_element(izgubljene[index].komentari[i]);
        el.appendTo("#holder-komentari");
    }

    navbar_setup();
});