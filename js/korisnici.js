var app = new Vue({

    el: '#app',
    data:{
      users: []
    },


    mounted: function(){

      
        axios.get('https://knjizara-6adf7-default-rtdb.firebaseio.com/korisnici.json')
        .then(response => {
          this.users = response.data;
          // handle success
          console.log(response);


        })


        .catch(error => {
          console.log(error);
        })


    },

    userDetails: function(usernaame){
      window.location.replace("knjige.html?user =" + usernaame)
    }

  })