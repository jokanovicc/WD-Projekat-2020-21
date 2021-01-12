const kontejner = document.querySelector('.ocenjivanje');
const zvezdice = kontejner.querySelectorAll('.ocenjivanje-item')
kontejner.onclick = e => {
                const elClass = e.target.classList;
// change the rating if the user clicks on a different star
              if (!elClass.contains('active')) {
                    zvezdice.forEach(zvezdica => zvezdica.classList.remove('active'));

                    console.log("Dali ste ocenu " + e.target.getAttribute("data-rate"));


                    var ocena = e.target.getAttribute("data-rate");
                    elClass.add('active'); // add active class to the clicked star


}
document.getElementById("natpis").innerHTML = "Ocenili ste sa " + ocena;

};