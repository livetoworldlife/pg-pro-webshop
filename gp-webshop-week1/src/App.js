import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from '../src/components/MainNavigation';
import Footer from '../src/components/Footer';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {

  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <ProductsPage />
        </Route>
        <Route path='/detail/:productId' exact>
          <ProductDetailPage />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
