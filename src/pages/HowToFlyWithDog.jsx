import React, { Component } from 'react';
import GuideFlyingWithESD from '../components/GuideFlyingWithESD/GuideFlyingWithESD';
import GuidelinesForFlyingESD from '../components/GuidelinesForFlyingESD/GuidelinesForFlyingESD';
import HowToFlyWithDogFAQ from '../components/HowToFlyWithDogFAQ/HowToFlyWithDogFAQ';
import axios from 'axios';
import myapi from '../api/myapi';
export default class HowToFlyWithDog extends Component {
    signal = axios.CancelToken.source();
     state ={
        htfwd:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api htfwd is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/262', {

        cancelToken: this.signal.token,
      })   
        .then(res => this.setState({
            htfwd: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 
    render() {
         const { htfwd, isLoaded} = this.state 
        if(isLoaded){  
        return (
            <>
            <GuideFlyingWithESD gfwesd={htfwd.acf.htfwdsectionone[0]} myloading={isLoaded} /> 
            <GuidelinesForFlyingESD glffesd={htfwd.acf.htfwdsectiontwo[0]} myloading={isLoaded} /> 
            <HowToFlyWithDogFAQ htfwdfq={htfwd.acf.sectionfaq[0]} myloading={isLoaded} />
             </>   
        )
   }
         return (
            <> 
            
            </>
        )
    }
}
