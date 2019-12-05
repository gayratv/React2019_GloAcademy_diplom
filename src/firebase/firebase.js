import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();  // место хранения файлов    
    this.auth.languageCode='ru';
    this.providerGoogle = new app.auth.GoogleAuthProvider();
    //  this.providerGoogle = new this.auth.GoogleAuthProvider();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newUser.user.updateProfile({
      displayName: name
    });
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }

  async getImageUrl(ImageName) {

    try {
      return  await firebase.storage.ref(ImageName).getDownloadURL()
    } catch (err) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        console.error(err.message)
    };
  }



  async getDataFB(filteredMenuKey) {
      console.log('filteredMenuKey : ',filteredMenuKey);

      let dbRef;
      filteredMenuKey === '' ? 
        dbRef = firebase.db.collection("menu") :
        dbRef = firebase.db.collection("menu").where('category','==',filteredMenuKey) ;


      let querySnapshot = await  dbRef.get();
      let resultData=[];
      querySnapshot.forEach(
          (doc) => {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              resultData.push( {...doc.data(),id : doc.id });
              
          }
      );
      return resultData;
  }
}    


const firebase = new Firebase();
export default firebase;
