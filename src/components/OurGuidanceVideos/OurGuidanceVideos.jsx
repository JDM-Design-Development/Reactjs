import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { ReactYouTubeLite } from 'react-youtube-lite';
import './OurGuidanceVideos.css';
export default class OurGuidanceVideos extends Component {
    render() {
      if(this.props.myloading){
        return (
            <>
                <section className='GuidanceVideos'> 
                     <Container>  
                        <Row>
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2"> {this.props.OurGuideVideoData.hiwsectiontwoheading} </h2> 
                            </Col>
                        </Row> 
                        <Row className='VidBx'> 
                            {this.props.OurGuideVideoData.hiwsectiontwovideobox.map((ourgdvid, index) => (
                            <Col xs={12} md={4} key={index}> 
                                <div className='GuidanceVideosWrap'>
                                    <ReactYouTubeLite url={ourgdvid.hiwsectiontwovideourl} />
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
