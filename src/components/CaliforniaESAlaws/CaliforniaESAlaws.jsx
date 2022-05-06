import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './CaliforniaESAlaws.css';
export default class CaliforniaESAlaws extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='CaliforniaESAlaws'>  
                    <Container className="">   
                        <Row>
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2">{this.props.CAEsaLawsdata.californiaesalawsheading}</h2> 
                                <p>{this.props.CAEsaLawsdata.californiaesalawsparagraph}</p>  
                            </Col>
                        </Row>
                        {this.props.CAEsaLawsdata.californiaesalawsbox.map((caesa,index) => ( 
                        <Row className='mb-4' key={index}>
                        
                            <Col xs={12} lg={6} className={`CaliforniaESAlawsBx d-flex justify-content-center ${index === 0 ? 'order-md-1 order-lg-1' : 'order-md-1 order-lg-1' && index === 1 ? 'order-md-1 order-lg-2' : 'order-md-1 order-lg-1'} `}> 
                                <div className='imgbx'>
                                    {
                                    isWebpSupported()
                                        ?<img src={caesa.californiaesalawsbximagejpgwebp} alt='' width='575' height={index === 2 ? '516' : '274' } />
                                        :<img src={caesa.californiaesalawsbximagejpg} alt='' width='575' height='274' />
                                    }
                                </div>
                            </Col>
                            <Col xs={12} lg={6} className={`CaliforniaESAlawsBx d-flex justify-content-center ${index === 0 ? 'order-md-1 order-lg-1' : 'order-md-1 order-lg-1' && index === 1 ? 'order-md-2 order-lg-1' : 'order-md-1 order-lg-1'} `}> 
                            <div className='CaliforniaESAlawsBxInner'> 
                                <h2 className="h2 text-uppercase pb-2">{caesa.californiaesalawsbxheading}</h2> 
                                <div dangerouslySetInnerHTML={{ __html:caesa.californiaesalawsbxcontent }} />  
                            </div>
                            </Col>
                        </Row>
))}
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
