var izgubljene = JSON.parse(localStorage.getItem("oglasi"));
if (izgubljene == null){
    izgubljene = oglasi;
    localStorage.setItem("oglasi",JSON.stringify(izgubljene));
}

$(document).ready(function () {


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
        btn.text("Saznaj vise");
        btn.appendTo(innerDiv);
        btn.click(function (){
            localStorage.setItem("index", index);
            window.location.href = "oglas.html";
        });

        innerDiv.appendTo(element);
        innerDiv.click(function (){
            localStorage.setItem("index", index);
            window.location.href = "oglas.html";
        });

        return element;
    }

    for (let i = 0; i < izgubljene.length; i++) {
        let el = get_element(izgubljene[i],i);
        el.appendTo("#holder-oglasi");
    }
    
    navbar_setup();

});