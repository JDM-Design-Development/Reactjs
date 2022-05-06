import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ESAPublicPlace.css';
import DOMPurify from 'dompurify';
export default class ESAPublicPlace extends Component {
    render() {
        return (
            <> 
                <section className='ESAPublicPlaceWrap'> 
                    <Container className="px-3 px-md-5">
                        <Row className="align-items-center justify-content-center">
                            <Col xs={12} lg={12} xl={12}>
                                <h1 className="h1 text-uppercase pb-2"> {this.props.esapp.esalcsectionsixheading} </h1>
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.esapp.esalcsectionsixcontent)} }  /> 
                            </Col> 

                            <Col xs={12} lg={12} xl={12}>
                            <div className="contentbx">
                                <div className="imgbx">
                                    {
                                        isWebpSupported()
                                        ?<img src={this.props.esapp.esalcsectionsiximagewebp} alt="california-laws-for-emotional-support-animals-in-public-places" />
                                        :<img src={this.props.esapp.esalcsectionsiximagejpg} alt="california-laws-for-emotional-support-animals-in-public-places" />
                                    }
                                </div>
                                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.esapp.esalcsectionsixparagraph)} }  /> 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>    
                            




            </>
        )
    }
}
