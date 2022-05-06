import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import DOMPurify from 'dompurify';
import './AirCarriersAct.css';
export default class AirCarriersAct extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='AirCarriersActWrap'>  
                     <Container className=""> 
                     <Row className='align-items-end'>
                         <Col xs={12} lg={12}>  
                            <h2 className="h2 text-uppercase pb-2">{this.props.AirCrsAct.elsection2heading}</h2> 
                         </Col>
                     </Row>
                        <Row className='align-items-center'>
                           
                            <Col xs={12} lg={6} className='order-2 order-lg-1'> 
                                 <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.AirCrsAct.elsection2content)} }  />  
                            </Col>
                             <Col xs={12} lg={6} className='order-1 order-lg-2'> 
                                <div className='imgbx'>
                                    {
                                            isWebpSupported()
                                        ? <img src={this.props.AirCrsAct.elsection2imgwebp} alt="The Air Carriers Access Act (ACAA)" width="511" height="879" />
                                        : <img src={this.props.AirCrsAct.elsection2imgjpg} alt="The Air Carriers Access Act (ACAA)" width="511" height="879" />
                                    }
                                </div>
                              
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