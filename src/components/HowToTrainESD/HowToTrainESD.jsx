import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './HowToTrainESD.css';
export default class HowToTrainESD extends Component {
    render() {
        return (
            <>
                <section className='HowToTrainESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">How to train your emotional support Dog?</h2> 
                            </Col>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1'> 
                                <p>You do not have to <b>train your emotional support dog</b>. An <b>emotional support dog</b> by its every definiton does not require any formal training. The only thing owners should thake care of is that their<b> ESA support dog</b> is well trained in public settings. </p>
                                <p>By law you might not need to search for <b>"emotional dog trainers near me"</b> but an ESA letter will not grant you automatic access to establishments like restaurants or malls.</p>
                            </Col>
                            <Col xs={12} lg={4} xl={4} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/train-your-emotional-support-dog.webp' alt="train-your-emotional-support-dog" width="445" height="171" />
                                    : <img src='images/train-your-emotional-support-dog.jpg' alt="train-your-emotional-support-dog" width="445" height="171" />
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
