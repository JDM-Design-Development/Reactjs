import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import DOMPurify from 'dompurify';
import './HowToRegisterCats.css';
export default class HowToRegisterCats extends Component {
    render() {
          if(this.props.myloading){
        return (
            <>
                <section className='HowToRegisterCatsWrap'> 
                    <Container className=""> 
                        <Row className='align-items-start'>
                            <Col xs={12}  lg={12} className='order-1 order-lg-1 '> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.htrcs.htrdheading}</h3> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.htrcs.htrdleftparagraph)} }  /> 
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