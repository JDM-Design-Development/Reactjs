import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import './RefundPolicyContent.css';
export default class RefundPolicyContent extends Component {
    render() {
        return (
            <>
                <section className='RefundPolicyContent'> 
                     <Container> 
                        <Row>
                            <Col xs={12}> 
                                <p><strong>We offer 100% money back guarantee</strong><br />If you are not satisfied, we are not satisfied. It’s that simple!</p>
                                <p>Even though we are confident that you’ll never have a bad experience with us, there are times when things don’t work out fine. And this is why we happily offer 100% money back guarantee</p>
                                
                                <p><strong>When do you qualify for a money back guarantee? </strong> <br />
                                    <ul>
                                        <li>If, for any reason, you are not approved for an emotional support animal letter.</li>
                                        <li>If we fail to mail your emotional support animal letter within the stipulated time.</li>
                                    </ul>
                                </p>

                                <p><strong>How to apply for a refund?</strong> <br />We work in compliance with California consumer protection laws. We ensure that you’ll be 100% satisfied with our service or we’ll credit the full amount right away. If you have any issue, you can simply drop us an email at <strong>myesadoctor@gmail.com</strong> or give us a call at 1-866-360-5652. We’ll either fix the problem or immediately refund your money in your account.</p>
                                <p>MyESADoctor was established to help patients get their ESA letters hassle-free. You are more than a number to us.</p>
                                <p>However, please note that we don’t provide refunds to customers who change their minds after successfully receiving the emotional support animal letter.</p>
                            </Col>
                        </Row>
                     </Container>                        
                </section>
            </>
        )
    }
}
