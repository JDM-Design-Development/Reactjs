import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './BenifitsESAletter.css';
import styles from './BenifitsESAletter.module.css';   
export default class BenifitsESAletter extends Component {
    render() {
        if(this.props.myloading){
        return (
            <> 
                <section className='Benifits'>   
                    <Container className={styles.parastyle}>   
                        <Row>
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2">{this.props.Benifitsdata.benefitsheading}</h2> 
                                <div dangerouslySetInnerHTML={{ __html:this.props.Benifitsdata.benefitsparagraph }} />  
                            </Col>
                        </Row>
                         <Row>  
                           {this.props.Benifitsdata.benefitscol.map((ben,index) => (  
                                <Col key={index} xs={12} md={6} lg={4} className='benifitsiconwrp'>   
                                    <div className='BenifitsWrap'>  
                                        <div className='BiconBx'>  
                                            {
                                                isWebpSupported()
                                            ? <img src={ben.benefitssubiconswebp} alt="Travel In-Cabin" width="100" height="100" />
                                            : <img src={ben.benefitssubiconsjpg} alt="Travel In-Cabin" width="100" height="100" />
                                            }
                                        </div>
                                        <h2 className="h2 BiconBxHeading text-capitilized pb-2">{ben.benefitssubheading} </h2>
                                        <div className='BiconBxPara' dangerouslySetInnerHTML={{ __html:ben.benefitssubparagraph }} />  
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
