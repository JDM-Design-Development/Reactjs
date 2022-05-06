import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './KnowHowsOfESD.css';
import DOMPurify from 'dompurify';
export default class KnowHowsOfESD extends Component {
    render() {
        if(this.props.myloading){ 
        return (
            <>  
                <section className='KnowHowsOfESDWrap'>  
                     <Container fluid className=""> 
                        <Row className='align-items-center'>
                            <Col xs={12} lg={4} xl={4}> 
                                <div className='imgbx'>
                                    { 
                                            isWebpSupported()
                                        ? <img src={this.props.KHOE.htrdimagewebp} alt="how to make my dog an emotional support dog" width="633" height="1127" />
                                        : <img src={this.props.KHOE.htrdimagejpg} alt="how to make my dog an emotional support dog" width="633" height="1127" />
                                    }
                                </div>
                              
                            </Col>
                            <Col xs={12} lg={8} xl={6}> 
                                <h2 className="h2 text-uppercase pb-2">{this.props.KHOE.htrdheading}</h2> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.KHOE.htrdparagraph)} }  /> 
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