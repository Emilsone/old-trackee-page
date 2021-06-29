
import store from '../store'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDot0IrD4yZnL2js4MSWg-ridfhHTBqyyY",
    authDomain: "trackee-c921f.firebaseapp.com",
    projectId: "trackee-c921f",
    storageBucket: "trackee-c921f.appspot.com",
    messagingSenderId: "704334760361",
    appId: "1:704334760361:web:a5e0e825c5d66589801cb8",
    measurementId: "G-5ZMM0F45EW"
};
// Initialize Firebase
const database = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

database.signUp = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        store.commit('setCurrentUser', firebase.auth().currentUser)
        return true
    } catch (error) {
        return error
    }
}

database.signIn = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        store.commit('setCurrentUser', firebase.auth().currentUser)
        return true
    } catch (error) {
        return error
    }
}
export default database