import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALiH_VQF3JVn0s-vyRLPaR8ndLqjDypJA',
  authDomain: 'finance-tracker-85380.firebaseapp.com',
  projectId: 'finance-tracker-85380',
  storageBucket: 'finance-tracker-85380.appspot.com',
  messagingSenderId: '658776356728',
  appId: '1:658776356728:web:d2197c78790f950b3a3a8d',
  measurementId: 'G-YGP4J9GQKG',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
