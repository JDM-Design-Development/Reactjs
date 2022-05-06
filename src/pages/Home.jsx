import React, { Component } from 'react'
import BenifitsESAletter from '../components/BenifitsESAletter/BenifitsESAletter'
import CaliforniaESAlaws from '../components/CaliforniaESAlaws/CaliforniaESAlaws'
import FeaturesESAletter from '../components/FeaturesESAletter/FeaturesESAletter'
import GetESAletter from '../components/GetESAletter/GetESAletter'
import HappyPetOwners from '../components/HappyPetOwners/HappyPetOwners'
import MoneyBackGuarantee from '../components/MoneyBackGuarantee/MoneyBackGuarantee'
import ObtainESAletter from '../components/ObtainESAletter/ObtainESAletter'
import OurClinic from '../components/OurClinic/OurClinic'
import OurHappyClients from '../components/OurHappyClients/OurHappyClients'
import ServingCommunity from '../components/ServingCommunity/ServingCommunity'
import SliderBanner from '../components/SliderBanner/SliderBanner'
import WhyGetESA from '../components/WhyGetESA/WhyGetESA'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import axios from 'axios';
import myapi from '../api/myapi';
import {Row, Col, Container, Button} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class home extends Component {
    signal = axios.CancelToken.source();
     state ={
        esahm:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api esahm is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/46', {
        cancelToken: this.signal.token,
      }) 
        .then(res => this.setState({
            esahm: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    }  
      
    render() {
         const {esahm, isLoaded} = this.state 
        if(isLoaded){ 
        return (  
            <>
                <SliderBanner Slidedataa={esahm.acf.topbanner[0]} myloading={isLoaded} /> 
                <BenifitsESAletter Benifitsdata={esahm.acf.benefits[0]} myloading={isLoaded} /> 
                <GetESAletter GetESAletterdata={esahm.acf.whocangetanesaletter[0]} myloading={isLoaded} /> 
                <ObtainESAletter ObtainESAletterdata={esahm.acf.obtaininganesaletter[0]} myloading={isLoaded} /> 
                <WhyGetESA WhyGetESAdata={esahm.acf.whyshouldyougetanesdletter[0]} myloading={isLoaded} /> 
                <FeaturesESAletter Featuresdata={esahm.acf.featuresofanesaletter[0]} myloading={isLoaded} />  
                <CaliforniaESAlaws CAEsaLawsdata={esahm.acf.californiaesalawsof2022[0]} myloading={isLoaded} /> 
                <ServingCommunity ServingCommunitydata={esahm.acf.servingthecommunityforyears[0]} myloading={isLoaded} /> 
                <MoneyBackGuarantee MoneyBackGuaranteedata={esahm.acf.moneybackguarantee[0]} myloading={isLoaded} /> 
                <OurHappyClients OurHappyClientsdata={esahm.acf.happyclients[0]} myloading={isLoaded} /> 
                <OurClinic OurClinicdata={esahm.acf.ourclinic[0]} myloading={isLoaded} /> 
                <HappyPetOwners HappyPetOwnersdata={esahm.acf.happypetowners[0]} myloading={isLoaded} />
            </>
        )
    }    
         return (
            <> 
    <div className='SliderContainer'> 
           <Container className="">  
            <div> 
                 <Row>  
                    <Col xs={12} md={7} className='order-2 order-lg-1' > 
                        <h1 className="h1"> <Skeleton count={1} width={500} /> </h1>  
                        <p className='Myleft'><Skeleton count={3} width={300} /> </p>
                        <p className='Myleft'><Skeleton count={2} width={150} /> </p>
                        <p className='Myleft'><Skeleton count={1} width={150} height={45} /> </p>
                         <p className='Myleft-2'><Skeleton count={1} width={100} height={100} /> <Skeleton count={1} width={100} height={100} /></p>
                        
                    </Col>
                    <Col xs={12} md={5} className='order-1 order-lg-2'> 
                        <div className="imgBx"> 
                           <Skeleton count={1} width={526} height={451} />   
                        </div>
                    </Col>
                </Row>  
            </div> 
    </Container>
</div>
            </>
        )
    }
}
