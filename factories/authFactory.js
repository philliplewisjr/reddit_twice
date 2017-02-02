console.log("authorization factory")
app.factory("authFactory", function (){

  return {
  getAuth : (registerData) => {
      console.log(registerData)
      return firebase.auth().createUserWithEmailAndPassword(registerData.email, registerData.passWord )
      .then((data)=>{
        console.log(data.uid)
        return UID = data.uid
      })
    },
    setter : (registerData) => {
      return firebase.auth().signInWithEmailAndPassword(registerData)
      then ((data)=> {
        console.log(data)
      })
    },
    getUID: ()=> {
      return user = firebase.auth().currentUser
    }
  }

})
