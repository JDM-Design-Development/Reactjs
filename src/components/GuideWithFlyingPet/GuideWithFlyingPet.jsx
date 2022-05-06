import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import 'react-tabs/style/react-tabs.css';
import './GuideWithFlyingPet.css';
import DOMPurify from 'dompurify'; 
export default class GuideWithFlyingPet extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='GuideFlyingPet'> 
                     <Container> 
                        <Row>
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2">{this.props.GuidewidFlyPetData.hiwsectionthreeheading}  </h2> 
                                <p className='OpconBxPara' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.GuidewidFlyPetData.hiwsectionthreetopparagraph)} }  /> 
                            </Col>
                        </Row>
                         <Row> 
                            <Col xs={12} md={12}> 
                                <div className='GuideFlyingPetWrap'>
                                    <Tabs>
                                        <TabList>
                                            {this.props.GuidewidFlyPetData.hiwsectionthreetabimgbxjpg.map((guideFlypet,index) => (  
                                                <Tab key={index}>
                                                    {
                                                        isWebpSupported()
                                                        ? <img src={guideFlypet.hiwsectionthreetabimgwebp} alt="Southwest airlines" width="102" height="102" />
                                                        : <img src={guideFlypet.hiwsectionthreetabimgjpg} alt="Southwest airlines" width="102" height="102" />
                                                    }
                                                </Tab>
                                            ))}  
                                        </TabList>
                                            {this.props.GuidewidFlyPetData.hiwsectionthreetabcontentbx.map((guideFlypetcontxt,index) => (  
                                                <TabPanel className='south' key={index}>
                                                    <div className="details" dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(guideFlypetcontxt.hiwsectionthreetabcontent)} }  /> 
                                                </TabPanel>
                                            ))}  
                                    </Tabs>
                                </div>
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