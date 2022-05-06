import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import 'react-tabs/style/react-tabs.css';
import './ReviewsVariousPlatforms.css';
export default class ReviewsVariousPlatforms extends Component {
    render() {
        return (
            <>
                <section className='ReviewsVariousPlatforms'> 
                     <Container> 
                        <Row>
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2">Reviews On Various Platforms </h2> 
                                <p>A quick, secure ESA registration process.</p>
                            </Col>
                        </Row>
                         <Row> 
                            <Col xs={12} md={12}> 
                                <div className='ReviewsVariousPlatformsWrap'>
                                    <Tabs>
                                        <TabList>
                                        <Tab>
                                            {
                                                isWebpSupported()
                                                ? <img src='images/BBB.webp' alt="BBB" width="200" height="200" />
                                                : <img src='images/BBB.jpg' alt="BBB" width="200" height="200" />
                                            }
                                        </Tab>
                                        <Tab>
                                            {
                                                isWebpSupported()
                                                ? <img src='images/hipaa.webp' alt="hipaa" width="200" height="200" />
                                                : <img src='images/hipaa.jpg' alt="hipaa" width="200" height="200" />
                                            }
                                        </Tab>
                                        <Tab>
                                            {
                                                isWebpSupported()
                                                ? <img src='images/shoppers.webp' alt="shoppers" width="200" height="200" />
                                                : <img src='images/shoppers.jpg' alt="shoppers" width="200" height="200" />
                                            }
                                        </Tab>
                                        <Tab>
                                            {
                                                isWebpSupported()
                                                ? <img src='images/yelp-2.webp' alt="yelp" width="200" height="200" />
                                                : <img src='images/yelp-2.jpg' alt="yelp" width="200" height="200" />
                                            }
                                        </Tab>
                                        </TabList>

                                        <TabPanel className='BBB'>
                                            <Row>
                                                <Col md={6}> 
                                                    <div className='imgbx'>
                                                            {
                                                                isWebpSupported()
                                                            ? <img src='images/BetterBusinessBureau.webp' alt="BBB" width="1050" height="700" />
                                                            : <img src='images/BetterBusinessBureau.jpg' alt="BBB" width="1050" height="700" />
                                                            }
                                                    </div>
                                                </Col>
                                                <Col md={6}> 
                                                <div className="details">
                                                    <h3 className='h3'><b>A+ </b>Better Business Bureau Rating</h3>
                                                    <p>We are a BBB accredited business, and always ensure that clients get exceptional, fast ESA registration services.</p>
                                                    <p><a className="btn" href="https://www.bbb.org/us/ca/santa-ana/profile/health/xinming-fu-md-inc-1126-172016929" target="_blank" rel="noreferrer">View Now</a></p>
                                                </div>
                                                    
                                                </Col>
                                            </Row>          
                                        </TabPanel>
                                         <TabPanel className='hipaa'>
                                             <Row>
                                                <Col md={6}> 
                                                    <div className='imgbx'>
                                                            {
                                                                isWebpSupported()
                                                            ? <img src='images/Hipp.webp' alt="hipaa" width="1050" height="700" />
                                                            : <img src='images/Hipp.jpg' alt="hipaa" width="1050" height="700" />
                                                            }
                                                    </div>
                                                </Col>
                                                <Col md={6}> 
                                                <div className="details">
                                                    <h3 className='h3'><b>HIPAA</b>-compliant platform</h3>
                                                    <p>Our online consultation platform meets the standards of the Health Insurance Portability and Accountability Act of 1996.</p>
                                                </div>
                                                    
                                                </Col>
                                            </Row>         
                                        </TabPanel>
                                         <TabPanel className='shoppers'>
                                             <Row>
                                                <Col md={6}> 
                                                    <div className='imgbx'>
                                                            {
                                                                isWebpSupported()
                                                            ? <img src='images/shoppers01.webp' alt="shoppers" width="1050" height="700" />
                                                            : <img src='images/shoppers01.jpg' alt="shoppers" width="1050" height="700" />
                                                            }
                                                    </div>
                                                </Col>
                                                <Col md={6}> 
                                                <div className="details">
                                                    <h3 className='h3'><b>Shopper</b> Approved customer reviews</h3>
                                                    <p>My ESA Doctor has a Shopper Approved 4.8/5 overall satisfaction rating based on 991 ratings and reviews.</p>
                                                    <p><a className="btn" href="https://www.shopperapproved.com/reviews/myesadoctor.com/" target="_blank" rel="noreferrer">View Now</a></p>
                                                </div>
                                                    
                                                </Col>
                                            </Row>      
                                        </TabPanel>
                                        <TabPanel className='yelp'>
                                            <Row>
                                                <Col md={6}> 
                                                    <div className='imgbx'>
                                                            {
                                                                isWebpSupported()
                                                            ? <img src='images/yelp01.webp' alt="yelp" width="1050" height="700" />
                                                            : <img src='images/yelp01.jpg' alt="yelp" width="1050" height="700" />
                                                            }
                                                    </div>
                                                </Col>
                                                <Col md={6}> 
                                                <div className="details">
                                                    <h3 className='h3'><b>Yelp</b> – a local-search service powered by crowd-sourced review</h3>
                                                    <p>My ESA Doctor has positive reviews on Yelp and has a 4.5/5 rating.</p>
                                                    <p><a className="btn" href="https://www.yelp.com/biz/steady-care-medical-clinic-santa-ana?osq=steadycare+medical" target="_blank" rel="noreferrer">View Now</a></p>
                                                </div>
                                                    
                                                </Col>
                                            </Row>                      
                                        </TabPanel>
                                         
                                    </Tabs>
                                </div>
                            </Col>
                            
                        </Row>
                     </Container>                        
                </section>
            </>
        )
    }
}
