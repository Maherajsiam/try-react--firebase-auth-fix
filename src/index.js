import React from "react";
import ReactDOM from 'react-dom/client';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./ducks/reducers";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//firebase 
const firebaseConfig = {
  apiKey: "AIzaSyD6lZDmPvOtyt3a1bJ3srjFqSuVJE5VsYA",
  authDomain: "overcomplicated-todo-app-f0ea6.firebaseapp.com",
  projectId: "overcomplicated-todo-app-f0ea6",
  storageBucket: "overcomplicated-todo-app-f0ea6.appspot.com",
  messagingSenderId: "1053851600617",
  appId: "1:1053851600617:web:5fb6c42bc124b0a1c9d278",
  measurementId: "G-9L92F7P5JH"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

//firebase 

//redux toolkit
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};
//redux toolkit

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
