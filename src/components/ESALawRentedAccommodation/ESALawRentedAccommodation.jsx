import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ESALawRentedAccommodation.css';
import DOMPurify from 'dompurify'; 
export default class ESALawRentedAccommodation extends Component {
    render() {
        return (
            <>
           
            <section className='ESALawRentalAccWrap'>
                    <Container className="px-3 px-md-5">
                        <Row className="align-items-center justify-content-center">
                            <Col xs={12} lg={12} xl={12} className="text-center">
                                <h1 className="h1 text-uppercase pb-2"> {this.props.lwrntacc.esalcsectionthirdheading} </h1>
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.lwrntacc.esalcsectionthirdparagraph)} }  /> 
                            </Col>
                            <Col xs={10} lg={10} xl={10}>
                            <div className="contentbx">
                                <div className="imgbx">
                                    {
                                        isWebpSupported()
                                        ?<img src={this.props.lwrntacc.esalcsectionthirdimagewebp} alt="laws-for-emotion-support-animal-in-a-rented-accommodation" />
                                        :<img src={this.props.lwrntacc.esalcsectionthirdimagejpg} alt="laws-for-emotion-support-animal-in-a-rented-accommodation" />
                                    }
                                </div>
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.lwrntacc.esalcsectionthirdcontent)} }  /> 
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </section>       
                            




            </>
        )
    }
} 
