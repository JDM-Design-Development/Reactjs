import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './WhatEmotionalServiceDog.css';
export default class WhatEmotionalServiceDog extends Component {
    render() {
        return (
            <>
                <section className='WhatEmotionalServiceDogWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">What is an Emotional Service Dog?</h2> 
                            </Col>
                            <Col xs={12}> 
                                <p>An <strong>emotional service dog</strong> is not a thing. There are <strong>emotional support dogs</strong> and then there are <strong>service dogs and therapy dogs</strong>. And there are some stark differences between the two. From the training required to the way the two assist, they have very different functions to fulfill.</p>
                                <p> It is a common sight these days to see differently-abled people on public transport like the train or bus along with a service dog or an emotional support animal. Despite the common perception, these animals are not pets. They have a job to do that is far more than what a regular housepet does. More often than not these animals are an extension of their differently-abled humans.</p> 
                                <p> Some conditions they most commonly assist in are visual-impairment, living with a seizure disorder, post-traumatic disorder, or autism. A service dog or even an <strong>emotional support dog</strong> helps people not just with mobility but also with their emotional needs. They have the ability to provide people with not just stability but also give them the necessary tools for maintaining composure and improving the quality of life for people who require extra care. There is some confusion regarding a service animal and an emotional support animal.</p> 
                                <p>When we talk about service animals it is not just dogs, there are also cats and miniature horses whereas emotional support animals can even be birds. Canines are just a little more popular when it comes to getting the work done. But in reality, it is all about the habitat, availability, and the handler’s preference.</p>
                                <p>The human counterpoint to the service animal or the ESA is referred to as the handler. When you look at accessibility or forming a connection dogs are often the easiest to bond with. This is why you have such a large number around. Dogs are great as emotional support animals as well. </p>
                            </Col>
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
