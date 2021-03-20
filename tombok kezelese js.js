window.addEventListener("load", init);

function id(nev) {
    return document.getElementById(nev);
}
;
var tomb = [];
function feltolt() {
    var kiir = id("kiir");
    var adat = id("adat");
    var ertek = Number(adat.value);
    kiir.innerHTML = "Jó reggelt!" + ertek;
    var adat = id("adat");
    var ertek = Number(adat.value);
    var kiir = id("kiir");
    kiir.innerHTML = "A beírt szam: " + ertek;
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * 10 + 1);
    }        
    kiir.innerHTML += "<br>" + tomb.join("; ");
}


function init() {
//var gomb=document.getElementById("gomb");
    var gomb = id("gomb");
    gomb.addEventListener("click", dolgozz, false);
}
;

function osszegzes() {
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    var osszegTxt = id("osszeg");
    osszegTxt.innerHTML = "Összeg: " + osszeg;
}
;


function dolgozz() {
   feltolt();
   osszegzes();
    
};
//var kiir=document.getElementById("kiír");




