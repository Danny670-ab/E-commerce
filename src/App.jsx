import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from "../src/Components/Hero/Hero";
import Products from './Components/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import Home from './pages/Home';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Mens from './pages/Mens';
import Electronics from './pages/Electronics';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <Products />
              <TopProducts handleOrderPopup={handleOrderPopup} />
              <Banner />
              <Subscribe />
              <Testimonials />
              <Footer />
               
            </>
          }
        />
        <Route path='/Womens' element={<Women />} />
        <Route path='/Kids' element={<Kids />} />
        <Route path='/Mens' element={<Mens />} />
        <Route path='/Electronic' element={<Electronics />} />
        <Route path='/products' element={<Products />} />
        <Route path='/top-products' element={<TopProducts handleOrderPopup={handleOrderPopup} />} />
        <Route path='/subscribe' element={<Subscribe />} />
        {/* Add more routes as necessary */}
      </Routes>
    </Router>
  );
};

export default App;
