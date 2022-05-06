import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import 'react-loading-skeleton/dist/skeleton.css'
import './OurProcess.css';
import DOMPurify from 'dompurify'; 
export default class OurProcess extends Component {
    render() {
         if(this.props.myloading){
        return (
        <>
            <section className='OurProcessWrap'> 
                <Container> 
                    <Row  className="text-center">
                        <Col xs={12}> 
                            <h2 className="h2 text-uppercase pb-2 wTopHeading">{this.props.OurProcessData.hiwsectiononeheading} </h2> 
                            <p> {this.props.OurProcessData.hiwsectiononesubheading}</p>
                        </Col>
                    </Row>
                    <Row className='align-items-center'> 
                        <Col xs={12} xl={6} className='OurProcessCol'> 
                            <div className='OurProcessBx'>
                                <div className='OpImgBx'> 
                                    {
                                            isWebpSupported()
                                        ? <img src={this.props.OurProcessData.hiwsectiononeleftimgwebp} alt="how to obtain an esa letter" className='fluid'  width="540" height="488" />
                                        : <img src={this.props.OurProcessData.hiwsectiononeleftimgjpg} alt="how to obtain an esa letter" className='fluid' width="540" height="488" />
                                    }
                                </div> 
                            </div>
                        </Col>
                        <Col xs={12} xl={6} className='OurProcessCol'> 
                            <div className='OurProcessBx'>
                                {this.props.OurProcessData.hiwsectiononerightcontent.map((processdt,index) => (  
                                <div className='OpConBx' key={index}> 
                                    <h2 className="h2 OpconBxHeading text-capitilized pb-2"  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(processdt.hiwsectiononerightcontentheading)} }  /> 
                                    <p className='OpconBxPara' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(processdt.hiwsectiononerightcontentparagarph)} }  /> 
                                </div>
                                ))}  
                            </div>
                        </Col>                            
                    </Row>
                </Container>                        
            </section>
        </>
        )
    }
         return (
            <> s
           
            </>
        )
    }
}
