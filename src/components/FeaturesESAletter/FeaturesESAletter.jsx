import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './FeaturesESAletter.css';
export default class FeaturesESAletter extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='FeaturesWrap'>     
                     <Container className="FeaturesContainer"> 
                        <Row>
                            <Col xs={12}> 
                                <h3 className="h2 text-uppercase pb-2 fTopHeading">{this.props.Featuresdata.featuresheading}</h3> 
                            </Col>
                        </Row>
                         <Row> 
                             {this.props.Featuresdata.featureslisting.map((lst,index) => (   
                            <Col xs={12} lg={6} xl={4} key={index}> 
                                <div className='FeaturesGrid'>
                                    <div className='Detai_ls Box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                                            <line className="top" x1="0" y1="0" x2="900" y2="0"/>
                                            <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
                                            <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                                            <line className="right" x1="-100" y1="0" x2="0" y2="1380"/>
                                        </svg>
                                        <img src={lst.featureslistingiconsvg} className="fluid svg" alt="emotional support animal airline letter" width="80" height="77"  />
                                        <h2 className="h3 mt-2">{lst.featureslistingsubheading}</h2>
                                        <p dangerouslySetInnerHTML={{ __html:lst.featureslistingparagarph}} />  
                                    </div>
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
