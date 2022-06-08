var izgubljene = JSON.parse(localStorage.getItem("oglasi"));
if (izgubljene == null){
    izgubljene = oglasi;
    localStorage.setItem("oglasi",JSON.stringify(izgubljene));
}

$(document).ready(function () {
    var ja = localStorage.getItem("prijavljen");
    if (ja == null) {
        navbar_setup();
        return;
    }

    function get_element(oglas,index) {
        let element = $("<div>", {
            'class': "row",
        });
        let innerDiv = $("<div>", {
            'class': "col border rounded marginica",
        });
        let h11 = $("<h1>");
        h11.text(oglas.naziv);
        h11.appendTo(innerDiv);

        let h41 = $("<h4>");
        h41.text("Opis: " + oglas.opis);
        h41.appendTo(innerDiv);

        let h42 = $("<h4>", {
            'class' : "float-start",
        });
        h42.text("Kontakt: " + oglas.kontakt);
        h42.appendTo(innerDiv);

        let btn = $("<button>", {
            'class':"btn btn-success float-end go-to-button",

        });
        btn.text("Obrisi oglas");
        btn.attr("id","id-" + index);
        btn.appendTo(innerDiv);
        btn.click(function() {
            izgubljene.splice(this.id.split("-")[1],1);
            localStorage.setItem("oglasi",JSON.stringify(izgubljene));
            location.reload();
        });

        innerDiv.appendTo(element);

        return element;
    }

    for (let i = 0; i < izgubljene.length; i++) {
        if (izgubljene[i].naziv == "test"){
            let el = get_element(izgubljene[i],i);
            el.appendTo("#holder-moj");
        }
    }

    let naslovDiv = $("<div>", {
        "class" : "row",
    });
    let naslovH = $("<h2>");
    naslovH.text("Moji komentari: ");

    naslovH.appendTo(naslovDiv);

    naslovDiv.appendTo("#holder-moj");

    function get_komentar(naziv, komentar) {
        let element = $("<div>", {
            'class': "row",
        });
        let innerDiv = $("<div>", {
            'class': "col border rounded marginica",
        });
        let h11 = $("<h4>");
        h11.text("Oglas: " + naziv);
        h11.appendTo(innerDiv);

        let h41 = $("<h5>");
        h41.text("Komentar: " + komentar);
        h41.appendTo(innerDiv);

        innerDiv.appendTo(element);

        return element;
    }

    for (let i = 0; i < izgubljene.length; i++) {
        for (let j = 0;j < izgubljene[i].komentari.length;j++){
            if (izgubljene[i].komentari[j].korisnik == "test"){
                let el = get_komentar(izgubljene[i].opis, izgubljene[i].komentari[j].text);
                el.appendTo("#holder-moj");
            }
        }
    }


    
    navbar_setup();

});