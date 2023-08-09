import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import AboutPage from './others/AboutPage';
import ShopHomePage from './virtualShop/ShopHomePage';
import ContactPage from './others/ContactPage';
import AuthenticationAndRegistration from './pages/AuthenticationAndRegistration';
import CommunityGallery from './pages/CommunityGallery';
import PersonalStudio from './pages/PersonalStudio';
import ChallengesAndCompetitions from './pages/ChallengesAndCompetitions';
import VirtualLearningSchool from './pages/VirtualLearningSchool';
import ForumsChatsSupportCommunity from './pages/ForumsChatsSupportCommunity';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQPage from './pages/FAQPage';
import './fonts/fonts.css';

const App = () => {
  return (
    <Router>
      <div className="bg-pink-100 text-pink-600">
        <header className="bg-pink-300 p-4 text-center">
          <Link to="/" className="text-pink-500 mx-8">
            <img src="B-network_transparent.png" alt="Barbie Design Studio" className="mx-auto h-20 mb-4" />
          </Link>
          <nav className="mt-2">
            <Link to="/" className="text-pink-500 mx-8"><i className="fa fa-home fa-2x"></i></Link>
            <Link to="/shop" className="text-pink-500 mx-8"><i className="fa fa-shopping-cart fa-2x"></i></Link>
            <Link to="/contact" className="text-pink-500 mx-8"><i className="fa fa-envelope fa-2x"></i></Link>
            <Link to="/authenticationAndRegistration" className="text-pink-500 mx-8"><i className="fa fa-sign-in fa-2x"></i></Link>
            <Link to="/communityGallery" className="text-pink-500 mx-8"><i className="fa fa-picture-o fa-2x"></i></Link>
            <Link to="/personalStudio" className="text-pink-500 mx-8"><i className="fa fa-paint-brush fa-2x"></i></Link>
            <Link to="/challengesAndCompetitions" className="text-pink-500 mx-8"><i className="fa fa-trophy fa-2x"></i></Link>
            <Link to="/virtualLearningSchool" className="text-pink-500 mx-8"><i className="fa fa-graduation-cap fa-2x"></i></Link>
            <Link to="/forumsChatsSupportCommunity" className="text-pink-500 mx-8"><i className="fa fa-comments fa-2x"></i></Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/shop" element={<ShopHomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/authenticationAndRegistration" element={<AuthenticationAndRegistration />} />
          <Route path="/communityGallery" element={<CommunityGallery />} />
          <Route path="/personalStudio" element={<PersonalStudio />} />
          <Route path="/challengesAndCompetitions" element={<ChallengesAndCompetitions />} />
          <Route path="/virtualLearningSchool" element={<VirtualLearningSchool />} />
          <Route path="/forumsChatsSupportCommunity" element={<ForumsChatsSupportCommunity />} />
          <Route path="/TermsAndConditionsPage" element={<TermsAndConditionsPage />} />
          <Route path="/PrivacyPolicyPage" element={<PrivacyPolicyPage />} />
          <Route path="/FAQPage" element={<FAQPage />} />
        </Routes>
        <footer className="bg-pink-300 p-4 text-center text-pink-500">
          <p>&copy; 2023 Barbie Design Studio</p>
          <Link to="/TermsAndConditionsPage" className="text-pink-500 mx-8">Terms and Conditions</Link>
          <Link to="/PrivacyPolicyPage" className="text-pink-500 mx-8">Privacy Policy</Link>
          <Link to="/FAQPage" className="text-pink-500 mx-8">FAQ</Link>
        </footer>
      </div>
    </Router>
  );
};

export default App;
