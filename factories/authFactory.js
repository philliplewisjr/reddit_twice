console.log("authorization factory")
app.factory("authFactory", function ($http){

  return {

  getAuth : (email, password) => {
      console.log(email, password)
      return firebase.auth().createUserWithEmailAndPassword(email, password )
      .then((data)=>{
        console.log(data.uid)
        return UID = data.uid
      })
    },

    setter : (email, password) => {
      return firebase.auth().signInWithEmailAndPassword(email, password)
      then ((data)=> {
        console.log(data)
      })
    },
    getUID: ()=> {
      return user = firebase.auth().currentUser.uid
    },
    postUser(registerData) {
      const url = 'https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/users.json'
      $http.post(url, JSON.stringify(registerData))
    }
  }

})


// $http.get(`https://reddit-remake.firebaseio.com/-KbqByZHKlsW1W0RI4DR/users.json`)
