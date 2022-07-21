import React from "react";
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Terms_condition from './Terms_condition';
import Privacy_policy from './Privacy_policy';
import Faq from './Faq';
import Errorpage from './Errorpage';
import Sitemap from './Sitemap';
import All_Components from './All_Components';
import Header from '../Header';
import Footer from '../Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
        <Header />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms_condition" element={<Terms_condition />} />
            <Route path="/privacy_policy" element={<Privacy_policy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/all_components" element={<All_Components />} />
            
          </Routes>
        <Footer />
    </Router>
      </>
    );
};

export default App;