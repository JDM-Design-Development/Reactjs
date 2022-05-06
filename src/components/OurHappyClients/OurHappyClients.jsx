import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './OurHappyClients.css';
export default class OurHappyClients extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='OurHappyClients'> 
                     <Container className=""> 
                        <Row>
                            <Col xs={12}>
                                <h3 className="h2 text-uppercase pb-2">{this.props.OurHappyClientsdata.happyclientsheading}</h3> 
                                <p>{this.props.OurHappyClientsdata.happyclientsparagraph}</p>
                            </Col>
                        </Row>
                         <Row> 
                            {this.props.OurHappyClientsdata.happyclientswrapper.map((clts,index) => ( 
                            <Col xs={12} md={4} key={index} className={`${index === 2 ? 'border-none' : 'border-right'} `}>
                                
                                <div className='OHCwrap'>
                                    <div className='OHCimgBx'> 
                                        {
                                            isWebpSupported()
                                            ? <img src={clts.happyclientswrapperwebp} alt={clts.happyclientname}  width="236" height="236" />
                                            : <img src={clts.happyclientswrapperjpg} alt={clts.happyclientname}  width="236" height="236" />
                                        }
                                    </div>
                                    <h3 className="h2 text-capitilized">{clts.happyclientname}  </h3>
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