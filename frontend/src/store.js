import { createStore, combineReducers,applyMiddleware,compose} from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer,productReviewSaveReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartReducers';
import Cookie from 'js-cookie';
import { userSigninReducer, userRegisterReducer,userUpdateReducer  } from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer } from './reducers/orderReducers';//not from youtube 11
                 //4.13 last imports                                                           //orderPayReducer adding was 2.15

// imports userUpdateReducer and userUpdateReducer is 3.19                                                        
                                                                            
const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;


const initialState= {cart: {cartItems, shipping:{},payment:{} }, userSignin: { userInfo }};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer, 
    productDelete: productDeleteReducer,
    orderCreate: orderCreateReducer,//not from youtube 12
    orderDetails: orderDetailsReducer,// not from youtube 13
    orderPay: orderPayReducer,//change no 2.16
    userUpdate: userUpdateReducer,//3.20
    myOrderList: myOrderListReducer,//3.21
    myOrderList: myOrderListReducer,//4.14
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  productReviewSave: productReviewSaveReducer,

  

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
    export default store;