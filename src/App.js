import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import reducer from './reducer'
import cartItems from "./cart-items";
import { createStore } from "redux";
import {Provider} from "react-redux"
import Footer from './components/Footer';


const initialStore ={
 cart: cartItems,
 total: 0,
 amount:0,
};



const store = createStore(reducer, initialStore);

function App() {


  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer />
      <Footer/>
    </Provider>
  );
}

export default App;
