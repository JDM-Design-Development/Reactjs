import React, { Component } from 'react'
import AirCarriersAct from '../components/AirCarriersAct/AirCarriersAct'
import FairHousingAct from '../components/FairHousingAct/FairHousingAct'
import TopImgBanner from '../components/TopImgBanner/TopImgBanner'
import {Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';
import myapi from '../api/myapi';
export default class ESALaws extends Component {
  signal = axios.CancelToken.source();
     state ={
        EsaLws:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api EsaLws is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/221', {
        cancelToken: this.signal.token,
      }) 
        .then(res => this.setState({
            EsaLws: res.data,
            isLoaded:true
        })) 
        .catch(err => console.log());
    } 
    render() { 
        const { EsaLws, isLoaded} = this.state 
        if(isLoaded){  
        return (  
        <>
            <TopImgBanner  
            Headline={EsaLws.acf.elbannertop[0].elbannertxt}  
            Paragraphtext={EsaLws.acf.elbannertop[0].elparagraph} 
            Paragraph={EsaLws.acf.elbannertop[0].elparagraphshowhide}  
            Images={EsaLws.acf.elbannertop[0].elbannerbgimg} 
            BClr={EsaLws.acf.elbannertop[0].elbgcolor}
            Txtcolor={EsaLws.acf.elbannertop[0].eltxtcolor} 
            Buttontxt={EsaLws.acf.elbannertop[0].elbuttontext} 
            ButtonHide={EsaLws.acf.elbannertop[0].elbuttonhideshow}
            btnlinks={EsaLws.acf.elbannertop[0].elbuttonlink}
            Txtalign={EsaLws.acf.elbannertop[0].eltextalign} 
            Bheight={EsaLws.acf.elbannertop[0].elbannerheight}
            overlaybg={EsaLws.acf.elbannertop[0].eloverlaybg} />  
            <FairHousingAct FairHsgAct={EsaLws.acf.elsection1[0]} myloading={isLoaded} />
            <AirCarriersAct AirCrsAct={EsaLws.acf.elsection2[0]} myloading={isLoaded} />  
        </>
        )
    }
        return (
        <> 
         <section className="TopImgBannerWrap our-clinic overlaybg-Y">   
                <Container className=""> 
                <Row className="align-items-center">
                    <Col xs={12} md={6}> 
                        <h2 className="h2 pb-2">What Are Emotional Support Animal Laws?</h2> 
                        <p>Everything you need to know about ESA laws </p>
                    </Col>
                </Row>
                </Container>                        
        </section>
        </>
        )
    }
}
