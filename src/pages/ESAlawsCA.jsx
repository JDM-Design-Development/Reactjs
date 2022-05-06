import React, { Component } from 'react'
import ESAlawCA from '../components/ESALawCA/ESALawCA'
import {Row, Col, Container} from 'react-bootstrap';
import ESALawRentedAccommodation from '../components/ESALawRentedAccommodation/ESALawRentedAccommodation';
import ESAAtWorkplace from '../components/ESAAtWorkplace/ESAAtWorkplace';
import ESADuringTravel from '../components/ESADuringTravel/ESADuringTravel';
import ESAPublicPlace from '../components/ESAPublicPlace/ESAPublicPlace';
import axios from 'axios';
import myapi from '../api/myapi';
import DOMPurify from 'dompurify'; 
export default class ESAlawsCA extends Component {
     signal = axios.CancelToken.source();
     state ={
        elwca:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api elwca is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/269', {

        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            elwca: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 
     

    render() {
        const { elwca, isLoaded} = this.state 
        if(isLoaded){ 
        return (
            <>
                <ESAlawCA lwcnt={elwca.acf.esalcsectionone[0]} />
                <section className="ESDprivilege">
                    <Container> 
                        <Row>
                            <Col>
                                <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(elwca.acf.esalcsectionsecond)} }  /> 
                            </Col>
                        </Row>
                    </Container>
                </section>
                <ESALawRentedAccommodation lwrntacc={elwca.acf.esalcsectionthree[0]} />
                <ESAAtWorkplace esaawp={elwca.acf.esalcsectionfour[0]} /> 
                <ESADuringTravel esadt={elwca.acf.esalcsectionfive[0]} />
                <ESAPublicPlace esapp={elwca.acf.esalcsectionsix[0]} />
            </>
        )
   }
         return (
            <> 
            
            </>
        )
    }
}
