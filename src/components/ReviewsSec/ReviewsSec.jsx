import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ReviewsSec.css';
export default class ReviewsSec extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
            <section className='ReviewsSecWrap'> 
                <Container className=""> 
                    <Row>
                        <Col xs={12}> 
                            <h2 className="h2 text-uppercase pb-2 wTopHeading">{this.props.RevwData.ocsectionfivereviewsheading}</h2> 
                            <p>{this.props.RevwData.ocsectionfivereviewssubheading}</p>
                        </Col>
                    </Row>
                    <Row> 
                        {this.props.RevwData.ocsectionfivereviewsbox.map((RevwBxData,index) => (  
                        <Col xs={12} lg={4} md={4} key={index} className='ReviewsSecCol'> 
                            <a className='ReviewsSecBx' href={RevwBxData.ocsectionfivereviewslink} target="_blank" rel="noreferrer" >
                                {
                                    isWebpSupported()
                                    ? <img src={RevwBxData.ocsectionfivereviewsimgwebp} alt="Our Mission" className='fluid'  width="130" height="74" />
                                    : <img src={RevwBxData.ocsectionfivereviewsimgjpg} alt="Our Mission" className='fluid' width="130" height="74" />
                                }
                            </a>
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