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
  var userSpan = document.getElementById('txtUsername');
  userSpan.value = korisnik;




  var korisnikI = getParamValue('ime');
  var imeSpan = document.getElementById('txtIme');
  imeSpan.value = korisnikI;


  var korisnikP = getParamValue('prezime');
  var prezimeSpan = document.getElementById('txtPrezime');
  prezimeSpan.value = korisnikP;


  var korisnikA = getParamValue('adresa');
  var adresaSpan = document.getElementById('txtAdresa');
  adresaSpan.value = korisnikA;


  var korisnikE = getParamValue('email');
  var eSpan = document.getElementById('txtEmail');
  eSpan.value = korisnikE;

  var korisnikbt = getParamValue('brojTel');
  var btSpan = document.getElementById('txtBrtel');
  btSpan.value = korisnikbt;


  var korisnikL = getParamValue('lozinka');
  var lpan = document.getElementById('txtPassword');
  lpan.value = korisnikL;


  var korisnikDa = getParamValue('datumRodj');
  var dapan = document.getElementById('datum');
  dapan.value = korisnikDa;