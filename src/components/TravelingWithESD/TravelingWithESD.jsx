import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './TravelingWithESD.css';
export default class TravelingWithESD extends Component {
    render() {
        return (
            <>
                <section className='TravelingWithESDWrap'> 
                    <Container className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={8} xl={8} className='order-2 order-lg-1'> 
                                <h2 className="h2 text-uppercase pb-2">What To Do While Traveling With Emotional Support Dog</h2> 
                                <p>When you are traveling with an emotional support dog you need to be careful about the carrier in which you are traveling. The Department of Transportation has laid new laws for flying with emotional support dogs. As per the changes to the Air Carrier Access Act, airlines are no longer obligated to allow emotional support dogs in the cabin free of charge. So, the benefit of getting an ESA letter for flying in 2021 depends on the decision of individual airlines.</p>
                                <p> Considering the new laws have come into effect in January 2021. If you wish to travel with your <strong>emotional support dog</strong> this year, you will have to pay the cost of flying with an emotional support animal and even keep them in a cage in the carrier since the DoT has now categorized them as pets. However, if an airline decides to allow an <strong>emotional support dog</strong> in the cabin and for free, you can use your ESA letter for flying and enjoy the benefits.</p>
                            </Col>
                            <Col xs={12} lg={4} xl={4} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src='images/teavles.webp' alt="teavles" width="445" height="460" />
                                    : <img src='images/teavles.jpg' alt="teavles" width="445" height="460" />
                                    }
                            </div>
                            </Col>
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
