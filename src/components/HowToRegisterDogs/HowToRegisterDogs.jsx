import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { ReactYouTubeLite } from 'react-youtube-lite';
import DOMPurify from 'dompurify';
import './HowToRegisterDogs.css';
export default class HowToRegisterDogs extends Component {
    render() {
         if(this.props.myloading){
        return (
            <> 
                <section className='HowToRegisterDogsWrap'> 
                    <Container className=""> 
                        <Row className='align-items-start'>
                            <Col xs={12}  lg={6} className='order-1 order-lg-1 '> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.HTRDS.htrdheading}</h3> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.HTRDS.htrdleftparagraph)} }  /> 
                                 <div className='HowToFlyVideoWrap'>
                                    <ReactYouTubeLite url={this.props.HTRDS.htrdvideo} />
                                </div>
                            </Col>
                            <Col xs={12}  lg={6} className='order-2 order-lg-2'> 
                              <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.HTRDS.htrdrightparagraph)} }  /> 
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