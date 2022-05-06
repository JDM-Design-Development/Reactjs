import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './HowToRegisterESD.css';
export default class HowToRegisterESD extends Component {
    render() {
        return (
            <>
                <section className='HowToRegisterESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center mb-3'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">How to register you emotional support dog?</h2> 
                            </Col>
                            <Col xs={12}> 
                                <p>The best way to <b>register your emotional support dog </b>is by choosing a reputable ESA doctor. Dogs have been proven to help you fight mental disorders like depression and anxiety without the need for prescription medication.</p>
                                <p>Mental conditions are plaguing our country. And, an emotinal support dog can be an excelent solution to this. With all the care and compassion they provide, having one in your life can really change everything. They have been medicaly proven to be helpfull in the treatment of serveal conditons like depression, anxiety, PTSD, and stress. If you don't have one, get one for yourself, and experience happiness like none other.</p>
                                <p>So, how do you <b>register your emotional support dog?</b> Well, thee is a simple three-step process in places like MyESADoctor.</p> 
                            </Col>
                        </Row>
                        <Row> 
                            <Col xs={12} md={4}> 
                            <div className='HowToRegisterWrap'>
                                <div className='BiconBx'> 
                                    {
                                        isWebpSupported()
                                    ? <img src='images/Travel_in_cabin.webp' alt="Fill Out a Simple Pre-Qualification Form" width="100" height="100" />
                                    : <img src='images/Travel_in_cabin.png' alt="Fill Out a Simple Pre-Qualification Form" width="100" height="100" />
                                    }
                                </div>
                                <h3 className="h3 BiconBxHeading text-capitilized pb-2">Fill Out a Simple Pre-Qualification Form </h3>
                                <p className='BiconBxPara'>For registering a dog as an emotional support dog, the first step is to fill out a basic pre-qualification form. This form has your basic medical history so that your doctor is well informed when the time comes to complete your evaluation.</p>
                            </div>
                            </Col>
                            <Col xs={12} md={4}> 
                            <div className='HowToRegisterWrap'>
                                <div className='BiconBx'> 
                                    {
                                        isWebpSupported()
                                    ? <img src='images/Mental_Condition.webp' alt="Have a Face to Face Meeting with Your Doctor" width="100" height="100" />
                                    : <img src='images/Mental_Condition.png' alt="Have a Face to Face Meeting with Your Doctor" width="100" height="100" />
                                    }
                                </div>
                                <h3 className="h3 BiconBxHeading text-capitilized pb-2">Have a Face to Face Meeting with Your Doctor </h3>
                                <p className='BiconBxPara'>The second step is to have a face to face conversation with your doctor via our telemedicine platform. The doctor will have a discussion regarding your condition and the best approach to help manage it.</p>
                            </div>
                            </Col>
                            <Col xs={12} md={4}> 
                            <div className='HowToRegisterWrap'>
                                <div className='BiconBx'> 
                                    {
                                        isWebpSupported()
                                    ? <img src='images/Rental_Apartments.webp' alt="Get Your Emotional Support Dog Letter" width="100" height="100" />
                                    : <img src='images/Rental_Apartments.png' alt="Get Your Emotional Support Dog Letter" width="100" height="100" />
                                    }
                                </div>
                                <h3 className="h3 BiconBxHeading text-capitilized pb-2">Get Your Emotional Support Dog Letter </h3>
                                <p className='BiconBxPara'>That’s it, once the doctor is done with your evaluation you will receive your PDF with your <strong>emotional support dog letter</strong>. This is also what acts as your <strong>emotional support dog housing letter</strong>.</p>
                            </div>
                            </Col>
                    
                            
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
