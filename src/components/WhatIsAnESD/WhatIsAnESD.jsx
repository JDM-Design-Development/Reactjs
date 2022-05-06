import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './WhatIsAnESD.css';
export default class WhatIsAnESD extends Component {
    render() {
        return (
            <>
                <section className='WhatIsAnESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1'> 
                                <h2 className="h2 text-uppercase pb-2">What is an Emotional Support Dog?</h2> 
                                <p>An emotional support dog is any dog that provides you with support and comfort and acts as your support to help carry out day to day activities. Do not confuse emotional support dogs with therapy or service dogs. The biggest differentiator is that there are no <b>emotional support dog requirements</b> for a dog to be <b>certified as an emotional support dog</b></p>
                            </Col>
                            <Col xs={12} lg={4} xl={4} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/what-is-an-esd.webp' alt="what-is-an-emotional-support-dog" width="445" height="171" />
                                    : <img src='images/what-is-an-esd.jpg' alt="what-is-an-emotional-support-dog" width="445" height="171" />
                                    }
                            </div>
                            </Col>
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
