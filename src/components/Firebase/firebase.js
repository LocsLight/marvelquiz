import app from 'firebase/app';
import'firebase/auth';
import'firebase/firestore';

const config = {
    apiKey: "AIzaSyCe51sOw78av0u0U-RRvomJB19vJ043EYI",
    authDomain: "marvel-quiz-5d637.firebaseapp.com",
    databaseURL: "https://marvel-quiz-5d637.firebaseio.com",
    projectId: "marvel-quiz-5d637",
    storageBucket: "marvel-quiz-5d637.appspot.com",
    messagingSenderId: "843984489318",
    appId: "1:843984489318:web:049c074520d8687629d6a7"
  };

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
    }

    // Sign up
    signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    // login
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // logout 
    signoutUser = () => this.auth.signOut()

    // Reset password
    passwordReset = email => 
    this.auth.sendPasswordResetEmail(email)

    // firestore
    user = uid => this.db.doc(`users/${uid}`);

}

export default Firebase