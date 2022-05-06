import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './ServingCommunity.css';
export default class ServingCommunity extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='ServingCommunityWrap'>  
                     <Container className=""> 
                        <Row>
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase text-center pb-2">{this.props.ServingCommunitydata.servingheading}</h2> 
                            </Col>
                            <Col xs={12} className='ServingConclusion'> 
                                <div dangerouslySetInnerHTML={{ __html:this.props.ServingCommunitydata.servingcontent }} /> 
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
