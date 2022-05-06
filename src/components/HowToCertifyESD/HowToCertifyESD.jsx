import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './HowToCertifyESD.css';
import DOMPurify from 'dompurify'; 
export default class HowToCertifyESD extends Component {
    render() {
         if(this.props.myloading){
        return (
            <>
             
                <section className='HowToCertifyESDWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={12} xl={12} className='order-2 order-lg-1 text-center'> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.Htcesd.htcyesdheading}</h3>  
                            </Col>
                            <Col xs={12}  lg={6} xl={5} className='order-2 order-lg-1 '> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.Htcesd.htcyesdcontent)} }  />  
                            </Col>
                            <Col xs={12} lg={6} xl={7} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.Htcesd.htcyesd_magewebp} alt="how-to-certify-your-emotional-support-dog" width="1050" height="700" />
                                    : <img src={this.props.Htcesd.htcyesdimagejpg} alt="how-to-certify-your-emotional-support-dog" width="1050" height="700" />
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
            <> s
           
            </>
        )
    }
}
