import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './SliderBanner.css';
import axios from 'axios';
import myapi from '../../api/myapi';
import PopupComp from '../PopupComp/PopupComp'
class SliderBanner extends React.Component{ 
     signal = axios.CancelToken.source();
     state ={
        popbx:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api popbx is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/popup', {
        cancelToken: this.signal.token,
      }) 
        .then(res => this.setState({
            popbx: res.data
        }))
        .catch(err => console.log());
    }  

 
    render() { 
        const {popbx} = this.state 
        
       
        return (
        <div className='SliderContainer'> 
           <Container className="">  
            <Carousel showArrows={false} showThumbs={false} autoPlay interval="1000" transitionTime="100" >
            <div> 
                 <Row>  
                    <Col xs={12} lg={7} className='order-2 order-lg-1' > 
                        <h1 className="h1">{this.props.Slidedataa.bannerheading}</h1>  
                        <div className="list-block"> 
                            <ul className="check-list" dangerouslySetInnerHTML={{ __html:this.props.Slidedataa.bannercontent }} />
                        </div>
                        <div className="price-block"> <p><small>Price From:</small><br /> ${this.props.Slidedataa.bannerprice}/Year</p> </div>
                        <div className="button-area text-left"> 
                               <PopupComp popcontent={popbx} /> 
                        </div>
                        <p className="text-left TrustBadges">  
                            {
                                isWebpSupported()
                            ? <img src={this.props.Slidedataa.bannerlogoimageswebp} alt="Trust Badges" width="268" height="147" />
                            : <img src={this.props.Slidedataa.bannerlogoimagesjpg} alt="Trust Badges" width="268" height="147" />
                            }
                        </p> 
                    </Col>
                    <Col xs={12} lg={5} className='order-1 order-lg-2 slideimgbx'> 
                        <div className="imgBx"> 
                                {
                                    isWebpSupported()
                                ? <img src={this.props.Slidedataa.bannerimagewebp} alt="Get Your ESA Letter Online by My ESA Doctor" width="640" height="487" />
                                : <img src={this.props.Slidedataa.bannerimagejpg} alt="Get Your ESA Letter Online by My ESA Doctor" width="640" height="487" />
                                }
                        </div>
                    </Col>
                </Row>  
            </div> 
        </Carousel>
    </Container>
</div>
        )
    }
}
export default SliderBanner