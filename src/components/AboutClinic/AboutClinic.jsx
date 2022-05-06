import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import DOMPurify from 'dompurify';
import './AboutClinic.css';
export default class AboutClinic extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
            <section className='AboutClinicWrap'> 
                <Container className="">  
                    <Row className='align-items-center'>
                        <Col xs={12}  lg={6} className='order-1 order-lg-2'> 
                            <div className='imgbx'> 
                                {
                                isWebpSupported()
                                ? <img src={this.props.AbtClnData.ocsectionsecondimg1webp} alt="ESA Clinic" width="636" height="324" />
                                : <img src={this.props.AbtClnData.ocsectionsecondimg1jpg} alt="ESA Clinic" width="636" height="324" />
                                }
                            </div>  
                        </Col>
                        <Col xs={12}  lg={6} className='order-2 order-lg-1'> 
                            <h3 className="h2 text-uppercase pb-2" dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.AbtClnData.ocsectionsecondheading)} }  />  
                            <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.AbtClnData.ocsectionsecondcontent)} }  /> 
                        </Col>
                    </Row>
                    <Row className='align-items-center mt-5'>
                        <Col xs={12}  lg={6}> 
                            <div className='imgbx'>
                                {
                                isWebpSupported()
                                ? <img src={this.props.AbtClnData.ocsectionsecondimg2webp} alt="Online ESA Clinic" width="636" height="324" />
                                : <img src={this.props.AbtClnData.ocsectionsecondimg2jpg} alt="Online ESA Clinic" width="636" height="324" />
                                }
                            </div>
                        </Col>
                        <Col xs={12}  lg={6}> 
                            <div className='imgbx'>
                                {
                                isWebpSupported()
                                ? <img src={this.props.AbtClnData.ocsectionsecondimg3webp} alt="Online ESA Letter Clinic" width="636" height="324" />
                                : <img src={this.props.AbtClnData.ocsectionsecondimg3jpg} alt="Online ESA Letter Clinic" width="636" height="324" />
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