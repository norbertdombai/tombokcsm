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

function osszegzes() {
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    var osszegTxt = id("osszeg");
    osszegTxt.innerHTML = "Összeg: " + osszeg;
}


function ParosSzamok() {
    var parosok =id("parosok");
    var tomb2=[];
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%2===0)
            tomb2[i]=tomb[i];
    }
    console.log(tomb2);
    parosok.innerHTML ="A párosok: " + tomb2.join(" ");
    }

function forditottTomb () {
    var fordTomb=id("forditva");
    var newtomb=[];
    for (var i = tomb.length-1; i>=0; i--){
       newtomb[i]=tomb[i];
    }
    
    console.log(newtomb);
    fordTomb.innerHTML ="Tomb fordított sorrendben: " + newtomb.join(" ");
    }
   

function dolgozz() {
   feltolt();
   osszegzes();
   ParosSzamok ();
   forditottTomb ();
}


