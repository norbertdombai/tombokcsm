window.addEventListener("load", init);

function id(nev) {
    return document.getElementById(nev);
}

function init() {
//var gomb=document.getElementById("gomb");
    var gomb = id("gomb");
    gomb.addEventListener("click", dolgozz, false);
}

var newtomb = [];
var tomb2 = [];
var tomb = [];

function feltolt() {
    var kiir = id("kiir");
    var adat = id("adat");
    var ertek = Number(adat.value);
    kiir.innerHTML = "J√≥ reggelt!" + ertek;
    var adat = id("adat");
    var ertek = Number(adat.value);
    var kiir = id("kiir");
    kiir.innerHTML = "A be√≠rt szam: " + ertek;
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * 10 + 1);
    }        
    kiir.innerHTML += "<br>" + tomb.join("; ");
}

function osszegzes() {
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    var osszegTxt = id("osszeg");
    osszegTxt.innerHTML = "√ñsszeg: " + osszeg;
}


function ParosSzamok() {
    var parosok =id("parosok");
    var tomb2=[];
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%2===0)
            tomb2[i]=tomb[i];
    }
    console.log(tomb2);
    parosok.innerHTML ="A p√°rosok: " + tomb2.join(" ");
    }

function forditottTomb () {
    var forditva=id("forditva");
    var newtomb=[];
    for (var i = tomb.length - 1; i>=0; i--){
     newtomb.push(tomb[i]);
    }
    console.log(newtomb);
    forditva.innerHTML ="Tomb ford√≠tott sorrendben: " + newtomb.join(" ");
    }
    
    function ottelOszthato() {
    var db=0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%5===0)
            db++;
    }
    var dbTxt=id("darab");
    dbTxt.innerHTML="Az ˆttel oszthatÛak sz·ma: "+db;
}
   

function dolgozz() {
   feltolt();
   osszegzes();
   ParosSzamok ();
   forditottTomb ();
   ottelOszthato();
}


