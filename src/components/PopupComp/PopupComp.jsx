import React, { Component } from 'react';
import {Row, Col,Button,Alert} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './PopupComp.css';
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default class PopupComp extends Component {
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
     state = { isStartt: 0 };
  
    handleClick() {
        this.setState({ visible: this.state.visible === 'panel'? 'panel visible' : 'panel' });
    }
    MyChangeHandlerr = e => {
                this.setState({ [e.target.name]: e.target.value })
    }
    SubmitPopup = e => { 
            this.setState({ isStartt: 1 });
            //this.setState({ isEnd: !this.state.isEnd });
            e.preventDefault()
            let formData = new FormData()
            formData.set("FirstName", this.state.FirstName)
            formData.set("PhoneNumber", this.state.PhoneNumber)
            formData.set("Emailid", this.state.Emailid)
axios
    .post(
      'https://test.davis420doctor.com/wp-json/contact-form-7/v1/contact-forms/7195/feedback',
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        }, 
      }
    )
    .then(res => {
            if(res.data.StatusCode === 200){
               this.setState({ isStartt: null });
               // alert('hi');
            }else{
                this.setState({ isStartt: null });
            }  
    })  
}

    render() {
        
         const isStartt = this.state.isStartt;
        return (
            <>
                
                <Popup className='applyonline btn btn-danger homemodal' trigger={<Button variant="danger" size="sm">Get ESA Letter Now</Button>} modal nested>
                        {close => (
                            <div className="modal homepagemodal">  <button className="close" onClick={close}>&times;</button>  
                                <Row className='m-0 p-0 modalrow'> 
                                    <Col className='pt-5 pb-3 px-4' xs={12} md={6}> 
                                        <h5>STEP 1: </h5>
                                        <h3>Begin Your Application</h3>
                                        <ul> 
                                            <li> Quick 10 min application </li> 
                                            <li> 100% money-back guarantee </li> 
                                            <li> You are only charged if you are approved</li> 
                                        </ul>
                                        <p> I contacted this telemedicine clinic to get my ESA letter through a video call. Their service level was top notch, and the entire process was streamlined, efficient, and professional. It was very convenient, way easier than I expected. </p>
                                        <p><small>— William J., Santa Ana, CA</small></p>
                                        <Row>
                                            <Col xs={12} md={12}> 
                                                {
                                                    isWebpSupported()
                                                    ? <img src='images/bbbf.webp' alt="A+ BBB Rating" width="200" height="200" />
                                                    : <img src='images/bbbf.jpg' alt="A+ BBB Rating" width="200" height="200" />
                                                }
                                                {
                                                    isWebpSupported()
                                                    ? <img src='images/american-telemedicine.webp' alt="Americal Telemedicine" width="200" height="200" />
                                                    : <img src='images/american-telemedicine.jpg' alt="Americal Telemedicine" width="200" height="200" />
                                                }
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='py-5 px-5 next-tab' xs={12} md={6}> 
                                        <form method='POST' onSubmit={this.SubmitPopup}>
                                        <Row>  
                                            <Col xs={12} md={12} lg={12} className='txtbx'> 
                                                <input type="text" name="FirstName" placeholder="Name" onChange={this.MyChangeHandlerr} required />
                                            </Col>
                                            <Col xs={12} md={12} lg={12} className='txtbx'> 
                                                <input type="email" name="Emailid"  placeholder="Enter your Email" onChange={this.MyChangeHandlerr} required />
                                            </Col> 
                                            <Col xs={12} md={12} lg={12} className='txtbx'> 
                                                <input type="tel" name="PhoneNumber" placeholder="Phone Number"  minlength="4" maxlength="10" size="10" onChange={this.MyChangeHandlerr} required onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} />
                                            </Col>
                                            <Col xs={12} md={12} lg={12} className='submitbx'>
                                                <Button variant="primary" id="submit_button" className="button" type="submit">
                                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className={isStartt ? null : "d-none"} />
                                                <span className=""> Submit</span> 
                                            </Button>
                                            <Alert variant="success mt-1" className={isStartt ? null : "d-none"}>
                                                <p className='p-0 m-0'>Aww yeah, you successfully read this important alert message.</p>
                                            </Alert>
                                            </Col>
                                            <Col xs={12} md={12} lg={12} className='txtbx btmtxt'> 
                                                <p className="text-center">Our doctor will contact you by phone to complete the consultation via telemedicine. Please be ready.</p>
                                                <p className="text-center">You will receive your ESA letter in PDF format in 1 hour by email. An embossed hard copy is sent by mail.</p>
                                                <span className="text-center">Rather apply by phone? <br /> Call us at (866) 360-5652</span>
                                            </Col>
                                        </Row>
                                        </form>
                                    </Col>
                                </Row>
                                
                            </div>  )}
                </Popup>
            </>
        )
    }
}
