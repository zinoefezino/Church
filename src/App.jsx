import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Time from "./components/Time";
import BibleSection from "./components/BibleSection";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";
import DonationPage from "./components/DonationPage";
import SuccessPage from "./components/SuccessPage";
import BlogPage from "./components/BlogPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Time />
              <Section1 />
              <BibleSection />
              <Section2 />
              <Footer />
            </>
          }
        />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
