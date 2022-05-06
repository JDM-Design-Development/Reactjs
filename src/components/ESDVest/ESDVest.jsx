import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ESDVest.css';
import DOMPurify from 'dompurify';
export default class ESDVest extends Component {
    render() {
          if(this.props.myloading){
        return (
            <>
                <section className='ESDVestWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={6} xl={6} className='order-2 order-lg-1 '> 
                                <h3 className="h2 text-uppercase pb-2"> {this.props.evst.tfhasheading} </h3>  
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.evst.tfhasparagraph)} }  /> 
                            </Col>   
                            <Col xs={12} lg={6} xl={6} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.evst.tfhasimagewebp} alt="emotional-support-dog-vest" width="1050" height="700" />
                                    : <img src={this.props.evst.tfhasimagejpg} alt="emotional-support-dog-vest" width="1050" height="700" />
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
