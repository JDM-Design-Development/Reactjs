import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import axios from 'axios';
import './SecureLogos.css';
import myapi from '../../api/myapi';
export default class SecureLogos extends Component {
    signal = axios.CancelToken.source();
    state ={
        scure:[],
        isLoaded: false
    }
    _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api SecureLogos is being canceled');
    }

    onLoadUser = async () => { 
       myapi.get('/clientlogo', {
        cancelToken: this.signal.token,
      }) 
        .then(res => this.setState({
            scure: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    }
    render() {
        const {scure, isLoaded} = this.state 
        if(isLoaded){ 
        return (
            <>
            
                <section className='SecureLogosWrap'>  
                     <Container className=""> 
                     
                        <Row>  
                            <Col xs={12}> 
                                <div className='row SecureLogoImgWrap'>
                                    {scure[0].acf.logo_images.map((logo,index) => ( 
                                        <div key={index}> 
                                     
                                            {
                                            isWebpSupported()
                                            ? <img src={logo.logowebp} key={index} alt="logo" className='fluid' width="162" height="61" />
                                            : <img src={logo.logojpg} key={index} alt="logo" className='fluid' width="162" height="61" />
                                            }
                                        </div>
                                    ))}    
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