import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ServiceDogVSESD.css';
export default class ServiceDogVSESD extends Component {
    render() {
        return (
            <>
                <section className='ServiceDogVSESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1'> 
                                <h2 className="h2 text-uppercase pb-2">Service Dog vs Emotional Support Dog</h2> 
                                <p>When the question is regarding <strong>Service Dog vs Emotional Support Dog</strong>, the first difference to look at is the official definition. As per the ADA, a service dog is any dog that has been individually trained to perform certain tasks for the benefit of an individual with a disability.</p> 
                                <p> <strong>Emotional support dogs</strong> on the other hand are often used as a part of a treatment plan to help people suffering from a mental or emotional disability but they are not considered</p> 
                                <p> A service dog is trained so that they are able to perform certain tasks or assist people with some kind of disability. They help provide certain visual functions for the blind, auditory functions for the deaf, and certain muscular tasks for people who are physically disabled.</p>
                                <p> <strong>Emotional support dogs</strong> are different as they are companion dogs who provide support to people who suffer from an emotional or mental disability. These are untrained animals who provide you with support, they do not perform any tasks on your behalf.</p> 
                                <p> Service animals also act as medical alert dogs for people who tend to suffer from a sudden attack.</p>
                                <p> Emotional support dogs don’t need any kind of additional training. Their presence is more than enough to get you through the day.</p> 
                                <p> They do provide emotional support as well to their owners but as far as definition goes they need to perform certain tasks to help their handlers. </p>
                            </Col>
                            <Col xs={12} lg={4} xl={4} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/em-vs-es.webp' alt="em-vs-es" width="475" height="700" />
                                    : <img src='images/em-vs-es.jpg' alt="em-vs-es" width="475" height="700" />
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
