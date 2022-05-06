import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './BestESDBreeds.css';
import DOMPurify from 'dompurify'; 
export default class BestESDBreeds extends Component {
    render() {
          if(this.props.myloading){
        return (
            <>
                <section className='BestESDBreedsWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}  lg={12} xl={12} className='order-2 order-lg-1 text-center'> 
                                <h3 className="h2 text-uppercase pb-2"> {this.props.Besdb.besdbheading} </h3>  
                                
                            </Col>
                            <Col xs={12}  lg={6} xl={6} className='order-2 order-lg-1 '> 
                               <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.Besdb.besdbcontent)} }  /> 
                            </Col>   
                            <Col xs={12} lg={6} xl={6} className='order-1 order-lg-2'> 
                            <div className='imgbx'>
                                    {
                                        isWebpSupported()
                                    ? <img src={this.props.Besdb.besdbimgwebp} alt="emotional-support-dog-vest" width="1050" height="700" />
                                    : <img src={this.props.Besdb.besdbimgjpg} alt="emotional-support-dog-vest" width="1050" height="700" />
                                    }
                            </div>
                               
                            </Col>
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