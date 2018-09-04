// import firebase from 'firebase'
import * as firebase from 'firebase/app';
import 'firebase/database';

var config = {
    "apiKey": "AIzaSyAJ_UFfGV8luR8M5UOekf0X-d9rUaMRUDg",
    "databaseURL": "https://not-recommend.firebaseio.com",
    "storageBucket": "not-recommend.appspot.com",
    "authDomain": "not-recommend.firebaseapp.com",
    "messagingSenderId": "57894742554",
    "projectId": "not-recommend"
};
var fire = firebase.initializeApp(config);
export default fire;