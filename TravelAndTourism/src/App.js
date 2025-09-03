
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

import Home from "./pages/Home/Home";
import ImageUpload from "./components/ImageMemory/ImageUpload";
import ImageGallery from "./components/ImageMemory/ImageGallery";

// Import new pages
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Activities from "./pages/Activities/Activities";
import News from "./pages/News/News";
import Destination from "./pages/Destination/Destination";
import TourListings from "./pages/TourListings/TourListings";
import BookNow from "./pages/BookNow/BookNow";
import TermsConditionsPage from "./pages/TermsConditions/TermsConditions";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicy";
// Admin features removed

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/gallery" element={<ImageGallery />} />

        {/* New Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/news" element={<News />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/tour-listings" element={<TourListings />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        {/* Admin dashboard route removed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;