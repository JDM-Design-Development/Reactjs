import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './QualifyingConditionESDCertification.css';
export default class QualifyingConditionESDCertification extends Component {
    render() {
        return (
            <>
                <section className='QualifyingConditionESDCertificationWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center mb-5'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">Qualifying Conditions For An <strong>Emotional Support Dog Certification</strong></h2> 
                            </Col>
                            <Col xs={12}> 
                            <p>To qualify to get your <strong>emotional support dog certified</strong> you must be diagnosed as emotionally disabled by a psychologist, therapist, psychiatrist, and/or any other certified mental health professional.</p> 
                            <p>Some of the most common Qualifying Conditions For An <strong>Emotional Support Dog Certification</strong> are:</p> 

                            </Col>
                        </Row>
                        <Tabs>
                        <Row>
                            <Col xs={12} lg={6} xl={6} className="QualifyingConditions"> 
                                    <TabList>
                                        <Tab><h3 className='h3'>Anxiety</h3></Tab>
                                        <Tab><h3 className='h3'>Depression</h3></Tab>
                                        <Tab><h3 className='h3'>Post-Traumatic Stress Disorder</h3></Tab>
                                        <Tab><h3 className='h3'>Social Anxiety Disorder</h3></Tab>
                                        <Tab><h3 className='h3'>Phobias</h3></Tab>
                                    </TabList>
                            </Col>
                            <Col xs={12} lg={6} xl={6} className='d-flex justify-content-center'> 
                                <TabPanel className='Anxiety'>
                                        <div className="details">
                                            <p>Anxiety has become very common nowadays. People are always fearful of not living up to their full potential. And this dissatisfaction is causing uncontrolled thoughts in their minds making them over-anxious. Therefore, therapists suggest <strong>emotional support dogs</strong> for people who are suffering from an anxiety disorder. <strong>Emotional dogs</strong> distract the person from the topic and engage him in any other activity such as playing with him or taking him for a walk. A panic attack is also caused by anxiety disorder due to the person feeling extreme terror, even when there is no real danger. And as you can take your <strong>emotional support dog</strong> almost anywhere, it can help you with this condition too.</p>
                                        </div> 
                                </TabPanel>
                                <TabPanel className='Depression'>
                                        <div className="details">
                                            <p>Depressed people usually seem frustrated and broken. They don’t have a purpose in life. For them, winning is for others. They feel everyone is better and above them. Mental health professionals claim that an emotional support dog can help alleviate the pain of a depressed person. Pet therapy has always been effective in depression. An <strong>emotional support dog</strong> can give a purpose to the person suffering from depression. The love and support of an emotional support dog can help the person take the first step toward healing.</p>
                                        </div>
                                </TabPanel>
                                <TabPanel className='Post-Traumatic'>
                                        <div className="details">
                                            <p>This is a condition in which people feel extremely stressed after having a tough time in their life. In the U.S. alone, more than 7.5 million people are suffering from PTSD. an emotional support dog can easily keep the person off-topic and thus help them relax. Therefore, professionals recommend an <strong>emotional support dog</strong> for the people suffering from the condition.</p>
                                        </div>
                                </TabPanel>
                                <TabPanel className='SocialAnxiety'>
                                        <div className="details">
                                            <p>Socializing isn’t for everyone. Some people really like being alone. They can’t talk to people in a social setting and feel really overwhelmed when they have to. This type of condition is called social anxiety disorder. Going to a social gathering with an <strong>emotional support dog</strong> can make it much less painful as you are with someone who can make you comfortable. Social anxiety can be cured by having an <strong>emotional support dog</strong> by your side at any social event. If you feel uncomfortable, you can play with your emotional dog for some time and you’ll feel relaxed.</p>
                                        </div>
                                </TabPanel>
                                <TabPanel className='Phobias'>
                                        <div className="details">
                                            <p>Many people suffer from different phobias. The fear might be of heights or water, or any other thing. Your <strong>emotional support dog</strong> can really help you in an unwanted situation. If you come across something which you fear, you may become very uncomfortable. Your heart rate may rise and you may feel sweaty sometimes. But if you have a pet with you, it can help you ease your stress and make you feel relaxed.</p>
                                        </div> 
                                </TabPanel>
                            </Col>
                        </Row>
                        </Tabs>
                    </Container>                        
                </section>
            </>
        )
    }
}
