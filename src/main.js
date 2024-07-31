import './assets/main.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpkzk2q2sVRV6bR-coejiLSJEFuSfSZww',
  authDomain: 'ehealth4everyone-8816a.firebaseapp.com',
  projectId: 'ehealth4everyone-8816a',
  storageBucket: 'ehealth4everyone-8816a.appspot.com',
  messagingSenderId: '850242775580',
  appId: '1:850242775580:web:ea7ce70cd5b48365790dd9',
};

const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp);
console.log(db);

const app = createApp(App);

app.use(router);

app.mount('#app');
