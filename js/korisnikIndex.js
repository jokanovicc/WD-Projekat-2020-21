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
		var pValue = s[1].split();
		if(pName == name) {
			return pValue;
		}
	}	
}

/*
	Kada se stranica ucita, procitamo ime prijavljenog korisnika
	iz 'user' parametra URL-a i upisemo ga u HTML element ciji je id 'userSpan'.
*/

var korisnik = getParamValue('user');
var userSpan = document.getElementById('userSpan');
userSpan.innerText = korisnik;


var korisnikE = getParamValue('email');
userEmail.innerText = korisnikE;


var korisnikI = getParamValue('ime');
var imeSpan = document.getElementById('imeSpan');
imeSpan.innerText = korisnikI;

var korisnikP = getParamValue('prezime');
var prezimeSpan = document.getElementById('prezimeSpan');
prezimeSpan.innerText = korisnikP;

var korisnikL = getParamValue('lozinka');
var lozinkaSpan = document.getElementById('lozinkaSpan');
lozinkaSpan.innerText = korisnikL;

var korisnikDR = getParamValue('datumRodj');
var datumRodjSpan = document.getElementById('datumSpan');
datumRodjSpan.innerText = korisnikDR;

var korisnikT = getParamValue('brojTel');
var telefonSpan = document.getElementById('telefonSpan');
telefonSpan.innerText = korisnikT ;

var korisnikA = getParamValue('adresa');
var ASpan = document.getElementById('adresaSpan');
ASpan.innerText = korisnikA;










