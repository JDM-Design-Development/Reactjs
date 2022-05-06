import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { ReactYouTubeLite } from 'react-youtube-lite';
import './HowToFlyVideo.css';
export default class HowToFlyVideo extends Component {
    render() {
        return (
            <>
                <section className='HowToFlyVideo'> 
                     <Container> 
                        <Row>
                            <Col xs={12}> 
                             <h2 className="h2 text-uppercase pb-2" dangerouslySetInnerHTML={{ __html:this.props.HTFVdata.howtoflywithpetheading }} />
                            </Col>
                        </Row>
                         <Row className='VidBx justify-content-center'> 
                            <Col xs={12} md={8}> 
                                <div className='HowToFlyVideoWrap'>
                                    <ReactYouTubeLite url={this.props.HTFVdata.howtoflywithpetvideo} />
                                </div>
                            </Col>
                        </Row>
                     </Container>                        
                </section>
            </>
        )
    }
}
