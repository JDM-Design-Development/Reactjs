import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './DiffESDServiceDog.css';
import DOMPurify from 'dompurify'; 
export default class DiffESDServiceDog extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='DiffESDServiceDogWrap'> 
                     <Container className=""> 
                        <Row className='align-items-start'>
                             <Col xs={12} lg={12} className='order-1 order-lg-1'> 
                                <h2 className="h2 text-uppercase pb-2 tc">{this.props.desd.ecsaheading}</h2> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.desd.ecsacontent)} }  /> 
                            </Col>
                            {this.props.desd.ecsabox.map((ecsabx,index) => (  
                            <Col xs={12} lg={6} className={`${index === 0 ? 'order-2 order-lg-1 border-rite' : 'order-1 order-lg-2'}`} key={index}> 
                                <div className={`${index === 0 ? 'BoxLeft' : 'Boxrite text-left'}`}>
                                    <h3 className={`${index === 0 ? 'h2 text-right pb-2' : 'text-left'}`}>{ecsabx.ecsaheading}</h3>
                                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(ecsabx.ecsaparagraph)} }  /> 
                                </div>
                            </Col>
                            ))}
                         
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