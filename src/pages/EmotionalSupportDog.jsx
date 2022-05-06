import React from 'react'
import TopImgBanner from '../components/TopImgBanner/TopImgBanner';
import StressfullPlaceWhereESD from '../components/StressfullPlaceWhereESD/StressfullPlaceWhereESD';
import WhatIsAnESD from '../components/WhatIsAnESD/WhatIsAnESD';
import WhyYouGetESD from '../components/WhyYouGetESD/WhyYouGetESD';
import HowToRegisterESD from '../components/HowToRegisterESD/HowToRegisterESD';
import HowToTrainESD from '../components/HowToTrainESD/HowToTrainESD';
import QualifyingConditionESDCertification from '../components/QualifyingConditionESDCertification/QualifyingConditionESDCertification';
import LegallyRegisterAnESD from '../components/LegallyRegisterAnESD/LegallyRegisterAnESD';
import ESDHelpYourCondition from '../components/ESDHelpYourCondition/ESDHelpYourCondition';
import HowToGetESD from '../components/HowToGetESD/HowToGetESD';
import HowGetESDLetter from '../components/HowGetESDLetter/HowGetESDLetter';
import ProcessRegisterESD from '../components/ProcessRegisterESD/ProcessRegisterESD';
import WhatEmotionalServiceDog from '../components/WhatEmotionalServiceDog/WhatEmotionalServiceDog';
import ServiceDogVSESD from '../components/ServiceDogVSESD/ServiceDogVSESD';
import ESDLaws from '../components/ESDLaws/ESDLaws';
import TravelingWithESD from '../components/TravelingWithESD/TravelingWithESD';
import WhatAreBestESDBreeds from '../components/WhatAreBestESDBreeds/WhatAreBestESDBreeds';
import EmotionalSupportDogVest from '../components/EmotionalSupportDogVest/EmotionalSupportDogVest';

class EmotionalSupportDog extends React.Component{
render(){
        return(
            <>
               <TopImgBanner 
               Headline="Everything You Need To Learn About Getting An  Emotional Support Dog" 
               Images="bannerESA.jpg" 
               BClr="var(--WhiteColor)" 
               Txtcolor="#3c3c3c" 
               overlaybg="overlaybg-X" />
               <StressfullPlaceWhereESD />
               <WhatIsAnESD />
               <WhyYouGetESD />
               <HowToRegisterESD />
               <HowToTrainESD />
               <QualifyingConditionESDCertification />
               <LegallyRegisterAnESD />
               <ESDHelpYourCondition />
               <HowToGetESD />
               <HowGetESDLetter />
               <ProcessRegisterESD />
               <WhatEmotionalServiceDog />
               <ServiceDogVSESD />
               <ESDLaws />
               <TravelingWithESD />
               <WhatAreBestESDBreeds />
               <EmotionalSupportDogVest />
            </>
        )  
    }
}

export default EmotionalSupportDog;