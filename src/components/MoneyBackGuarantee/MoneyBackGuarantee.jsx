import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './MoneyBackGuarantee.css';
export default class MoneyBackGuarantee extends Component {
    render() {
        if(this.props.myloading){
        return (
            <>
                <section className='MoneyBackGuaranteeWrap'>  
                     <Container className=""> 
                        <Row className='justify-content-md-center'>
                            <Col xs={12} lg={8} className='MBGbox'> 
                                <h2 className="MBGheading">{this.props.MoneyBackGuaranteedata.mbgheading}</h2>
                                <Row className='align-items-center MBGinnerBox'>
                                    <Col xs={12} xl={3}> 
                                        {
                                            isWebpSupported()
                                        ? <img src={this.props.MoneyBackGuaranteedata.moneybackguaranteewebp} alt="money-back-guarantee" width="181" height="181" />
                                        : <img src={this.props.MoneyBackGuaranteedata.moneybackguaranteejpg} alt="money-back-guarantee" width="181" height="181" />
                                        }
                                    </Col>
                                    <Col xs={12} xl={9}> 
                                        <div dangerouslySetInnerHTML={{ __html:this.props.MoneyBackGuaranteedata.mbgparagraph }} /> 
                                    </Col>
                                </Row>
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
