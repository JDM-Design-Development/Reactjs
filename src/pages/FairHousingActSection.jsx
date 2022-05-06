import React, { Component } from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';
import myapi from '../api/myapi';
import DOMPurify from 'dompurify'; 
import FairHousingAct504 from '../components/FairHousingAct504/FairHousingAct504';
import FairHousingActFAQ from '../components/FairHousingActFAQ/FairHousingActFAQ';
export default class FairHousingActSection extends Component {
     signal = axios.CancelToken.source();
     state ={
        fhas:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api fhas is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/273', {

        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            fhas: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 
     

    render() {
        const { fhas, isLoaded} = this.state 
        if(isLoaded){  
        return ( 
            <> 
                              
               <FairHousingAct504 fhat={fhas.acf.tfhassectionone[0]} myloading={isLoaded} /> 
               <FairHousingActFAQ fhafq={fhas.acf.tfhassectiontwo[0]} myloading={isLoaded} /> 
               <section className='btmtxtdiv'> 
                    <Container> 
                        <Row> 
                            <Col> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(fhas.acf.tfhassectionthree)} }  /> 
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
