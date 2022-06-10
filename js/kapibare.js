function compareNazivRast(a, b) {
    if (a.naziv < b.naziv) {
        return -1;
    }
    if (a.naziv > b.naziv) {
        return 1;
    }
    return 0;
}
function compareNazivOpad(a, b) {
    if (a.naziv > b.naziv) {
        return -1;
    }
    if (a.naziv < b.naziv) {
        return 1;
    }
    return 0;
}
function compareGodineRast(a, b) {
    if (a.godine < b.godine) {
        return -1;
    }
    if (a.godine > b.godine) {
        return 1;
    }
    return 0;
}
function compareGodineOpad(a, b) {
    if (a.godine > b.godine) {
        return -1;
    }
    if (a.godine < b.godine) {
        return 1;
    }
    return 0;
}
var sort = "none";
var moje_zivotinje = zivotinje[3].oglasi;
console.log(moje_zivotinje)
trenNiz = [];
$(document).ready(function () {
    navbar_setup();

    function get_element(zivotinja) {
        let element = $("<div>", {
            'class': "col-6 col-md-3 d-flex align-items-stretch",
        });
        let acl = $("<a>", {
            'class': "hoverable-link",
        });
        acl.attr("href", zivotinja.stranica);
        let kartica = $("<div>", {
            'class': "card hoverable-link-card w-100 h-100",
        });

        let slika = $("<img>", {
            'class': "card-img-top",
        });
        slika.attr("src", zivotinja.slika);
        slika.appendTo(kartica);
        let donjiDeo = $("<div>", {
            'class': "card-body d-flex flex-column",
        });
        let h1 = $("<h5>", {
            'class': "card-title",
        });
        h1.text(zivotinja.naziv);
        h1.appendTo(donjiDeo);
        let p = $("<p>", {
            'class': "card-text",
        });
        p.text(zivotinja.opis);
        p.appendTo(donjiDeo);
        let a = $("<p>", {
            'class': "btn btn-primary go-to-button mt-auto",
        });
        a.attr("href", zivotinja.stranica);
        a.text("Pregledaj");
        a.appendTo(donjiDeo);

        donjiDeo.appendTo(kartica);
        kartica.appendTo(acl);
        acl.appendTo(element);


        return element;
    }

    function standard() {
        $("#holder-zivotinja").empty();
        for (let i = 0; i < moje_zivotinje.length; i++) {
            let el = get_element(moje_zivotinje[i]);
            el.appendTo("#holder-zivotinja");
        }
    }

    function godine(tip) {
        trenNiz = []
        if (tip == "Sve starosti") {
            standard();
        }
        else if (tip == "Bebe") {
            $("#holder-zivotinja").empty();
            for (let i = 0; i < moje_zivotinje.length; i++) {
                if (moje_zivotinje[i].godine < 1) {
                    trenNiz.push(moje_zivotinje[i]);
                    let el = get_element(moje_zivotinje[i]);
                    el.appendTo("#holder-zivotinja");
                }
            }
        } else if (tip == "Junior") {
            $("#holder-zivotinja").empty();
            for (let i = 0; i < moje_zivotinje.length; i++) {
                if (moje_zivotinje[i].godine >= 1 && moje_zivotinje[i].godine < 4) {
                    trenNiz.push(moje_zivotinje[i]);
                    let el = get_element(moje_zivotinje[i]);
                    el.appendTo("#holder-zivotinja");
                }
            }
        }
        else if (tip == "Odrasli") {
            $("#holder-zivotinja").empty();
            for (let i = 0; i < moje_zivotinje.length; i++) {
                if (moje_zivotinje[i].godine >= 4 && moje_zivotinje[i].godine < 8) {
                    trenNiz.push(moje_zivotinje[i]);
                    let el = get_element(moje_zivotinje[i]);
                    el.appendTo("#holder-zivotinja");
                }
            }
        }
        else if (tip == "Senior") {
            $("#holder-zivotinja").empty();
            for (let i = 0; i < moje_zivotinje.length; i++) {
                if (moje_zivotinje[i].godine >= 8) {
                    trenNiz.push(moje_zivotinje[i]);
                    let el = get_element(moje_zivotinje[i]);
                    el.appendTo("#holder-zivotinja");
                }
            }
        }
    }


    function sortPo(tip) {
        if (tip == "Standardno sortiranje") {
            standard();
            return;
        }
        if (trenNiz.length == 0){
            for (let i = 0; i < moje_zivotinje.length; i++) {
                trenNiz.push(moje_zivotinje[i]);
            }
        }
        if (tip == "Po nazivu ↑") {
            trenNiz.sort(compareNazivRast);
        } else if (tip == "Po nazivu ↓") {
            trenNiz.sort(compareNazivOpad);
        } else if (tip == "Po starosti ↑") {
            trenNiz.sort(compareGodineRast);
        }
        else if (tip == "Po starosti ↓") {
            trenNiz.sort(compareGodineOpad);
        }
        $("#holder-zivotinja").empty();
        for (let i = 0; i < trenNiz.length; i++) {
            let el = get_element(trenNiz[i]);
            el.appendTo("#holder-zivotinja");
        }
    }

    standard();
    $("#sortiranje").change(function () {
        var end = this.value;
        sortPo(end);
    });
    $("#godine").change(function () {
        var end = this.value;
        godine(end);
    });

    $("#pretragaDugme").click(function () {
        let val = $("#nazivPretraga").val();
        val = val.toLowerCase().replace("š","s").replace("ć","c").replace("č","c").replace("ž","z").replace("đ","d");
        trenNiz = [];
        for (let i = 0; i < moje_zivotinje.length; i++) {
            if (moje_zivotinje[i].naziv.toLowerCase()
                .replace("š","s").replace("ć","c").replace("č","c").replace("ž","z").replace("đ","d")
                .includes(val)){
                trenNiz.push(moje_zivotinje[i]);
            }
        }
        $("#holder-zivotinja").empty();
        for (let i = 0; i < trenNiz.length; i++) {
            let el = get_element(trenNiz[i]);
            el.appendTo("#holder-zivotinja");
        }
    })
});
