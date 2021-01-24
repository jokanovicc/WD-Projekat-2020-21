var registerForm = document.getElementById('registerForm');

// Na logovanje cemo reagovati tako sto uhvatimo 'submit' dogadjaj na login formu
registerForm.addEventListener('submit', function(e) {
	// Sprecicemo slanje forme na server, jer zelimo mi da imamo kontrolu na time
	e.preventDefault();


	var username = document.getElementById('txtUsername').value.trim();
	var password = document.getElementById('txtPassword').value.trim();
	var email = document.getElementById('txtEmail').value.trim();
	var ime = document.getElementById('txtIme').value;
	var prezime = document.getElementById('txtPrezime').value;
	var adresa = document.getElementById('txtAdresa').value;
	var brojTelefona = document.getElementById('txtBrtel').value;
	var datum = document.getElementById('datum').value;
	var dugme= document.getElementById('dugmeReg').value;

	var date = new Date(datum);1
	let datum1 = new Date(2003, 11, 17) ;
	let datum2 = new Date(1920, 11, 17) ;

	var ok = true;	
	var poruka = "Molim prepravite sledece greske u unosu";



	// Stringove u JavaScriptu mozemo porediti sa == i !=
	if(username == '') {
			poruka += "\n- Morate uneti korisničko ime\n";
			ok = false;
	}
	if (password == '') {
			// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
			poruka += "- Morate uneti šifru\n";
			ok = false;
	}

	if (ValidateEmail(email) == false) {
		poruka += "- Neispravan format mejla\n";
		ok = false;
	}
	

	if (ime == '') {
			// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
			poruka += "- Morate uneti ime\n";
			ok = false;

	}

	if (prezime == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		poruka += "- Morate uneti prezime\n";
		ok = false;

}

	if (adresa == '') {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		poruka += "- Morate uneti adresu\n";
		ok = false;

	}


	if (brojTelefona == "") {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		poruka += "- Morate uneti broj telefona\n";
		ok = false;

	}


	if (datum == "") {
		// Funkcija 'alert' prikazuje popup dijalog sa prosledjenom porukom
		poruka += "- Morate uneti datum rođenja\n";
		ok = false;

	}


	if(date > datum1 || date < datum2){
		poruka += "- Neispravan opseg datuma\n";
		ok = false;
	}

	if(ok == false) {
		alert(poruka);
	}



	else{
		alert('Uspešno ste izvršili akciju!');

		window.location.replace(
			"glavnaStrana.html?user=" + username
		);
	}

}
);





function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}