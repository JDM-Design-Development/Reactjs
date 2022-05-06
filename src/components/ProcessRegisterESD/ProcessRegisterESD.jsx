import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ProcessRegisterESD.css';
export default class ProcessRegisterESD extends Component {
    render() {
        return (
            <>
                <section className='ProcessRegisterESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1'> 
                                <h2 className="h2 text-uppercase pb-2">What Is the Process for Registering an Emotional Support Dog?</h2> 
                                <p>There is a three-step process for registering an emotional support dog. Fill up a simple free pre-qualification form, then our doctor will contact you via video call and evaluate your condition. After the approval, you will receive your emotional support dog letter via email within minutes. Online ESA registration is simpler and faster than visiting a physical clinic.</p>
                            </Col>
                            <Col xs={12} lg={4} xl={4} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/process.webp' alt="process" width="445" height="340" />
                                    : <img src='images/process.jpg' alt="process" width="445" height="340" />
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
