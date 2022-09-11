import {createApp} from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

let firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

if (process.env.NODE_ENV === "development") {
    firebaseConfig = {
        apiKey: process.env.VUE_APP_apiKey,
        authDomain: process.env.VUE_APP_authDomain,
        projectId: process.env.VUE_APP_projectId,
        storageBucket: process.env.VUE_APP_storageBucket,
        messagingSenderId: process.env.VUE_APP_messagingSenderId,
        appId: process.env.VUE_APP_appId,
        measurementId: process.env.VUE_APP_measurementId
    };
}


// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App);
app.mount("#app");
