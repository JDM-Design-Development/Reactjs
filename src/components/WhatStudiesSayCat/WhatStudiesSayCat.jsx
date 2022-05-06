import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './WhatStudiesSayCat.css';
import DOMPurify from 'dompurify';
export default class WhatStudiesSayCat extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='WhatStudiesSayCat'> 
                     <Container className=""> 
                        <Row>
                            <Col xs={12}> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.wssc.htrdheading}</h3> 
                            </Col>
                        </Row>

                        {this.props.wssc.htrdcontentbx.map((htrdcnt,index) => (  
                         <Row className='align-items-center' key={index}>
                            <Col xs={12} md={4} className={`${index === 0 ? 'order-2 order-lg-1' : 'order-2 order-lg-3'}`}> 
                                <div className='WSSwrap'>
                                  <h2 className="h2 text-uppercase">{htrdcnt.htrdsubheading}</h2>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className={`${index === 0 ? 'order-2 order-lg-2' : 'order-3 order-lg-2'}`}> 
                                 <div className={`WSSwrap ${index === 0 ? '' : 'text-right' }`}>
                                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(htrdcnt.htrdparagraph)} }  />  
                                </div>
                            </Col>
                            <Col xs={12} md={4} className={`${index === 0 ? 'order-1 order-lg-3' : 'order-1 order-lg-1'}`}> 
                                <div className='WSSwrap'>
                                    <div className='WSSimgBx'> 
                                        {
                                            isWebpSupported()
                                            ? <img src={htrdcnt.htrdimagewebp} alt="how to get an emotional support cat" width="350" height="350" />
                                            : <img src={htrdcnt.htrdimagejpg} alt="how to get an emotional support cat" width="350" height="350" />
                                        }
                                       
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        ))}
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