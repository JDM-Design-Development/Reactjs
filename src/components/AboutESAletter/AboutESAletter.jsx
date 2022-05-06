import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './AboutESAletter.css';
export default class AboutESAletter extends React.Component { 
    render() {
        return ( 
            <> 
                <section className='AboutESAletterWrap'> 
                     <Container className=""> 
                        <Row>   
                            <Col xs={12}> 
                                <h2 className="h2 text-uppercase pb-2 wTopHeading">{this.props.Aboutdata.allabtesaletterheading}</h2> 
                                <p>{this.props.Aboutdata.allabtesaletterparagraph}</p>
                            </Col>
                        </Row>
                        <Row className=' justify-content-center text-center'> 
                        {this.props.Aboutdata.allabtesaletterbox.map((abtesa,index) => (   
                            <Col key={index} xs={12} lg={4} md={6} className='AboutESAletterCol'> 
                                <div className='AboutESAletterBx'>
                                    <div className='abtImgBx'> 
                                        <img src={abtesa.allabtesaletterbxicon} alt="What-is-an-ESA" className='fluid' width="80" height="80" />
                                    </div>
                                     <div className='abtconBx'> 
                                        <h2 className="h2 abtconBxHeading text-capitilized pb-2">{abtesa.allabtesaletterbxheading}</h2>
                                         <Popup trigger={<Button variant="primary" size="sm">Read More</Button>} modal nested>
                                        {close => (
                                        <div className="modal">  <button className="close" onClick={close}>&times;</button>  
                                            <div dangerouslySetInnerHTML={{ __html:abtesa.allabtesaletterbxiconparagraph }} />
                                        </div>  )}
                                        </Popup>
                                    </div>
                                </div>
                            </Col>
                        ))}   
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
