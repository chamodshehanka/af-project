import * as firebase from 'firebase/app';
import 'firebase/storage';
import config from './firebaseconfig';

const firebaseApp = firebase.initializeApp(config);
const storage = firebaseApp.storage();

export default storage;
