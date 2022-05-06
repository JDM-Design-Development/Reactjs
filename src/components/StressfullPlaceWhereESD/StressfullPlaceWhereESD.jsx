import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './StressfullPlaceWhereESD.css';
export default class StressfullPlaceWhereESD extends Component {
    render() {
        return (
            <>
                <section className='StressfullPlaceWhereESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} lg={4} xl={4}> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/dogs-are-a-mans-best-friend.webp' alt="dogs-are-a-mans-best-friend" width="445" height="171" />
                                    : <img src='images/dogs-are-a-mans-best-friend.jpg' alt="dogs-are-a-mans-best-friend" width="445" height="171" />
                                    }
                            </div>
                            </Col>
                            <Col xs={12}  lg={8} xl={8}> 
                                <p>The world is a stressful place and often all we need to get through the day is a companion. This is where an emotional support dog comes into play. Dogs are a man’s best friend and that is something that is a prevalent notion and with good reason.</p>
                                <p>Dog’s represent traits like loyalty, devotion, love, dependability, and all-important cuddliness. Who won’t be enamored by such a creature?</p>
                            </Col>
                            
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
