import React, { Component } from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import SufferingToPatients from '../components/SufferingToPatients/SufferingToPatients'
import TopImgBanner from '../components/TopImgBanner/TopImgBanner'
import AboutClinic from '../components/AboutClinic/AboutClinic'
import OurPhilosophy from '../components/OurPhilosophy/OurPhilosophy'
import OurMission from '../components/OurMission/OurMission'
import ReviewsSec from '../components/ReviewsSec/ReviewsSec'
import axios from 'axios';
import myapi from '../api/myapi';
export default class OurClinic extends Component {
    signal = axios.CancelToken.source();
     state ={
        OurClnc:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api OurClnc is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/217', {
        cancelToken: this.signal.token,
      }) 
        .then(res => this.setState({
            OurClnc: res.data,
            isLoaded:true
        })) 
        .catch(err => console.log());
    } 
    render() { 
        const { OurClnc, isLoaded} = this.state 
        if(isLoaded){  
        return (  
         <>    
               <TopImgBanner  
                Headline={OurClnc.acf.ourclinictopbanner[0].ocbannertxt}  
                Paragraphtext={OurClnc.acf.ourclinictopbanner[0].ocparagraph} 
                Paragraph={OurClnc.acf.ourclinictopbanner[0].ocparagraphshowhide}  
                Images={OurClnc.acf.ourclinictopbanner[0].ocbannerbgimg} 
                BClr={OurClnc.acf.ourclinictopbanner[0].ocbgcolor}
                Txtcolor={OurClnc.acf.ourclinictopbanner[0].octxtcolor} 
                Buttontxt={OurClnc.acf.ourclinictopbanner[0].ocbuttontext} 
                ButtonHide={OurClnc.acf.ourclinictopbanner[0].ocbuttonhideshow}
                btnlinks={OurClnc.acf.ourclinictopbanner[0].ocbuttonlink}
                Txtalign={OurClnc.acf.ourclinictopbanner[0].octextalign} 
                Bheight={OurClnc.acf.ourclinictopbanner[0].ocbannerheight}
                overlaybg={OurClnc.acf.ourclinictopbanner[0].ocoverlaybg} /> 
                <SufferingToPatients suffertoPat={OurClnc.acf.ocsectionone[0]} myloading={isLoaded} />  
                <AboutClinic AbtClnData={OurClnc.acf.ocsectionsecond[0]} myloading={isLoaded} />
                <OurPhilosophy OurPhyData={OurClnc.acf.ocsectionthird[0]} myloading={isLoaded} />
                <OurMission MsnData={OurClnc.acf.ocsectionfour[0]} myloading={isLoaded} />
                <ReviewsSec RevwData={OurClnc.acf.ocsectionfive[0]} myloading={isLoaded} />           
            </>
        )
    }
         return (
            <> 
                <section className="TopImgBannerWrap our-clinic overlaybg-Y">   
                     <Container className=""> 
                        <Row className="align-items-center">
                            <Col xs={12} md={6}> 
                                <h2 className="h2 pb-2">Our Clinic</h2> 
                            </Col>
                            
                        </Row>
                     </Container>                        
                </section>
            </>
        )
    }
}
