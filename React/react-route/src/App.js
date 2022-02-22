import React from 'react';
import {Routes, Route} from 'react-router-dom'
// import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import OrderSummary from "./components/orderSummary";
import Product from './components/products';
import Featured from './components/products/featured';
import New from './components/products/new';
import User from './components/users';
import UserDetail from './components/userDetail';
import NotFound from './components/404';
import Admin from './components/admin';
import Profile from './components/profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/login';

const LazyAbout = React.lazy(() => import("./components/about"));

function App() {
  return (
    <>
    <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={ 
          <React.Suspense fallback={<>Loading....</>}>
              <LazyAbout /> 
          </React.Suspense>}/>
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path="products" element={<Product />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="user" element={<User />}>
          {/* Dynamic Route */}
            <Route path=':userId' element={<UserDetail />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
   </>
  )
}

export default App;
