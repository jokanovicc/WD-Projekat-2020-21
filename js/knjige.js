var app = new Vue({

    el: '#app',
    data:{
      knjige: []
    },
    mounted: function(){

      
        axios.get('https://knjizara-6adf7-default-rtdb.firebaseio.com/knjige.json')
        .then(response => {
          this.knjige = response.data;
          // handle success


        })


        .catch(error => {
          console.log(error);
        })


    }


  })