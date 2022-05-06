import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import {Row, Col, Container, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faYoutube, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import DOMPurify from 'dompurify'; 
import './Footer.css';

export default class Footer extends Component {
    
      constructor(props) {
        super(props)
        this.state = {
            EnterEmail: '',
			Phone: '',
			EnterMessage: '', 
            ftr:[], 
            }
           
            
        }
        state = { isStart: 0 };



        signal = axios.CancelToken.source();
        state ={
           
            isLoaded: false
        }
        _isMounted = false
        componentDidMount(){ 
            this.onLoadUser();
        }
        componentWillUnmount() {
            this.signal.cancel('mBK');
        }
componentDidMount() {
    fetch('https://test.davis420doctor.com/wp-json/wp/v2/footer')
      .then(response => response.json())
      .then(ftr => this.setState({ ftr }))
  }


        
          
       

 

        ChangeHandler = e => {
            this.setState({ [e.target.name]: e.target.value })
            //console.log(e.target.value)
        }
      
        SubmitMe = e => {
            this.setState({ isStart: 1 });
            //this.setState({ isEnd: !this.state.isEnd });
            e.preventDefault()
            let formData = new FormData()
            formData.set("EnterEmail", this.state.EnterEmail)
            formData.set("Phone", this.state.Phone)
            formData.set("EnterMessage", this.state.EnterMessage)
axios
    .post(
      'https://test.davis420doctor.com/wp-json/contact-form-7/v1/contact-forms/228/feedback',
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
        
      }
      
    )
    .then(res => {

      //console.log(res.data);

            if(res.data.StatusCode == 200){
               this.setState({ isStart: null });
               // alert('hi');
            }else{
                this.setState({ isStart: null });

            }
           
    })
    
}
    render(){
         const isStart = this.state.isStart;
         const isEnd = this.state.isEnd;
          const {ftr, isLoaded} = this.state  
        // const listItems = ftr.map((d) => <li key={d.id}>{d.acf.footerlogo}</li>);
    return (  
             
            <> 
            <div> 
 
      </div>
                    
            {ftr.map((ftrinner,index) => (  
                <footer className='FooterWrap' key={index}> 
                  {(ftrinner.acf.footerlogo)}
                     <Container className=""> 
                        <Row> 
                            <Col xs={12} md={6} lg={3}>  
                                {       
                                        isWebpSupported()
                                    ? <img src={ftrinner.acf.footerlogowebp} width="140" height="60" className="d-inline-block" alt="logo" />
                                    : <img src={ftrinner.acf.footerlogoJpg} width="140" height="60" className="d-inline-block" alt="logo" />
                                }
                           
                               <p>{ftrinner.acf.footerparagarph} </p>
                             
                                   {/* <Link to={"/our-clinic"} aria-label="My ESA doctor is a service of Steady Care Medical" className="mt-2 btn">click here</Link>  */}
                                <ul className="mt-3 SocialLinks">
                                    
                                    <>
                                    <li>
                                        <a href={ftrinner.acf.footersocialicons[0].SocialLinks} rel="noreferrer" target="_blank" className="Facebook" title="Facebook">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ftrinner.acf.footersocialicons[1].SocialLinks} rel="noreferrer" target="_blank" className="Twitter" title="Twitter">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ftrinner.acf.footersocialicons[2].SocialLinks} rel="noreferrer" target="_blank" className="youtube" title="youtube">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ftrinner.acf.footersocialicons[3].SocialLinks} rel="noreferrer" target="_blank" className="instagram" title="instagram">
                                                <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ftrinner.acf.footersocialicons[4].SocialLinks} rel="noreferrer" target="_blank" className="pinterest" title="pinterest">
                                                <FontAwesomeIcon icon={faPinterest} />
                                        </a>
                                    </li>
                                    </>
                                    
                                    
                                </ul>
                            </Col>
                            <Col xs={12} md={6} lg={3}> 
                                <h3 className='h5'>Quick Links</h3>
                                <div className='UsefullLinks'>
                                    <ul className='lin_ks'>
                                         <li> <Link to={ftrinner.acf.quickLinks[0].quicklinksurls.split('/')[3]}> {ftrinner.acf.quickLinks[0].quicklinksname} </Link> </li>
                                         <li> <Link to={ftrinner.acf.quickLinks[1].quicklinksurls.split('/')[3]}> {ftrinner.acf.quickLinks[1].quicklinksname} </Link> </li>
                                         <li> <Link to={ftrinner.acf.quickLinks[2].quicklinksurls.split('/')[3]}> {ftrinner.acf.quickLinks[2].quicklinksname} </Link> </li>
                                         <li> <Link to={ftrinner.acf.quickLinks[3].quicklinksurls.split('/')[3]}> {ftrinner.acf.quickLinks[3].quicklinksname} </Link> </li>
                                         <li> <Link to={ftrinner.acf.quickLinks[4].quicklinksurls.split('/')[3]}> {ftrinner.acf.quickLinks[4].quicklinksname} </Link> </li>
                                         <li> <Link to={ftrinner.acf.quickLinks[5].quicklinksurls.split('/')[3]}> {ftrinner.acf.quickLinks[5].quicklinksname} </Link> </li>
                                         <li> <Link to={ftrinner.acf.quickLinks[6].quicklinksurls.split('/')[3]}> {ftrinner.acf.quickLinks[6].quicklinksname} </Link> </li>                                         
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={3}> 
                                <h3 className='h5'>Quick Contact</h3>
                                <form method='POST' onSubmit={this.SubmitMe}>
                                    <label><input type="email" name="EnterEmail" placeholder='Enter Email' onChange={this.ChangeHandler} /></label>
                                    <label><input type="tel" name="Phone"  placeholder='Enter Phone' onChange={this.ChangeHandler}  /></label>
                                    <label><textarea name="EnterMessage" placeholder='Enter Message' cols="40" rows="10"  onChange={this.ChangeHandler} /> </label>
                                    <Button variant="primary" type="submit">
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className={isStart ? null : "d-none"} />
                                        <span className=""> Send Message</span>
                                    </Button>
                                    <Alert variant="success mt-1" className={isStart ? null : "d-none"}>
                                        <p className='p-0 m-0'>Aww yeah, you successfully read this important alert message.</p>
                                    </Alert>
                                </form>
                            </Col>
                            <Col xs={12} md={6} lg={3}> 

                                <h3 className='h5'>Address</h3>
                                <div className='opening-hours'>
                                    <ul className='list_time'>
                                        <li><FontAwesomeIcon icon={faAddressBook} />  {ftrinner.acf.footerAddress}</li>
                                    </ul>
                                </div>

                                <h3 className='h5'>Opening Hours</h3>
                                <div className="opening-hours">
                                    <ul className="list_time">
                                        <li><FontAwesomeIcon icon={faTimesCircle} />  {ftrinner.acf.openingHours[0].openingHoursOne} </li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} />  {ftrinner.acf.openingHours[0].openingHoursTwo}</li>
                                    </ul>
                                </div>

                                <h3 className='h5'>Phone No</h3>
                                <div className="opening-hours">
                                    <ul className="list_time">
                                        <li><FontAwesomeIcon icon={faTimesCircle} />  
                                        <span dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(ftrinner.acf.phoneNo)} }  />
                                        </li>
                                    </ul>
                                </div>

                            </Col> 
                        </Row>
                     </Container> 
                    <Container fluid className='copiright'> 
                        <Row>
                            <Col xs={12} className='btmFooterWrap'> 
                                <p>
                                    {
                                        isWebpSupported()
                                        ? <img src='images/how-to-get-emotional-support-animal-letter.webp' alt="how to get emotional support animal letter" className='fluid text-center'  width="17" height="16" />
                                        : <img src='images/how-to-get-emotional-support-animal-letter.png' alt="how to get emotional support animal letter" className='fluid text-center' width="17" height="16" />
                                    } 
                                    
            {ftrinner.acf.footerparagarph}</p>
                            </Col>
                        </Row>
                    </Container>   
                                           
                </footer>
                      ))}     
            </>
        )
    }

 


        
    
}
 