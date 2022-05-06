import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './OurClinic.css';
export default class OurClinic extends Component {
    render() { 
        if(this.props.myloading){
        return (
            <>
                <section className='OurClinicWrap'> 
                    <Container className="">  
                        <Row> 
                            <Col xs={12}  lg={6}> 
                               <div className='AppoinmentBox'>
                                   <div className='AppoinmentContent'> 
                                        <span className='small-text'>{this.props.OurClinicdata.ourclinicheading}</span>
                                        <div dangerouslySetInnerHTML={{ __html:this.props.OurClinicdata.ourcliniccontent }} /> 
                                    </div>
                                    <a href={this.props.OurClinicdata.ourclinicbuttonlink} className="btn btn-appointment text-uppercase  mt-4">{this.props.OurClinicdata.ourclinicbuttontxt}</a>
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