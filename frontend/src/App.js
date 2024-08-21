// import 'bootstrap/dist/css/bootstrap.css'
// import './assets/css/style.css'
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HowDoISignUp from './pages/HowDoISignUp';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Registration from './pages/Registration';
import DonorRegistration from './pages/DonorRegistration';
import HowDonationWorks from './pages/HowDonationWorks';
import Layout from './pages/Layout';
import RulesAndRegulations from './pages/RulesAndRegulations';
import MythsAndFacts from './pages/MythsAndFacts';
import WhatCanBeDonated from './pages/WhatCanBeDonated';
import WhatHappensAfterSignUp from './pages/WhatHappensAfterSignUp';
import WhoCanDonateOrgans from './pages/WhoCanDonateOrgans';
import WhySignUp from './pages/WhySignUp';
import OrganDonationForm from './pages/OrganDonationForm';
import OrganRequestForm from './pages/OrganRequestForm';

function App() {
  return (
    <div> 
      
        <BrowserRouter>
        <Layout> 
          <Routes>
          <Route  path="/" element={<Home />}  /> 
          <Route  path="/howsignup" element={<HowDoISignUp />}  /> 
          <Route  path="/howdonationworks" element={<HowDonationWorks />}  /> 
          <Route  path="/login" element={<Login />}  /> 
          <Route  path="/register" element={<Registration />}  />
          <Route  path="/donorregistration" element={<DonorRegistration />}  />

          <Route  path="/mythsandfacts" element={<MythsAndFacts />}  /> 
          <Route  path="/rulesandregulations" element={<RulesAndRegulations />}  /> 
          <Route  path="/whatcanbedonated" element={<WhatCanBeDonated />}  /> 
          <Route  path="/whataftersignup" element={<WhatHappensAfterSignUp />}  /> 
          <Route  path="/whocandonate" element={<WhoCanDonateOrgans />}  />
          <Route  path="/whysignup" element={<WhySignUp />}  />
          <Route  path="/organdonorform" element={<OrganDonationForm />}  />
          <Route  path="/organrequestform" element={<OrganRequestForm />}  />
          <Route  path="/dashboard" element={<Dashboard />}  />

          </Routes>
          </Layout>
          </BrowserRouter> 
     
    
    </div>
  );
}

export default App;
