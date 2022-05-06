import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import DOMPurify from 'dompurify'; 
import './OurMission.css';
export default class OurMission extends Component {
    render() {
        if(this.props.myloading){
        return (
            <> 
                <section className='OurMissionWrap'> 
                    <Container className=""> 
                        <Row>
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2 wTopHeading"  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.MsnData.ocsectionfourheading)} }  />  
                                <p dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.MsnData.ocsectionfoursubheading)} }  /> 
                            </Col>
                        </Row>
                        <Row> 
                            {this.props.MsnData.ocsectionfourbox.map((MsnBxData,index) => (  
                            <Col xs={12} lg={6} md={6} key={index} className='OurMissionCol'> 
                                <div className='OurMissionBx'> 
                                    <div className='OMconBx'>  
                                        {
                                            isWebpSupported()
                                            ? <img src={MsnBxData.ocsectionfourheadingboximgwebp} alt="Our Mission" className='fluid'  width="80" height="80" />
                                            : <img src={MsnBxData.ocsectionfourheadingboximgjpg} alt="Our Mission" className='fluid' width="80" height="80" />
                                        }
                                    </div>
                                    <h2 className="h2 OMconBxHeading text-capitilized pb-2">{MsnBxData.ocsectionfourheadingboxheading}</h2>
                                    <p className='OMconBxPara' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(MsnBxData.ocsectionfourheadingboxcontent)} }  /> 
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
