import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuwB42as_ysFuzyjIjoIpKEgIMy3kck4s",
  authDomain: "archers-altschool-scissor.firebaseapp.com",
  projectId: "archers-altschool-scissor",
  storageBucket: "archers-altschool-scissor.appspot.com",
  messagingSenderId: "752447817376",
  appId: "1:752447817376:web:10347b0e7a1c0dc059ebc5",
  measurementId: "G-SXVR7ECNR3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


createApp(App).use(router).mount('#app')
