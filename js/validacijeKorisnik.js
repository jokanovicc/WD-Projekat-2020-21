var loginForm = document.getElementById('registerForm');

// Na logovanje cemo reagovati tako sto uhvatimo 'submit' dogadjaj na login formu
loginForm.addEventListener('submit', function(e) {
	// Sprecicemo slanje forme na server, jer zelimo mi da imamo kontrolu na time
	e.preventDefault();


	var username = document.getElementById('txtUsername').value.trim();
	var password = document.getElementById('txtPassword').value.trim();
	var email = document.getElementById('txtEmail').value.trim();
	var ime = document.getElementById('txtIme').value;
	var prezime = document.getElementById('txtPrezime');
	var adresa = document.getElementById('txtAdresa');
	var brojTelefona = document.getElementById('txtBrTel');
	var datum = document.getElementById('datum').value;
	var dugme= document.getElementById('dugmeReg');

	var date = new Date(datum);1
	let datum1 = new Date(2003, 11, 17) ;
	let datum2 = new Date(1920, 11, 17) ;

	// Stringove u JavaScriptu mozemo porediti sa == i !=
	if(username == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti korisnicko ime');
	}
	else if (password == '') {
			// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
			alert('Morate uneti lozinku');
	}

	else if (email == '' || email.includes("@")==false || email.includes(".com")==false) {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Neispravan format imejl adrese');

	}

	else if (ime == '') {
			// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
			alert('Morate uneti ime');

	}

	else if (prezime == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti prezime');

}

	else if (adresa == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti adresu');

	}


	else if (brojTelefona == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		alert('Morate uneti brojTelefona');

	}

	else if(date > datum1 || date < datum2){
		alert('Neispravan opseg datuma rodjenja')
	}else{
		alert('Uspesno ste registrovani');
		window.location.replace(
			"glavnaStrana.html?user=" + ime
		);
	}



}
);
