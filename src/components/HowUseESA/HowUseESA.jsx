import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './HowUseESA.css';
import DOMPurify from 'dompurify'; 
export default class HowUseESA extends Component {
    render() {
            if(this.props.myloading){
             let bgImgStyle = {
                backgroundImage: 'url(' + this.props.howuseesaData.hiwsectionfourimgjpg + ')',
            };
        return (
            <>
                <section className='HowUseESAWrap' style={ bgImgStyle }> 
                     <Container> 
                        <Row className='align-items-center'>
                            <Col xs={12} lg={6}> </Col>
                            <Col xs={12} lg={6}> 
                               <div className='HowUseESABox'>
                                        <h2 className="h2 pb-2"> {this.props.howuseesaData.hiwsectionfourheading} </h2> 
                                        <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.howuseesaData.hiwsectionfourcontent)} }  /> 
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