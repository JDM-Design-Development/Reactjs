import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './GuidelinesForFlyingESD.css';
import DOMPurify from 'dompurify'; 
export default class GuidelinesForFlyingESD extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='GuidelinesForFlyingESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={12} xl={12} className='order-2 order-lg-1 text-center'> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.glffesd.htfwdheading}</h3>  
                            </Col>
                        </Row>
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} lg={6} xl={6}> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.glffesd.htfwdimgwebp} alt="Flying with your Emotial Support Dog" width="481" height="320" />
                                    : <img src={this.props.glffesd.htfwdimgjpg} alt="Flying with your Emotial Support Dog" width="481" height="320" />
                                    }
                            </div>
                               
                            </Col>
                            <Col xs={12}  lg={6} xl={6} className='order-2 order-lg-1 '> 
                              <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.glffesd.htfwdcontent)} }  /> 
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