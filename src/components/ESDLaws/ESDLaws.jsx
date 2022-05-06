import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './ESDLaws.css';
export default class ESDLaws extends Component {
    render() {
        return (
            <>
                <section className='ESDLawsWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">Emotional Support Dog Laws</h2> 
                            </Col>
                            <Col xs={12}> 
                                <p><strong>Emotional support dog laws</strong> that you are protected by include The Fair Housing Amendments Act. The laws require your landlord to make necessary arrangements in the policy section of their accommodations to help make the necessary changes that you need to live comfortably with your <strong>emotional dog</strong>.</p>
                                <p> Most of the time these changes are reflected in the agreement that you come to, but there are still certain cases in which the ESA laws might not help. These cases are </p>
                                <ul>
                                    <li>✔ If the building is any smaller than 4 units and the landlord also occupies the same building. </li>
                                    <li>✔ If the property does not have any association with a real estate broker and does not fall under single-family housing.</li>
                                </ul>
                                <p>The FHA does not allow any amount of contact between animals and public places like restaurants, hotels, or cafes. So, you can be refused on those grounds. Services animals are exempt from this according to the American Disability Act.</p>
                                <p>As per the FHA, a federal emotional support animal housing law, there are certain restrictions placed on the landlord. Some of them are;</p>
                                <ul>
                                    <li>✔ No request can be placed for your detailed medical records or your medical condition. </li>
                                    <li>✔ Nobody is allowed to question your emotional dog’s training or even about its performance in certain tasks the way you can ask in the case of a service animal. </li>
                                    <li>✔ The landlord cannot demand any kind of additional fees or deposits to accommodate your emotional support animal.</li>
                                    <li>✔ Nobody can refuse you admission if your insurance doesn’t cover a particular breed or a certain weight. </li>
                                </ul>
                                <p> <em><strong>Verification Might Still Be A Requirement By Property Managers</strong></em></p> 
                                <p> The FHA requires a landlord to accept an ESA letter from a certified mental health professional. Additionally, they may even require you to fill out and submit a short verification from a physician or therapist that confirms your emotional disability, </p>
                            </Col>
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
