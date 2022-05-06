import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import FAQ from '../FAQ/FAQ';
import {Accordion} from 'react-accessible-accordion';
import './ESDVestFAQ.css';
export default class ESDVestFAQ extends Component {
    render() {
        return (
            <>
                <section className='ESDVestFAQWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} lg={4} xl={4}> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.esvstfaq.tfhasimagewebp} alt="ESA vest for small dog" width="550" height="673" />
                                    : <img src={this.props.esvstfaq.tfhasimagejpg} alt="ESA vest for small dog" width="550" height="673" />
                                    }
                            </div>
                            </Col>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1 '>
                                <Accordion>
                                {this.props.esvstfaq.tfhasfaqbx.map((item, index)=>{
                        return <FAQ key={index} myid={index} title={item.faqquestion}  desc={item.faqanswer} />
                            })}
                                </Accordion>
                            </Col> 
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
