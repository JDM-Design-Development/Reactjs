import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import {Accordion} from 'react-accessible-accordion';
import './HowToFlyWithDogFAQ.css';
import {AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; 
import DOMPurify from 'dompurify'; 
export default class HowToFlyWithDogFAQ extends Component {
    render() {
         if(this.props.myloading){
        return (
            <>
                <section className='HowToFlyWithDogFAQWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} lg={4} xl={4}> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.htfwdfq.htfwdimgwebp} alt="how to fly with a large dog" width="375" height="561" />
                                    : <img src={this.props.htfwdfq.htfwdimgjpg} alt="how to fly with a large dog" width="375" height="561" />
                                    }
                            </div>
                               
                            </Col>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1 '>
                                <Accordion>
                                {this.props.htfwdfq.htfwdfaqbx.map((htfwdfaqbxx,index) => (      
                                    <AccordionItem key={index}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                {htfwdfaqbxx.faqquestions}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(htfwdfaqbxx.faqanswers)} }  /> 
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}    
                                </Accordion>
   
   
                            </Col>
                            
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }   
         return (
            <> 

            </>
        )
    }
}