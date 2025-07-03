import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import WomenPage from './components/WomenPage/WomenPage';
import Navbar from './components/Common/Navbar/Navbar'; 
import Footer from './components/Common/Footer/Footer';
import ProductView from './components/Common/Products/ProductView';
import ItemView from './components/Common/Items/ItemView';
import CartDrawer from './components/Common/Cart/CartDrawer';
import MenPage from './components/MenPage/MenPage';
import KidsPage from './components/KidsPage/KidsPage';
import Login from './components/Common/Authentication/Login';
import Register from './components/Common/Authentication/Register';

const App = () => {
  return (
    <div  className="bg-white dark:bg-gray-900 dark:text-white ">
      <Navbar />
      <CartDrawer/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/womens" element={<WomenPage />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/item/:id" element={<ItemView />} />
        <Route path='/mens' element={<MenPage/>}/>
        <Route path='/kids' element={<KidsPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
