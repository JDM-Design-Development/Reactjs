import React, { Component } from 'react';
import BestESDBreeds from '../components/BestESDBreeds/BestESDBreeds';
import BestESDBreedsDepression from '../components/BestESDBreedsDepression/BestESDBreedsDepression';
import BestESDBreedsAnxiety from '../components/BestESDBreedsAnxiety/BestESDBreedsAnxiety';
import BestESDBreedsPTSD from '../components/BestESDBreedsPTSD/BestESDBreedsPTSD';
import axios from 'axios';
import myapi from '../api/myapi';
export default class ESADogBreeds extends Component {
     signal = axios.CancelToken.source();
     state ={
        edbd:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){ 
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api edbd is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/277', {

        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            edbd: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 
     

    render() {
        const {edbd, isLoaded} = this.state 
        if(isLoaded){  
        return ( 
            <>
                <BestESDBreeds Besdb={edbd.acf.besdbsectionone[0]} myloading={isLoaded} />
                <BestESDBreedsDepression Besd={edbd.acf.besdbsectiontwo[0]} myloading={isLoaded} />
                <BestESDBreedsAnxiety Besda={edbd.acf.besdbsectionthree[0]} myloading={isLoaded} />
                <BestESDBreedsPTSD Bestd={edbd.acf.besdbsectionfour[0]} myloading={isLoaded} />
            </>
        )
   }
         return (
            <> 
         
            </>
        )
    }
}