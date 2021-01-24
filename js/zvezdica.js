var kontejner = document.querySelector('.ocenjivanje');
var zvezdice = kontejner.querySelectorAll('.ocenjivanje-item');
var ocenaPocetna = document.getElementById("pocetnaOcena");
kontejner.onclick = e => {
                var element = e.target.classList;
// change the rating if the user clicks on a different star
              if (!element.contains('active')) {
                    zvezdice.forEach(
                          //setujem klasu elementa na active
                          //ako je vec aktive obrisemo
                          zvezdica => zvezdica.classList.remove('active')
                        );

                    var ocena = e.target.getAttribute("ocena");
                    element.add('active'); // add active class to the clicked star


}
if(ocena == '5' || ocena == '4' || ocena == '3' || ocena == '2' || ocena == '1' ){
      document.getElementById("natpis").innerHTML = ocena;
      ocenaPocetna.style.display = "none";
      console.log("Dali ste ocenu " + ocena);
      swal({
            title: "Ocenili ste ocenom " + ocena,
            icon: "success",
            button: "Dalje",
            confirmButtonColor: "#DD6B55"
          });
}

};