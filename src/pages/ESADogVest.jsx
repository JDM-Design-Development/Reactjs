import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import ESDVest from '../components/ESDVest/ESDVest';
import ESDVestFAQ from '../components/ESDVestFAQ/ESDVestFAQ';
import axios from 'axios';
import myapi from '../api/myapi';
import DOMPurify from 'dompurify'; 
export default class ESADogVest extends Component {
     signal = axios.CancelToken.source();
     state ={
        edvst:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api edvst is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/275', {

        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            edvst: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 
     

    render() {
        const { edvst, isLoaded} = this.state 
        if(isLoaded){  
        return ( 
            <> 
                <ESDVest evst={edvst.acf.tfhassectionone[0]} myloading={isLoaded} /> 
                <ESDVestFAQ esvstfaq={edvst.acf.tfhassectiontwo[0]} myloading={isLoaded} /> 
                <section className='btmtxtdiv'> 
                    <Container>
                        <Row> 
                            <Col> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(edvst.acf.tfhassectionthree)} }  /> 
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