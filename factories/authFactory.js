console.log("authorization factory")
app.factory("authFactory", function ($http){

  return {
    // checkAuth : ($q) => {
    //   const checkForAuth = {
    //     checkForAuth ($location, $rootScope) {
    //       // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
    //       const authReady = firebase.auth().onAuthStateChanged(user => {
    //         authReady()
    //         if (user) {
    //           resolve(user)
    //           // console.log('User signed out.  $rootScope.uid is ' + $rootScope.uid)
    //           // $location.url('/login')
    //         }
    //         else {
    //           reject()
    //           // $rootScope.uid = firebase.auth().currentUser.uid
    //           // console.log('User signed in.  $rootScope.uid is ' + $rootScope.uid)
    //         }
    //       })
    //     }
    //   }
    // }
  getAuth : (registerData) => {
      console.log(registerData)
      return firebase.auth().createUserWithEmailAndPassword(registerData.email, registerData.passWord )
      .then((data)=>{
        console.log(data.uid)
        return UID = data.uid
      })
    },
    setter : (registerData) => {
      return firebase.auth().signInWithEmailAndPassword(registerData.email, registerData.password)
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
