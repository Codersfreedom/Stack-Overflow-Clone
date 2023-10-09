// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzQ2tGRVJQGMnweNCZJsOkZEsDgtzZ0vw',
  authDomain: 'stackoverflow-ef6c2.firebaseapp.com',
  projectId: 'stackoverflow-ef6c2',
  storageBucket: 'stackoverflow-ef6c2.appspot.com',
  messagingSenderId: '529892480101',
  appId: '1:529892480101:web:6337a235d26ae2682be28c',
};

 firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export   {auth,firebase} ;
