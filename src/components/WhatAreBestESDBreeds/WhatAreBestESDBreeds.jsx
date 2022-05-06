import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './WhatAreBestESDBreeds.css';
export default class WhatAreBestESDBreeds extends Component {
    render() {
        return (
            <>
                <section className='WhatAreBestESDBreedsWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center mb-5'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">What Are The Best Emotional Support Dog Breeds?</h2> 
                            </Col>
                            <Col xs={12}> 
                                <p>Here are the best emotional support dog breeds you can get to aid your emotional or mental disability.</p>
                            </Col>
                        </Row>
                        <Tabs>
                        <Row>
                            <Col xs={12} lg={6} xl={6} className="QualifyingConditions"> 
                                    <TabList>
                                        <Tab><h3 className='h3'>Golden Retriever</h3></Tab>
                                        <Tab><h3 className='h3'>Horizontal</h3></Tab>
                                        <Tab><h3 className='h3'>Vizsla</h3></Tab>
                                        <Tab><h3 className='h3'>Cavalier King Charles Spaniel</h3></Tab>
                                        <Tab><h3 className='h3'>Yorkie</h3></Tab>
                                    </TabList>
                            </Col>
                            <Col xs={12} lg={6} xl={6} className='d-flex justify-content-center'> 
                                <TabPanel className='GoldenRetriever'>
                                        <div className="details">
                                            <p>Golden Retrievers are the most popular dog breeds for a reason. They make excellent emotional support animals. They are a bundle of energy and can make perfect companions for almost any activity. They are well behaved, friendly, energetic, and loyal.</p>
                                            <p>They have the capacity for love and devotion that leaves almost all other dogs behind. They are perfect with kids, adults, and anyone else. They are best for helping with the depressive symptoms of their owners due to their infectious energy.</p>
                                        </div> 
                                </TabPanel>
                                <TabPanel className='Horizontal'>
                                        <div className="details">
                                            <p>They might look grumpy but in reality, they are nothing like what they look like. They are an extremely happy emotional support animal who loves cuddling with their owners more than anything else. They are known for their funny personality but are also exceptionally smart and diligent.</p>
                                            <p>They have a strong intuition which is attuned with their human’s emotion making them great emotional support animals</p>
                                        </div>
                                </TabPanel>
                                <TabPanel className='Vizsla'>
                                        <div className="details">
                                            <p>This is also called the velcro breed. They attach to their owners and then refuse to let go. This might seem like an irritating quality, but for a person who is going to need an emotional support animal, this is a quality that is appreciated.</p>
                                            <p>Vizsla is also a low maintenance breed. They have a cat-like ability to take care of themselves and they don’t smell which is a great plus point for people who can’t put in too much effort.</p>
                                        </div>
                                </TabPanel>
                                <TabPanel className='CavalierKing'>
                                        <div className="details">
                                            <p>These are the emotional support animals one should get if they have a family. They are loyal companions and have from the beginning been bred for the perfect companionship. They are efficient in fighting depression through their habit of cuddling with their owners. If affection is on your list it does not get better than these beauties.</p>
                                        </div>
                                </TabPanel>
                                <TabPanel className='Yorkie'>
                                        <div className="details">
                                            <p>If you are living in a small space then these are the perfect dogs for you. If you go by the legend, then the first-ever emotional support dog was a Yorkshire terrier. They are loyal, intelligent, loyal, loving, energetic, and compassionate. They are also incredibly social and are the best companion dogs for people suffering from social anxiety. They do have a slight bit of attitude but they will never leave your side making them the best breed as an ESA.</p>
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
