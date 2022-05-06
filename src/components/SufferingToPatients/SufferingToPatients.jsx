import React, { Component } from 'react'; 
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import DOMPurify from 'dompurify';
import './SufferingToPatients.css';
export default class SufferingToPatients extends Component {
    render() {
        if(this.props.myloading){ 
        return ( 
            <>  
            
            <section className='SufferingToPatientsWrap'> 
                <Container className=""> 
                    <Row className='align-items-center'> 
                        <Col xs={12}  lg={6} className='order-2 order-lg-1 '> 
                            <h3 className="h2 text-uppercase pb-2"  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.suffertoPat.ocsectiononeheading)} }  />  
                            <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.suffertoPat.ocsectiononecontent)} }  /> 
                        </Col>
                        <Col xs={12}  lg={6} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                {
                                    isWebpSupported()
                                    ? <img src={this.props.suffertoPat.ocsectiononeimgwebp} alt="Esa letter Clinic" width="520" height="347" />
                                    : <img src={this.props.suffertoPat.ocsectiononeimgjpg} alt="Esa letter Clinic" width="520" height="347" />
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