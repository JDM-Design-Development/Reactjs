import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import FAQ from '../FAQ/FAQ';
import {Accordion} from 'react-accessible-accordion';
import './HowToCertifyESDFAQ.css';
export default class HowToCertifyESDFAQ extends Component {
    render() {
          if(this.props.myloading){
        return ( 
            <>
                <section className='HowToCertifyESDFAQWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} lg={4} xl={4}> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.Htcesdf.htcyesd_magewebp} alt="certificate for emotional support dog" width="550" height="673" />
                                    : <img src={this.props.Htcesdf.htcyesdimagejpg} alt="certificate for emotional support dog" width="550" height="673" />
                                    }
                            </div>
                            </Col>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1 '>
                                <Accordion>
                                {this.props.Htcesdf.htcyesdfaqbox.map((item, index)=>{ 
                                        return (
                                              <FAQ key={index} myid={index} title={item.htcyesdfaqquestion} desc={item.htcyesdfaqanswer} />
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
