import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import 'react-tabs/style/react-tabs.css';
import './PerksOfESC.css'; 
import DOMPurify from 'dompurify';
export default class PerksOfESC extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='PerkESC'> 
                     <Container> 
                        <Row>
                            <Col xs={12}>  
                                <h2 className="h2 text-uppercase pb-2">{this.props.poec.htrdheading}</h2> 
                            </Col>
                        </Row>
                         <Row> 
                            <Col xs={12} md={12}> 
                                <Tabs>
                                    <TabList>
                                        {this.props.poec.htrdtabheadinglists.map((PoeBx,index) => ( 
                                        <Tab key={index}>
                                             <span>
                                                 <div className='hovicon effect sub-b'>
                                                    {
                                                        isWebpSupported()
                                                        ? <img src={PoeBx.htrdiconwebp} width="124" height="124" alt="emotional support cat happiness" />
                                                        : <img src={PoeBx.htrdiconjpg} className='main-img' alt="emotional support cat happiness" width="124" height="124" />
                                                    }
                                                 </div>
                                             </span>
                                            <em>{PoeBx.htrdheading}</em>
                                        </Tab>
                                        ))} 
                                    </TabList>
                                    {this.props.poec.htrdtabcontentlist.map((PoeBxx,index) => ( 
                                    <TabPanel key={index}>
                                        <Row className='align-items-center text-center'>
                                            <Col xs={12} md={5} className={`${index === 1 ? 'order-1 order-lg-2' : '' } ${index===3 ? 'order-2 order-lg-1' : ''}`}> 
                                                 {
                                                    isWebpSupported()
                                                    ? <img src={PoeBxx.htrdimagewebp} alt="emotional support dog vest" width="360" height="343" />
                                                    : <img src={PoeBxx.htrdimagejpg} alt="emotional support dog vest" width="360" height="343" />
                                                }
                                            </Col>
                                            <Col xs={12} md={7} className={`mb-5 ${index === 1 ? 'order-2 order-lg-1' : '' } ${index===3 ? 'order-1 order-lg-2' : ''}`}> 
                                                 <h2 className="h3">{PoeBxx.htrd_heading}</h2>
                                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(PoeBxx.htrdcontent)} }  /> 
                                            </Col>
                                        </Row>
                                    </TabPanel>
                                     ))}
                                    
                                    
                                </Tabs>
                            </Col>
                            
                            
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