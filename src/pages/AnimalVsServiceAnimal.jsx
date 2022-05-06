import React, { Component } from 'react';
import DiffESDServiceDog from '../components/DiffESDServiceDog/DiffESDServiceDog';
import ESAServiceAnimal from '../components/ESAServiceAnimal/ESAServiceAnimal';
import PublicPoliciesProtecting from '../components/PublicPoliciesProtecting/PublicPoliciesProtecting';
import axios from 'axios';
import myapi from '../api/myapi';
export default class AnimalVsServiceAnimal extends Component {
     signal = axios.CancelToken.source();
     state ={
        avsa:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api avsa is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/260', {

        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            avsa: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 


    render() {
        const { avsa, isLoaded} = this.state 
        if(isLoaded){  
        return ( 
            <>
                <ESAServiceAnimal esrvanl={avsa.acf.ecsasectionone[0]} myloading={isLoaded} /> 
                <DiffESDServiceDog desd={avsa.acf.ecsasectionsecond[0]} myloading={isLoaded} />
                <PublicPoliciesProtecting pppng={avsa.acf.sectionthird[0]} myloading={isLoaded} />
           </>   
        )
   }
         return (
            <> 
           
            </>
        )
    }
}
