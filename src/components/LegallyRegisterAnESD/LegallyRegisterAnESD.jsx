import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './LegallyRegisterAnESD.css';
export default class LegallyRegisterAnESD extends Component {
    render() {
        return (
            <>
                <section className='LegallyRegisterAnESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1'> 
                                <p>To legally register your <strong>emotional support dog</strong> you need to ensure that the ESA letter in question is written on a mental health professional’s letterhead. You need to ensure that your ESA Letter must contain the following details to inform your landlord of your disability.</p>
                                <ul>
                                <li>✔ That you are a current patient receiving ongoing care under the signing mental health professional. </li>
                                <li>✔ A disability that is described in the Diagnostic and Statistical Manual (DSM) of Mental Disorders Version V.</li>
                                <li>✔ Your disability substantially limits your ability in participating or carrying you at least one of life’s major activities</li>
                                <li>✔ Your emotional support dog forms an essential part of your treatment plan</li>
                                </ul>
                            </Col>
                            <Col xs={12} lg={4} xl={4} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/register-your-emotional-support-dog.webp' alt="register-your-emotional-support-dog" width="445" height="340" />
                                    : <img src='images/register-your-emotional-support-dog.jpg' alt="register-your-emotional-support-dog" width="445" height="340" />
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
