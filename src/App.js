
import React, { useState, useEffect } from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import OurClinic from "./pages/OurClinic";
import Blog from "./pages/Blog";
import Guide from "./pages/Guide";
import ESALaws from "./pages/ESALaws";
import Shop from "./pages/Shop";
import ESAGettingStartedGuide from "./pages/ESAGettingStartedGuide";
import HowToRegisterDog from "./pages/HowToRegisterDog";
import HowToRegisterCat from "./pages/HowToRegisterCat";
import AnimalVsServiceAnimal from "./pages/AnimalVsServiceAnimal";
import HowToFlyWithDog from "./pages/HowToFlyWithDog";
import ESAlawsCA from "./pages/ESAlawsCA";
import GetDogCertification from "./pages/GetDogCertification";
import FairHousingActSection from "./pages/FairHousingActSection";
import ESADogVest from "./pages/ESADogVest";
import ESADogBreeds from "./pages/ESADogBreeds";
import EmotionalSupportDog from "./pages/EmotionalSupportDog";
import Single from "./pages/Single";
import PrivacyTrust from "./pages/PrivacyTrust";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Disclaimer from "./pages/Disclaimer";
import Navigation from "./components/routing/Navigation";
import './global.css';
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search/Search";
import FooterForm from "./components/FooterForm/FooterForm";
import NotFoundPage from "./pages/NotFoundPage";
import GoToTop from "./pages/GoToTop";
import myapi from './api/myapi';
import SecureLogos from './components/SecureLogos/SecureLogos';
import TagSingle from './pages/TagSingle';
import CategorySingle from './pages/CategorySingle';
function App() { 
    useEffect(() => {
        getyData();
    }, [])
    const [mymenu2, setmymenu2] = useState();
    const [mymenu3, setmymenu3] = useState();
    const [mymenu4, setmymenu4] = useState();
    const [mymenu5, setmymenu5] = useState();
    const [mymenu6, setmymenu6] = useState();
    const [mymenu7, setmymenu7] = useState();
    const [mymenu8, setmymenu8] = useState();
    const [mymenu9, setmymenu9] = useState(); 
    const [mymenu10, setmymenu10] = useState();
    const [mymenu11, setmymenu11] = useState();
    const [mymenu12, setmymenu12] = useState();
    const [mymenu13, setmymenu13] = useState();
    const [mymenu14, setmymenu14] = useState(); 
    const [mymenu15, setmymenu15] = useState(); 
    const [mymenu16, setmymenu16] = useState(); 

  const getyData = async () => { 
      try {
          const res = await myapi.get("/menu"); 
          setmymenu2(res.data[1].url.split('/')[3])  
          setmymenu3(res.data[2].url.split('/')[3])  
          setmymenu4(res.data[3].url.split('/')[3])    
          setmymenu5(res.data[5].url.split('/')[3])      
          setmymenu6(res.data[6].url.split('/')[3])  
          setmymenu7(res.data[7].url.split('/')[3])   
          setmymenu8(res.data[8].url.split('/')[3]) 
          setmymenu9(res.data[9].url.split('/')[3]);  
          setmymenu10(res.data[10].url.split('/')[3]);   
          setmymenu11(res.data[11].url.split('/')[3]);  
          setmymenu12(res.data[12].url.split('/')[3]);    
          setmymenu13(res.data[13].url.split('/')[3]);    
          setmymenu14(res.data[14].url.split('/')[3]);  
          setmymenu15(res.data[15].url.split('/')[3]);  
          setmymenu16(res.data[16].url.split('/')[3]);         
      } catch (err) { 
          alert(err.message);  
      }};

return ( 
    <BrowserRouter> 
    <Navigation />
    <Routes>
      <Route path={"/"}  element={<Home />} />  
      <Route path={`/${mymenu2}`}  element={<HowItWorks />} /> 
      <Route path={`/${mymenu3}`}  element={<OurClinic />} />
      <Route path={`/${mymenu4}`}  element={<Blog />} />
      <Route path={"/blog/:slug"}  element={<Single />} /> 
      <Route path={"/tag/:slug"}  element={<TagSingle />} /> 
      <Route path={"/category/:slug"}  element={<CategorySingle />} /> 
      <Route path={"/guide"}  element={<Guide />} /> 
      <Route path={`/${mymenu5}`} element={<ESAGettingStartedGuide />} />                               
      <Route path={`/${mymenu6}`} element={<HowToRegisterDog />} />                               
      <Route path={`/${mymenu7}`} element={<HowToRegisterCat />} />                              
      <Route path={`/${mymenu8}`} element={<AnimalVsServiceAnimal />} />                              
      <Route path={`/${mymenu9}`} element={<HowToFlyWithDog />} />                               
      <Route path={`/${mymenu10}`} element={<ESAlawsCA />} />                               
      <Route path={`/${mymenu11}`} element={<GetDogCertification />} />                              
      <Route path={`/${mymenu12}`} element={<FairHousingActSection />} />                              
      <Route path={`/${mymenu13}`} element={<ESADogVest />} />                              
      <Route path={`/${mymenu14}`} element={<ESADogBreeds />} />                              
      <Route path={`/${mymenu15}`} element={<EmotionalSupportDog />} />       
      <Route path={`/${mymenu16}`}  element={<ESALaws />} />
      <Route path={"/shop"}  element={<Shop />} /> 
      <Route path={"/search"}  element={<Search />} />
      <Route path={"/privacy-trust"}  element={<PrivacyTrust />} />
      <Route path={"/terms-of-use"}  element={<TermsOfUse />} />
      <Route path={"/privacy-policy"}  element={<PrivacyPolicy />} />
      <Route path={"/refund-policy"}  element={<RefundPolicy />} />
      <Route path={"/disclaimer"}  element={<Disclaimer />} />     
      <Route path="*" element={<NotFoundPage />} />   
    </Routes>
    <GoToTop /> 
    <SecureLogos />
    <Footer />
    <FooterForm />
    </BrowserRouter>
  );
}
export default App;


                                            