import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ESDHelpYourCondition.css';
export default class ESDHelpYourCondition extends Component {
    render() {
        return (
            <>
                <section className='ESDHelpYourConditionWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} lg={4} xl={4}> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/emotional-support-dog-helps-manage-your-condition.webp' alt="emotional-support-dog-helps-manage-your-condition" width="445" height="340" />
                                    : <img src='images/emotional-support-dog-helps-manage-your-condition.jpg' alt="emotional-support-dog-helps-manage-your-condition" width="445" height="340" />
                                    }
                            </div>
                            </Col>
                            <Col xs={12}  lg={8} xl={8}> 
                                <h2 className="h2 text-uppercase pb-2">How Can An Emotional Support Dog Help To Manage Your Condition?</h2> 
                                <p>An emotional support dog helps manage your condition simply by existing in your life. Dogs make great pets and companions. Research says an emotional support dog can bring back the happiness missing from your life. It can help you live life with zeal and positivity.</p>
                                <p>Dogs have this innate quality in them that makes them such great comfort-givers. That is why they are considered to be the most popular emotional support animals. And this is precisely why you need to get an emotional support dog letter for your pet. So, give your dog the title it deserves.</p>
                            </Col>
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
