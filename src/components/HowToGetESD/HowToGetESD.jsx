import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './HowToGetESD.css';
export default class HowToGetESD extends Component {
    render() {
        return (
            <>
                <section className='HowToGetESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1'> 
                                <h2 className="h2 text-uppercase pb-2">How To Get An Emotional Support Dog?</h2> 
                                <p>Getting an <strong>emotional support dog</strong> is not that difficult. Any dog can be your <strong>emotional support dog</strong>. You can look at emotional support dog adoption or if you already have a dog you can get it certified as an emotional support dog. An emotional support dog is extremely beneficial for people dealing with any type of emotional or mental disorder. So, if you experience any psychological disorder, you can get a dog and apply for an emotional support dog registration. Your emotional support dog doesn’t need to go through any kind of training as their role is to offer care and love – which is one of their primary characteristics. So, you can choose to adopt or buy yourself the breed you like and apply for an <strong>emotional support dog</strong> letter.</p>
                            </Col>
                            <Col xs={12} lg={4} xl={4} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/getting-an-emotional-support-dog.webp' alt="getting-an-emotional-support-dog" width="445" height="340" />
                                    : <img src='images/getting-an-emotional-support-dog.jpg' alt="getting-an-emotional-support-dog" width="445" height="340" />
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
