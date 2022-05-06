import React, { Component } from 'react'
import HowToCertifyESD from '../components/HowToCertifyESD/HowToCertifyESD'
import RightsOfESD from '../components/RightsOfESD/RightsOfESD'
import HowToCertifyESDFAQ from '../components/HowToCertifyESDFAQ/HowToCertifyESDFAQ'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios';
import myapi from '../api/myapi';
import DOMPurify from 'dompurify'; 
export default class GetDogCertification extends Component {
      signal = axios.CancelToken.source();
     state ={
        gdcert:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api gdcert is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/271', {

        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            gdcert: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 
     

    render() {
        const { gdcert, isLoaded} = this.state 
        if(isLoaded){ 
        return (
            <>
             
                <HowToCertifyESD Htcesd={gdcert.acf.htcyesdsectionone[0]} myloading={isLoaded} /> 
                <RightsOfESD Roesd={gdcert.acf.htcyesdsectiontwo[0]} myloading={isLoaded} /> 
                <HowToCertifyESDFAQ Htcesdf={gdcert.acf.htcyesdsectionthree[0]} myloading={isLoaded} /> 
                <section className='btmtxtdiv'> 
                    <Container>
                        <Row> 
                            <Col> 
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(gdcert.acf.htcyesdsectionfour)} }  />  
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
