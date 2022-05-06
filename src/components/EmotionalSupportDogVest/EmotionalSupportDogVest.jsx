import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './EmotionalSupportDogVest.css';
export default class EmotionalSupportDogVest extends Component {
    render() {
        return (
            <>
                <section className='EmotionalSupportDogVestWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">Emotional Support Dog Vest</h2> 
                            </Col>
                            <Col xs={12}> 
                                <p>For someone who has anxiety or depression, emotional support animals are like a lifeline and so is an emotional support dog vest. They are not trained to complete any tasks but they provide their handler with emotional comfort, support, and accompaniment.</p>
                                <p>An emotional support dog is there to provide you with unconditional support throughout your life. The aim is to get through day to day activities without any hindrance. The problem can manifest itself from any mental or emotional disability and that is where we come in. We provide you with a tool to make your life with your ESA easier.</p> 
                                <p>Since your dog will accompany you to public places, it is important that people should be able to identify them.</p> 
                                <p>There is no compulsion placed on you regarding the use of an ESA dog vest. But to make it easier for you to navigate the world. A vest is a big distinguishing marker when you step out and will also discourage people from coming and trouble your pet.</p>
                            </Col>
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
