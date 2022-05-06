import React, { Component } from 'react';
import GuideWithFlyingPet from '../components/GuideWithFlyingPet/GuideWithFlyingPet';
import HowUseESA from '../components/HowUseESA/HowUseESA';
import OurGuidanceVideos from '../components/OurGuidanceVideos/OurGuidanceVideos';
import OurProcess from '../components/OurProcess/OurProcess';
import TopInnerBanner from '../components/TopInnerBanner/TopInnerBanner';
import axios from 'axios';
import myapi from '../api/myapi';
import Skeleton from 'react-loading-skeleton';
import {Row, Col, Container} from 'react-bootstrap';
export default class HowItWorks extends Component {
    signal = axios.CancelToken.source();
     state ={
        hwitWrks:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api hwitWrks is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/215', {

        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            hwitWrks: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 
     

    render() {
        const { hwitWrks, isLoaded} = this.state 
        if(isLoaded){  
        return ( 
            <>
                <TopInnerBanner 
                Headline={hwitWrks.acf.howitworksslider[0].hiwbannertxt}
                Paragraphtext={hwitWrks.acf.howitworksslider[0].hiwparagraph}
                Paragraph={hwitWrks.acf.howitworksslider[0].hiwparagraphshowhide} 
                Images={hwitWrks.acf.howitworksslider[0].hiwbannerbgimg}
                BClr={hwitWrks.acf.howitworksslider[0].hiwbgcolor}
                Txtcolor={hwitWrks.acf.howitworksslider[0].hiwtxtcolor}
                Buttontxt={hwitWrks.acf.howitworksslider[0].hiwbuttontext}
                ButtonHide={hwitWrks.acf.howitworksslider[0].hiwbuttonhideshow}
                btnlinks={hwitWrks.acf.howitworksslider[0].hiwbuttonlink}
                Txtalign={hwitWrks.acf.howitworksslider[0].hiwtextalign} 
                Bheight={hwitWrks.acf.howitworksslider[0].hiwbannerheight}
                overlaybg={hwitWrks.acf.howitworksslider[0].hiwoverlaybg} /> 
                <OurProcess OurProcessData={hwitWrks.acf.ourprocesstoobtainanesaletter[0]} myloading={isLoaded} /> 
                <OurGuidanceVideos OurGuideVideoData={hwitWrks.acf.learnhowtoliveandflypetvideos[0]}  myloading={isLoaded} />
                <GuideWithFlyingPet GuidewidFlyPetData={hwitWrks.acf.acompleteguidetoflyingwithyourpet[0]} myloading={isLoaded} /> 
                <HowUseESA howuseesaData={hwitWrks.acf.howtouseesalettertogetacc[0]} myloading={isLoaded} />
            </>   
        )
   }
         return (
            <> 
            <section className={`TopInnerBannerWrap how-it-works overlaybg-Y`}>   
                     <Container className=""> 
                        <Row className="text-left align-items-center row">
                            <Col xs={12}> 
                                <h2 className="text-left h2 pb-2"><Skeleton count={1} width={300} /></h2> 
                            </Col>
                        </Row>
                     </Container>                        
            </section>
            <section className='OurProcessWrap'> 
                     <Container> 
                        <Row  className="text-center"> 
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2 wTopHeadingg"><Skeleton count={1} width={500} /> </h2> 
                                <p> <Skeleton count={1}  width={500} /></p>
                            </Col>
                        </Row>
                         <Row className='align-items-center'> 
                            <Col xs={12} lg={6} md={6} className='OurProcessCol'> 
                            <div className='OurProcessBx'>
                                <div className='OpImgBx'> 
                                     <Skeleton count={1}  width={500} height={600} />
                                </div>
                            </div>
                            </Col>
                            <Col xs={12} lg={6} md={6} className='OurProcessCol'> 
                            <div className='OurProcessBx'>
                            
                                <div className='OpConBx'> 
                                    <h2> <Skeleton count={1}  /></h2>
                                    <p> <Skeleton count={4.5} /></p>
                                </div>
                                 <div className='OpConBx'> 
                                    <h2> <Skeleton count={1}  /></h2>
                                    <p> <Skeleton count={4.5} /></p>
                                </div>
                                 <div className='OpConBx'> 
                                    <h2> <Skeleton count={1}  /></h2>
                                    <p> <Skeleton count={4.5} /></p>
                                </div>
                            </div>
                            </Col>                            
                        </Row>
                     </Container>                        
                </section>
            </>
        )
    }
}
