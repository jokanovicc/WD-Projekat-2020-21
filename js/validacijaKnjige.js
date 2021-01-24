var loginForm = document.getElementById('knjigaForme');

// Na logovanje cemo reagovati tako sto uhvatimo 'submit' dogadjaj na login formu
loginForm.addEventListener('submit', function(e) {
	// Sprecicemo slanje forme na server, jer zelimo mi da imamo kontrolu na time
	e.preventDefault();


	var naziv = document.getElementById('nazivKnjige').value;
	var isbn = document.getElementById('isbn').value;
	var izdavac = document.getElementById('izdavac').value;
	var autor = document.getElementById('autor').value;
	var jezik = document.getElementById('jezik').value;
	var opis = document.getElementById('opis').value;
	var godinaIzdavanja = document.getElementById('godinaIzdavanja').value;
	var brojStrana = document.getElementById('stranica').value;


	var ok = true;	
	var poruka = "Molimo popravite sledece greske u unosu:\n";


	// Stringove u JavaScriptu mozemo porediti sa == i !=
	if(naziv == '') {
		poruka += "- Morate uneti naziv\n";
		ok = false;
	}
	if (isbn == '') {
			// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
			poruka += "- Morate uneti ISBN\n";
			ok = false;
	}
	if (isbn.length != 13) {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		poruka += "- ISBN mora imati 13 cifara\n";
		ok = false;
}

	if (izdavac == '') {
		poruka += "- Morate uneti izdavača\n";
		ok = false;

	}
	if (godinaIzdavanja < 1950 || godinaIzdavanja > 2020) {
		poruka += "- Loš opseg godine izdavanja\n";
		ok = false;

	}

	if (autor == '') {
		poruka += "- Morate uneti autora\n";
		ok = false;

	}

	if (jezik == '') {
		poruka += "- Morate uneti jezik\n";
		ok = false;

}

	if (opis == '') {
		poruka += "- Morate uneti opis\n";
		ok = false;

	}


	if (godinaIzdavanja == '') {
		poruka += "- Morate uneti godinu izdavanja\n";
		ok = false;

    }
    
    if (brojStrana == '') {
		poruka += "- Morate uneti broj stranica\n";
		ok = false;

	}

	if (brojStrana <10 || brojStrana > 2000) {
		poruka += "- Los unos broja strana\n";
		ok = false;

	}

	if(ok == false) {
		alert(poruka);
	}
    
    
     else{
		alert('Uspešno ste izvršili akciju!');
	 	window.location.replace(
	 		"glavnaStrana.html"
	 	);
	 }



}
);
		