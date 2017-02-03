console.log("authorization factory")
app.factory("authFactory", function (){

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
      return user = firebase.auth().currentUser
    }
  }

})
