import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ESAAtWorkplace.css';
import DOMPurify from 'dompurify'; 
export default class ESAAtWorkplace extends Component {
    render() {
        return (
            <>
                <section className='ESAAtWorkplaceWrap'>
                    <Container className="px-3 px-md-5">
                        <Row className="align-items-center justify-content-center">
                            <Col xs={12} lg={12} xl={12}>
                                <h1 className="h1 text-uppercase pb-2"> {this.props.esaawp.esalcsectionforthheading}</h1>
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.esaawp.esalcsectionforthparagraph)} }  /> 
                            </Col> 

                            <Col xs={12} lg={12} xl={12}>
                            <div className="contentbx">
                                <div className="imgbx">
                                    {
                                        isWebpSupported()
                                        ?<img src= {this.props.esaawp.esalcsectionforthimagewebp} alt="laws-for-emotion-support-animal-in-a-rented-accommodation" />
                                        :<img src= {this.props.esaawp.esalcsectionforthimagejpg} alt="laws-for-emotion-support-animal-in-a-rented-accommodation" />
                                    }
                                </div>
                                    <h2 className="h2 pb-2"> </h2>
                                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.esaawp.esalcsectionforthcontent)} }  /> 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>   
                            




            </>
        )
    }
}
