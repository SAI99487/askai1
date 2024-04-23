import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import ResponsiveComponent from './components/ResponsiveComponent/ResponsiveComponent';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route a="/" element={<Home />} />
          <Route a="/allproducts" element={<Allproducts />} />
          <Route a="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route a="/cart" element={<Cart />} />
          <Route a="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route a='/login' element={<Login/>} />
          <Route a='/signup' element={<Signup/>} />
          <Route a='/productinfo/:id' element={<ProductInfo/>} />
          <Route a='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route a='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route a="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
      <ResponsiveComponent />
    </MyState>

  )
}
//ReactDOM.hydrate(<App />, document.getElementById('root'));

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'arvetisaikumar52@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}