// Import necessary libraries and components
import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import './assets/styles/styles.scss';
import Home from './components/Home/index';
import Product from './components/Products/index';
import ContactUs from './components/ContactUs/index';
import reducer from './store/reducer';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import PageNotFound from './components/PageNotfound';

// Create the Redux store
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Define the routes for the application
const routing = (
  <Router>
    <Header />
    <main>			
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

// Render the app with the Redux store
createRoot(document.getElementById('root')).render(<Provider store={store}>{routing}</Provider>);
