import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBDv4RXx0EBqYPcmsCoNUTAPO-9BowoNXw',
  authDomain: 'form-builder-40ff9.firebaseapp.com',
  databaseURL: 'https://form-builder-40ff9.firebaseio.com',
  projectId: 'form-builder-40ff9',
  storageBucket: 'form-builder-40ff9.appspot.com',
  messagingSenderId: '1049314395199',
  appId: '1:1049314395199:web:736a52232511dc2f'
};

firebase.initializeApp(firebaseConfig);
export default firebase;
