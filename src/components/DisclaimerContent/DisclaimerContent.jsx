import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import './DisclaimerContent.css';
export default class DisclaimerContent extends Component {
    render() {
        return (
            <>
                <section className='DisclaimerContent'> 
                     <Container> 
                        <Row>
                            <Col xs={12}> 
                                <p>The services mentioned on this website are only available for the citizens of USA. You must hold a valid US citizenship and produce a government issued ID to the doctor prior to your evaluation. It must be noted that all major airlines including Alaska, American, Delta, United, Frontier and Jet Blue require additional documentation known as reasonable accommodation form to be furnished by the certified therapist who is treating you.</p>
                                <p>Although, the Fair Housing Act disregards the landlord to charge extra rent from you, any acts of property damage will entirely be your responsibility.</p>
                                <p>It is advised to discuss your issues with our doctors in detail to enable us serve you better.</p>
                                <p>Please read our terms and conditions for further details.</p>
                            </Col>
                        </Row>
                     </Container>                        
                </section>
            </>
        )
    }
}
