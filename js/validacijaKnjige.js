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


	// Stringove u JavaScriptu mozemo porediti sa == i !=
	if(naziv == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti naziv');
	}
	else if (isbn == '') {
			// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
			alert('Morate uneti isbn');
	}

	else if (izdavac == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti izdavaca');

	}

	else if (autor == '') {
			// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
			alert('Morate uneti autora');

	}

	else if (jezik == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti jezik');

}

	else if (opis == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti opis');

	}


	else if (godinaIzdavanja == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti godinu izdanja');

    }
    
    else if (brojStrana == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti broj Stranica');

	}


    
    
     else{
		alert('Uspesno ste dodali novu knjigu');
	 	window.location.replace(
	 		"glavnaStrana.html"
	 	);
	 }



}
);
