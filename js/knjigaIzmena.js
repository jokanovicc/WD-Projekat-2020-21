function getParamValue(name) {
	var location = decodeURI(window.location.toString());
	var index = location.indexOf("?")+1;
	var subs = location.substring(index, location.length);
	var splitted = subs.split("&");
	

	for(i=0; i < splitted.length; i++) {
        var s = splitted[i].split("=");
		var pName  = s[0];
		var pValue = s[1].split();
		if(pName == name) {
			return pValue;
		}
	}	
}




var knjiga = getParamValue('naziv');
var nazivSpan = document.getElementById('nazivKnjige');
nazivSpan.value = knjiga;

var knjigaisbn = getParamValue('isbn');
var isbnSpan = document.getElementById('isbn');
isbnSpan.value = knjigaisbn;


var knjigaI = getParamValue('izdavac');
var izdavacSpan = document.getElementById('izdavac');
izdavacSpan.value = knjigaI;


var knjigaA = getParamValue('autor');
var ASpan = document.getElementById('autor');
ASpan.value = knjigaA;


var knjigaJ = getParamValue('jezik');
var JSpan = document.getElementById('jezik');
JSpan.value = knjigaJ;

var knjigaO = getParamValue('opis');
var OSpan = document.getElementById('opis');
OSpan.value = knjigaO;


var knjigaGZ= getParamValue('godinaIzdavanja');
var GZSpan = document.getElementById('godinaIzdavanja');
GZSpan.value = knjigaGZ;

var knjigaS= getParamValue('brojStranica');
var SSpan = document.getElementById('stranica');
SSpan.value = knjigaS;


var knjigaTP= getParamValue('tipPoveza');
var TPSpan = document.getElementById('povez');
TPSpan.selected = knjigaTP;


var knjigaPi= getParamValue('pismo');
var PiSpan = document.getElementById('pismo');
PiSpan.selected = knjigaPi;


