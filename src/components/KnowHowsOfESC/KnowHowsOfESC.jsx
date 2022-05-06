import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './KnowHowsOfESC.css';
import DOMPurify from 'dompurify';
export default class KnowHowsOfESC extends Component {
    render() {
         if(this.props.myloading){ 
        return (
            <>
                <section className='KnowHowsOfESCWrap'>  
                     <Container fluid className=""> 
                        <Row className='justify-content-md-center'>
                             <Col xs={12} lg={12} xl={12} className='text-center'><h2 className="h2 text-uppercase pb-2">{this.props.khoe.htrdheading}</h2>  </Col>
                            <Col xs={12} lg={4} xl={4}> 
                                    {
                                            isWebpSupported()
                                        ? <img src={this.props.khoe.htrdimagewebp} alt="Get My Emotional support cat Letter" width="633" height="1160" />
                                        : <img src={this.props.khoe.htrdimagejpg} alt="Get My Emotional support cat Letter" width="633" height="1160" />
                                    }
                              
                            </Col>
                            <Col xs={12} lg={8} xl={7} className="content">
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.khoe.htrdparagraph)} }  />  
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