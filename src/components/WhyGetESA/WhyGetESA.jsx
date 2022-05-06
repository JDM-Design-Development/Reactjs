import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './WhyGetESA.css';
export default class WhyGetESA extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='WhyGetESAWrap'>  
                     <Container className="">  
                        <Row>
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2 wTopHeading">{this.props.WhyGetESAdata.esdletterheading}</h2> 
                            </Col>
                        </Row>
                        <Row>
                            {this.props.WhyGetESAdata.esdlettersteps.map((stp,index) => (   
                            <Col xs={12} lg={6} xl={3} key={index} className='WhyGetESACol'> 
                            <div className='WhyGetESABx'>
                                <div className='wgconBx'> 
                                    {
                                            isWebpSupported()
                                        ? <img src={stp.esdlettericonwebp} alt="Companionship" className='fluid'  width="165" height="162" />
                                        : <img src={stp.esdlettericonjpg} alt="Companionship" className='fluid' width="165" height="162" />
                                    }
                                </div>
                                <h2 className="h2 wgconBxHeading text-capitilized pb-2">{stp.esdlettersubheading} </h2>
                                <p className='wgconBxPara' dangerouslySetInnerHTML={{ __html:stp.esdletterparagraph }} />  
                            </div>
                            </Col>
                            ))}  
                        </Row>
                        <Row>
                            {
                                    isWebpSupported()
                                ? <img src='images/emotional-support-animal-certification-letter.webp' alt="emotional support animal certification letter" className='btmimg  pt-2 fluid' width="1320" height="343" />
                                : <img src='images/emotional-support-animal-certification-letter.jpg' alt="emotional support animal certification letter" className='btmimg  pt-2 fluid' width="1320" height="343" />
                            }
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
