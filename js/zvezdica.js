var kontejner = document.querySelector('.ocenjivanje');
var zvezdice = kontejner.querySelectorAll('.ocenjivanje-item')
kontejner.onclick = e => {
                var element = e.target.classList;
// change the rating if the user clicks on a different star
              if (!element.contains('active')) {
                    zvezdice.forEach(
                          zvezdica => zvezdica.classList.remove('active')
                        );

                    var ocena = e.target.getAttribute("data-rate");
                    element.add('active'); // add active class to the clicked star


}
if(ocena == '5' || ocena == '4' || ocena == '3' || ocena == '2' || ocena == '1' ){
      document.getElementById("natpis").innerHTML = "Ocenili ste sa " + ocena;
      console.log("Dali ste ocenu " + ocena);
}

};