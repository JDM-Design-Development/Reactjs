import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import {Row, Col, Button, Alert} from 'react-bootstrap';
import axios from 'axios';
import './FooterForm.css';
export default class FooterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: 'panel',
            FirstName: '',
			PhoneNumber: '',
			Emailid: '',   
        };
        this.handleClick = this.handleClick.bind(this)
    }
     state = { isStart: 0 };
    handleClick() {
        this.setState({ visible: this.state.visible === 'panel'? 'panel visible' : 'panel' });
    }
    MyChangeHandler = e => {
            this.setState({ [e.target.name]: e.target.value })
    }
    SubmitPreQualification = e => { 
            this.setState({ isStart: 1 });
            //this.setState({ isEnd: !this.state.isEnd });
            e.preventDefault()
            let formData = new FormData()
            formData.set("FirstName", this.state.FirstName)
            formData.set("PhoneNumber", this.state.PhoneNumber)
            formData.set("Emailid", this.state.Emailid)
axios
    .post(
      'https://test.davis420doctor.com/wp-json/contact-form-7/v1/contact-forms/306/feedback',
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    )
    .then(res => {
            if(res.data.StatusCode === 200){
               this.setState({ isStart: null });
               // alert('hi');
            }else{
                this.setState({ isStart: null });
            }
    })
}
     render() {
         const isStart = this.state.isStart;
         //const isEnd = this.state.isEnd;
        return ( 
            <>
                <section className={`FooterFormWrap ${this.state.visible}`}> 
                        <Row className='rowfirst'>
                            <Col xs={12} md={12} lg={12}> 
                                <Row> 
                                    <Col xs={12} md={8} lg={8} className='txtbx'> 
                                        <h3 className="h3 text-uppercase text-white"> Looking for an ESA letter? </h3>
                                    </Col>
                                    <Col xs={12} md={4} lg={4} className='btnbx'> 
                                        
                                        <button className="btn text-uppercase text-white" id="show" onClick={this.handleClick}> Begin Pre-Qualification </button>
                                    </Col>
                                </Row>
                              
                            </Col>
                        </Row>
                        <form method='POST' onSubmit={this.SubmitPreQualification}>
                        <Row  className={`rowlast ${this.state.visible}`}>
                            <Col xs={12} md={12} lg={12}> 
                                <Row>  
                                    <Col xs={12} md={4} lg={4} className='txtbx'> 
                                        <input type="text" name="FirstName" placeholder="Full Name" onChange={this.MyChangeHandler} />
                                    </Col>
                                    <Col xs={12} md={4} lg={4} className='txtbx'> 
                                        <input type="tel" name="PhoneNumber" placeholder="Phone Number (###) ###-####" onChange={this.MyChangeHandler} />
                                    </Col>
                                    <Col xs={12} md={4} lg={4} className='txtbx'> 
                                        <input type="email" name="Emailid"  placeholder="Enter your Email" onChange={this.MyChangeHandler} />
                                    </Col> 
                                    <Col xs={12} md={12} lg={12} className='txtbx'>
                                        <p className="pcls"> In the next step you will create your account to see the doctor via our secure telemedicine software. <span> Our doctor will contact you by phone to complete the consultation via telemedicine.</span> Please be ready. You will receive your ESA letter in PDF format in 1 hour by email. An embossed hard copy is sent by mail.</p>
                                    </Col>
                                    <Col xs={12} md={12} lg={12} className='submitbx'>
                                        {/* <input type="submit" id="submit_button" className="button" value="Continue" /> */}
                                         
                                     <Button variant="primary" id="submit_button" className="button" type="submit">
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className={isStart ? null : "d-none"} />
                                        <span className=""> Continue</span> 
                                    </Button>
                                        <Alert variant="success mt-1" className={isStart ? null : "d-none"}>
                                            <p className='p-0 m-0'>Aww yeah, you successfully read this important alert message.</p>
                                        </Alert>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>    
                        </form>                 
                </section>
                
            </>
        )
    }
}
