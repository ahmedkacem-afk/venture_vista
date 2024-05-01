import "./index.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, Campgrounds, Logout, Profile, Contact } from "./pages";
import CampDetails from "./pages/CampDetails";
import ScrollToTop from "./components/ScrollToTop";
import NewCommentPage from "./components/NewCommentPage";

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* render the element  Home which is a page */}
          <Route path="/" element={<Home />} />
          {/* render the element  About which is a page */}
          <Route path="/logout" element={<Logout />} />
          {/* same with the Projects page */}
          <Route path="/campgrounds" element={<Campgrounds />} />
          {/* same with contacts page */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="campgrounds/:campgroundId" element={<CampDetails />} />
          <Route
            path="/campgrounds/:campgroundId/new-comment"
            element={<NewCommentPage />}
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
