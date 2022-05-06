import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import DOMPurify from 'dompurify';
import './FairHousingAct.css';
export default class FairHousingAct extends Component {
    render() {
       if(this.props.myloading){
        return (
            <>
            <section className='FairHousingActWrap'>  
                <Container className=""> 
                    <Row className='align-items-end'>
                        <Col xs={12} lg={12}>  
                            <h2 className="h2 text-uppercase pb-2">{this.props.FairHsgAct.elsection1subheading}</h2> 
                        </Col>
                    </Row>
                    <Row className='align-items-center'>
                        <Col xs={12} lg={6}> 
                            <div className='imgbx'> 
                                {
                                    isWebpSupported()
                                    ? <img src={this.props.FairHsgAct.elsection1imgwebp} alt="The Fair Housing Amendments Act" width="603" height="615" />
                                    : <img src={this.props.FairHsgAct.elsection1imgjpg} alt="The Fair Housing Amendments Act" width="603" height="615" />
                                }
                            </div> 
                        </Col>
                        <Col xs={12} lg={6}> 
                            <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.FairHsgAct.elsection1content)} }  />  
                        </Col>
                        <Col xs={12} lg={12}> 
                            <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.FairHsgAct.elsection1contentbottom)} }  />  
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