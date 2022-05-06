import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import './PrivacyPolicyContent.css';
export default class PrivacyPolicyContent extends Component {
    render() {
        return (
            <>
                <section className='PrivacyPolicyContent'> 
                     <Container> 
                        <Row>
                            <Col xs={12}> 
                                <p>This “Privacy Policy” describes the information gathering and dissemination practices of <strong>https://myesadoctor.com</strong>. It’s necessary for My ESA Doctor to abide by the terms mentioned in the Privacy Policy. However, we reserve the right to modify/change our privacy practices.</p>
                                <p><strong>How we use and protect customer information?</strong> <br />We ensure protecting the security, integrity of customer information throughout our ESA registration processes and procedures. We limit our employees to access to the customer information for business purposes only.</p>
                                <p>We collect and maintain customer information (including name, email ID, telephone number, mailing address, etc.) to provide them with better service and enhancing business relationships.</p>
                                <p>We use the customer information to analyze whether to connect you with one of our mental health practitioner who will write your recommendation for your ESA.</p>
                                <p>We only disclose the customer information to the credit card companies to use them and don’t share it to the third party.</p>
                                <p>We at My ESA Doctor analyzes our website information to provide visitors with value and better experience. We access page views, unique &amp; repeat visitors, peak-volume traffic periods, bounce rate, etc. We don’t record, collect, or request the internet users’ personal information.</p>
                                <p>We maintain the lists of email addresses of our customers for sending newsletters. However, individuals can request to join the mailing lists. We don’t share customers’ email IDs outside My ESA Doctor. Only My ESA Doctor staff and other authorized agents are allowed to access personally identifiable information provided by internet visitors.</p>
                                <p>For transferring and receiving financial information from our site, we use secure, industry-standard encryption technologies, ensuring complete protection against misuse or loss of customer information.</p>
                                <p>If you have any questions or concerns regarding our Privacy Policy, feel free to contact us at <strong>myesadoctor@gmail.com.</strong></p>
                            </Col>
                        </Row>
                     </Container>                        
                </section>
            </>
        )
    }
}
