import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ObtainESAletter.css';
export default class ObtainESAletter extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='ObtainESAletterWrap'>  
                     <Container className=""> 
                        <Row className='align-items-end'>
                            <Col xs={12} lg={12} xl={6} className='order-1 order-lg-1 order-xl-1'> 
                                <div className='imgbx'> 
                                    {
                                            isWebpSupported()
                                        ? <img src={this.props.ObtainESAletterdata.obtainingimagewebp} alt="Obtaining an ESA Letter" width="603" height="615" />
                                        : <img src={this.props.ObtainESAletterdata.obtainingimagejpg} alt="Obtaining an ESA Letter" width="603" height="615" />
                                    }
                                </div>
                            </Col>
                             <Col xs={12} lg={12} xl={6} className='order-2 order-lg-2 order-xl-2 '> 
                                <h2 className="h2 text-uppercase pb-2">{this.props.ObtainESAletterdata.obtainingheading}</h2> 
                                <div dangerouslySetInnerHTML={{ __html:this.props.ObtainESAletterdata.obtainingcontent }} /> 
                            </Col>
                        </Row>
                     </Container>                        
                </section>
            </>
       )
        }
        return (
            <> 
            </>
        )
    }
}
