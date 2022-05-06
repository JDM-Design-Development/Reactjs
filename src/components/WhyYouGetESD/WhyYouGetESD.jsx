import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './WhyYouGetESD.css';
export default class WhyYouGetESD extends Component {
    render() {
        return (
            <>
                <section className='WhyYouGetESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">What should you get an emotional support dog?</h2> 
                            </Col>
                            <Col xs={12}> 
                                <p>There are plenty of reasons why one should get an <b>emotional support dog.</b> As per research dogs are much more than just a trusting buddy. dogs have proven to help people fight mental health disorders like anxiety and depression without intervention from any kind of prescription medication.</p>
                                <p>Love, cae, companionship, compassion, and loyalty are just some of the great traits that a dog possesses. The best part is that humans are at the receiving end of all these traits. They are truly the best companions to help you with your medical condition. Unlike <b>service dogs and therapy dogs, emotional support dogs</b> are not trained for any specific purpose. Just their existence in human life has been linked to everything from a better immune system to a longer life. It is primarily because of all the natural characteristics that they possess that they are great <b>Emotional support animals.</b></p>
                                <p>You don't have to even get a support dog to be your ESA. If you already have a dog they can automatically become your ESA.</p> 
                            </Col>
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
