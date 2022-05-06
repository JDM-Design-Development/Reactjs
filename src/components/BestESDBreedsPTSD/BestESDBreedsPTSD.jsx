import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import 'react-tabs/style/react-tabs.css';
import './BestESDBreedsPTSD.css'; 
import DOMPurify from 'dompurify'; 
export default class BestESDBreedsPTSD extends Component {
    render() {
         if(this.props.myloading){
        return (
            <>
                <section className='BestESDBreedsPTSDWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={12} xl={12} className='text-center'> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.Bestd.besdbheading} </h3>  
                            </Col>
                            <Tabs>
                            <Col xs={12} className="DogBreedsTabs"> 
                                <Row>
                                    <Col xs={12} lg={12} xl={12}> 
                                        <TabList>
                                             {this.props.Bestd.besdbtabsbx.map((tablist,index) => (  
                                            <React.Fragment key={index}>
                                                <Tab><h3 className="h3" title={`${tablist.besdbtabs}`}>{tablist.besdbtabs}</h3></Tab>
                                            </React.Fragment>
                                             ))}
                                        </TabList>
                                    </Col>
                                    {this.props.Bestd.besdbtabcontentbx.map((tabcnt,index) => (
                                    <TabPanel className={index === 0 ? 'Chihuahuas' : 'Poodles' && index === 1 ? 'Collies' : 'Poodles'} key={index}>      
                                    <Col xs={12} lg={12} xl={12}> 
                                        <Row> 
                                            <Col xs={12} lg={8} xl={8} className='d-flex align-items-center order-2 order-lg-1'> 
                                                <div className="details">
                                                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(tabcnt.besdbtabscontent)} }  /> 
                                                </div>
                                            </Col>
                                            <Col xs={12} lg={4} xl={4} className='order-1 order-lg-2'> 
                                                <div className='imgbx'> 
                                                    {
                                                        isWebpSupported()
                                                        ? <img src={tabcnt.besdbtabsimagewebp} alt="Chihuahuas" width="600" height="600" />
                                                        : <img src={tabcnt.besdbtabsimagejpg} alt="Chihuahuas" width="600" height="600" />
                                                    }
                                                </div>
                                            </Col>    
                                        </Row>
                                    </Col> 
                                    </TabPanel>
                                     ))}
                                 
                                </Row>

                           
                                        

                                        
                                         
            
                                   
                               
                            </Col>
                            </Tabs>
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