import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './RightsOfESD.css';
import DOMPurify from 'dompurify'; 
export default class RightsOfESD extends Component {
    render() {
         if(this.props.myloading){
        return (
            <> 
           
                <section className='RightsOfESDWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={12} xl={12} className='text-center'> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.Roesd.htcyesdheading}</h3>  
                            </Col>
                            <Col xs={12} lg={6} xl={6}> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.Roesd.htcyesd_magewebp} alt="rights-of-emotional-support-dogs-vs-service-dogs" width="1050" height="700" />
                                    : <img src={this.props.Roesd.htcyesdimagejpg} alt="rights-of-emotional-support-dogs-vs-service-dogs" width="1050" height="700" />
                                    }
                            </div>
                               
                            </Col>
                            <Col xs={12}  lg={6} xl={6}> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.Roesd.htcyesdcontent)} }  />  
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
