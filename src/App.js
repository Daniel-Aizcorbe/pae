import React from "react";
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Router } from "./Router";

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}
export default App;

