import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen.js';//Not from youtube3 and line 78 is change 4
import ProfileScreen from './screens/ProfileScreen';//this is 3.4 and line 81 is 3.5
import OrdersScreen from './screens/OrdersScreen.js';//4.3
//from 53 line 4.4


//add links to pants and shirt and also the route

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>

<div className="grid-container">
<header className="header">
  <div className="brand">
    <button onClick={openMenu}>
      &#9776;
    </button>
    <Link to="/">Gublu-zon</Link>
  </div>
  <div className="header-links">
    <a href="cart.html">Cart</a>

    {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}

{userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}


    
  </div>
</header>
<aside className="sidebar">
  <h3>Shopping Categories</h3>
  <button className="sidebar-close-button" onClick={closeMenu}>x</button>
  <ul className="categories">
    <li>
    <Link to="/category/Pants">Pants</Link>
    </li>

    <li>
    <Link to="/category/Shirts">Shirts</Link>
    </li>

  </ul>
</aside>
<main className="main">
  <div className="content">
    <Route path="/product/:id" component={ProductScreen} />
    <Route path="/cart/:id?" component={CartScreen} />    

    <Route path="/category/:id" component={HomeScreen} />

    <Route path="/" exact={true} component={HomeScreen} />
    <Route path="/signin" component={SigninScreen} />    
    <Route path="/register" component={RegisterScreen} />
    <Route path="/products" component={ProductsScreen} />
    <Route path="/shipping" component={ShippingScreen} />    
    <Route path="/payment" component={PaymentScreen} />   
    <Route path="/placeorder" component={PlaceOrderScreen} />   
    <Route path="/order/:id" component={OrderScreen} />   
    <Route path="/profile" component={ProfileScreen} />
    <Route path="/orders" component={OrdersScreen} />







  </div>

</main>
<footer className="footer">
  All right reserved.
</footer>
</div>
</BrowserRouter>

 );
}

export default App;
