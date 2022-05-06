import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './GetESAletter.css';
export default class GetESAletter extends Component {
    render() { 
        if(this.props.myloading){
        return (
            <> 
                <section className='GetESAletterWrap'> 
                    <Container className=""> 
                        <Row className='align-items-end'>  
                            <Col xs={12} lg={12} xl={6} className='order-2 order-lg-2 order-xl-1 '> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.GetESAletterdata.esaletterheading}</h3> 
                                <div dangerouslySetInnerHTML={{ __html:this.props.GetESAletterdata.esaletterparagraph }} /> 
                            </Col>
                            <Col xs={12} lg={12} xl={6} className='order-1 order-lg-1 order-xl-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.GetESAletterdata.esaletterimagewebp} alt="WHO-CAN-GET-AN-ESA-LETTER?" width="603" height="492" />
                                    : <img src={this.props.GetESAletterdata.esaletterimagejpg} alt="WHO-CAN-GET-AN-ESA-LETTER?" width="603" height="492" />
                                    }
                            </div>
                               
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
