import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ESADuringTravel.css';
import DOMPurify from 'dompurify'; 
export default class ESADuringTravel extends Component {
    render() {
        return (
            <> 
                <section className='ESADuringTravelWrap'> 
                    <Container className="px-3 px-md-5">
                        <Row className="align-items-center justify-content-center">
                            <Col xs={12} lg={12} xl={12}>
                                <h1 className="h1 text-uppercase pb-2"> {this.props.esadt.esalcsectionfiveheading} </h1>
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.esadt.esalcsectionfiveparagraph)} }  /> 
                            </Col> 

                            <Col xs={12} lg={12} xl={12}>
                            <div className="contentbx">
                                <div className="imgbx">
                                    {
                                        isWebpSupported()
                                        ?<img src={this.props.esadt.esalcsectionfiveimagewebp} alt="laws-for-emotion-support-animal-in-a-rented-accommodation" />
                                        :<img src={this.props.esadt.esalcsectionfiveimagejpg} alt="laws-for-emotion-support-animal-in-a-rented-accommodation" />
                                    }
                                </div>
                                    <h2 className="h2 pb-2"> </h2>
                                   <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.esadt.esalcsectionfivecontent)} }  /> 
          
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>   
                            




            </>
        )
    }
}
