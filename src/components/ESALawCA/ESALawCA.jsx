import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './ESALawCA.css';
import DOMPurify from 'dompurify'; 
export default class ESALawCA extends Component {
    render() {
        return (
            <>
                <section className='ESALawCaWrap'>
                    <Container className='px-3 px-md-5'>
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} lg={6} xl={12} className='order-2 order-lg-1 text-center'>
                                <h1 className='h1 text-uppercase pb-2'> {this.props.lwcnt.esalcheading} </h1>
                            </Col>
                            <Col xs={12} lg={6} xl={6} className='order-2 order-lg-1'>
                                 <h2 className="h2"> {this.props.lwcnt.esalcsubheading}</h2>
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.lwcnt.esalccontent)} }  /> 
                            </Col>
                            <Col sx={12} lg={6} xl={6} className='order-1 order-lg-2'>
                                <div className='imgbx'>
                                    {
                                    isWebpSupported()
                                        ?<img src={this.props.lwcnt.esalcimgwebp}  alt='Emotional Support Animal Laws California' width='1050' height='700' />
                                        :<img src={this.props.lwcnt.esalcimgjpg}  alt='Emotional Support Animal Laws California' width='1050' height='700' />
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
