import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './FairHousingAct504.css';
import DOMPurify from 'dompurify'; 
export default class FairHousingAct504 extends Component {
    render() {
          if(this.props.myloading){
        return (
            <>
                <section className='FairHousingAct504Wrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={12} xl={12} className='order-2 order-lg-1 text-center'> 
                                <h3 className="h2 text-uppercase pb-2"> {this.props.fhat.tfhasheading} </h3>  
                                
                            </Col>
                            <Col xs={12}  lg={6} xl={5} className='order-2 order-lg-1 '> 
                                <h4>{this.props.fhat.tfhassubheading}</h4>
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.fhat.tfhasparagraph)} }  /> 
                            </Col>   
                            <Col xs={12} lg={6} xl={7} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.fhat.tfhasimagewebp} alt="how-to-certify-your-emotional-support-dog" width="1050" height="700" />
                                    : <img src={this.props.fhat.tfhasimagejpg} alt="how-to-certify-your-emotional-support-dog" width="1050" height="700" />
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
