import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './IntroOfCertification.css';
export default class IntroOfCertification extends Component {
    render() {
        return (
            <>
                <section className='IntroOfCertificationWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center mb-3'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">Introduction of Certification</h2> 
                                <p>Avoid the crowds, long waits and hassle</p>
                            </Col>
                            <Col xs={12}> 
                                <p>My ESA Doctor is a trusted platform to apply for your emotional support animal letter. We have been operating for more than 17 years, and have helped thousands of people continue receiving emotional support from their pets avoiding the common restrictions in housing and travel. We have board-certified doctors, and always ensure that clients receive their emotional support animal letters quickly and confidentially.</p> 
                            </Col>
                        </Row>
                        
                    
                    </Container>                        
                </section>
            </>
        )
    }
}
