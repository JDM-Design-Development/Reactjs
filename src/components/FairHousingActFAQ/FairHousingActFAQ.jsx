import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import FAQ from '../FAQ/FAQ';
import {Accordion} from 'react-accessible-accordion';
import './FairHousingActFAQ.css';
export default class FairHousingActFAQ extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>   
                <section className='FairHousingActFAQWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} lg={4} xl={4}> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.fhafq.tfhasimagewebp} alt="certificate for emotional support dog" width="550" height="673" />
                                    : <img src={this.props.fhafq.tfhasimagejpg} alt="certificate for emotional support dog" width="550" height="673" />
                                    }
                            </div>
                            </Col>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1 '>
                                <Accordion>
                                {this.props.fhafq.tfhasfaqbx.map((item, index)=>{
                                        return (
                                                <FAQ key={index} myid={index} title={item.faqquestion} desc={item.faqanswer} />
                                            )                                            
                                        })}
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
