//funkcija koja ocitava vrednost URL parametra sa prosledjenim imenom
function getParamValue(name) {
	var location = decodeURI(window.location.toString());
	var index = location.indexOf("?")+1;
	var subs = location.substring(index, location.length);
	var splitted = subs.split("&");
	

	for(i=0; i < splitted.length; i++) {
        var s = splitted[i].split("=");
        console.log(s);
		var pName  = s[0];
		var pValue = s[1];
		if(pName == name) {
			return pValue;
		}
	}	
}

/*
	Kada se stranica ucita, procitamo ime prijavljenog korisnika
	iz 'user' parametra URL-a i upisemo ga u HTML element ciji je id 'userSpan'.
*/

var knjigaN = getParamValue('naziv');
var nazivSpan = document.getElementById('nazivSpan');
nazivSpan.innerText = knjigaN;


var knjigaA = getParamValue('autor');
var autorSpan = document.getElementById('autorSpan');
autorSpan.innerText = knjigaA;


var knjigaBS= getParamValue('brojStranica');
var bsSpan = document.getElementById('brojStanicaSpan');
bsSpan.innerText = knjigaBS;

var knjigaC= getParamValue('cena');
var cSpan = document.getElementById('cenaSpan');
cSpan.innerText = knjigaC;

var knjigaG= getParamValue('godinaIzdavanja');
var gSpan = document.getElementById('godinaSpan');
gSpan.innerText = knjigaG;


var knjigaI = getParamValue('isbn');
var iSpan = document.getElementById('isbnSpan');
iSpan.innerText = knjigaI;

var knjigaIz = getParamValue('izdavac');
var izSpan = document.getElementById('izdavacSpan');
izSpan.innerText = knjigaIz;


var knjigaIz = getParamValue('izdavac');
var izSpan = document.getElementById('izdavacSpan');
izSpan.innerText = knjigaIz;

var knjigaJ = getParamValue('jezik');
var jSpan = document.getElementById('jezikSpan');
jSpan.innerText = knjigaJ;

var knjigaPi = getParamValue('pismo');
var piSpan = document.getElementById('pismoSpan');
piSpan.innerText = knjigaPi;

var knjigaO = getParamValue('ocena');
var oSpan = document.getElementById('ocenaSpan');
oSpan.innerText = knjigaO;


var knjigaTP = getParamValue('tipPoveza');
var tpSpan = document.getElementById('tipPovezaSpan');
tpSpan.innerText = knjigaTP;

var knjigaO = getParamValue('opis');
var OSpan = document.getElementById('opisSpan');
OSpan.innerText = knjigaO;


var korisnikDa = getParamValue('slika');
var dapan = document.getElementById('slikaKnjige');
dapan.src = korisnikDa;

