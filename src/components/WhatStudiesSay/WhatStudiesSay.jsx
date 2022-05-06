import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './WhatStudiesSay.css';
import DOMPurify from 'dompurify'; 
export default class WhatStudiesSay extends Component {
    render() {
        if(this.props.myloading){ 
        return (
            <>
                <section className='WhatStudiesSay'> 
                     <Container className=""> 
                        <Row>
                            <Col xs={12}> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.WSS.htrdheading}</h3> 
                            </Col>
                        </Row>
                        {this.props.WSS.htrdcontentbx.map((WssBx,index) => ( 
                         <Row className='align-items-center' key={index}>
                            <Col xs={12} md={4} className={`${index === 0 ? 'order-2 order-lg-1' : 'order-2 order-lg-3' }`}> 
                                <div className='WSSwrap'>
                                  <h2 className="h2 text-uppercase">{WssBx.htrdsubheading} </h2>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className= {`${index === 0 ? 'order-2 order-lg-2' : 'order-3 order-lg-2' }`}> 
                                <div className={`WSSwrap ${index ===0 ? '' : 'text-right' }`}>
                                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(WssBx.htrdparagraph)} }  /> 
                                </div>
                            </Col>
                            <Col xs={12} md={4} className={`${index === 0 ? 'order-1 order-lg-3' : 'order-1 order-lg-1' }`}> 
                                <div className='WSSwrap'>
                                    <div className='WSSimgBx'> 
                                        {
                                            isWebpSupported()
                                            ? <img src={WssBx.htrdimagewebp} alt="emotional support dog letter" width="350" height="350" />
                                            : <img src={WssBx.htrdimagejpg} alt="emotional support dog letter" width="350" height="350" />
                                        }
                                        <a href="#"> </a>
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