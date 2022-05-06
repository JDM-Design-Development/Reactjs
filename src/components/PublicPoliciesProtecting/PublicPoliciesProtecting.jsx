import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { ReactYouTubeLite } from 'react-youtube-lite';
import './PublicPoliciesProtecting.css';
import DOMPurify from 'dompurify'; 
export default class PublicPoliciesProtecting extends Component {
    render() {
          if(this.props.myloading){
        return (
            <>
                <section className='PublicPoliciesProtecting'>  
                     <Container> 
                        <Row>
                            <Col xs={12} lg={12} className='text-center'> 
                                <h2 className="h2 text-uppercase pb-2">{this.props.pppng.pppesdheading}</h2> 
                            </Col>
                            <Col xs={12} lg={5} className='VidBx justify-content-center align-items-center'> 
                                <ReactYouTubeLite url={this.props.pppng.pppesdvideolink} />
                            </Col>
                            <Col xs={12} lg={7}> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.pppng.pppesdcontent)} }  /> 
                            </Col>
                            <Col xs={12} lg={12}> 
                               <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.pppng.pppesdbottomcontent)} }  /> 
                            </Col>
                        </Row>
                         <Row> 
                            <Col xs={12} md={12}> 
                                
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