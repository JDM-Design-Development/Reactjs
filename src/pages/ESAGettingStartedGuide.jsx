import React, { Component } from 'react'
import AboutESAletter from '../components/AboutESAletter/AboutESAletter'
import HowToFlyVideo from '../components/HowToFlyVideo/HowToFlyVideo'
import TopImgBanner from '../components/TopImgBanner/TopImgBanner'
import GuideWithFlyingPet from '../components/GuideWithFlyingPet/GuideWithFlyingPet'
import axios from 'axios';
import myapi from '../api/myapi';
export default class ESAGettingStartedGuide extends Component {
    signal = axios.CancelToken.source();
     state ={
        esagetstdgud:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api esagetstdgud is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/254', {
        cancelToken: this.signal.token,
      }) 
        .then(res => this.setState({
            esagetstdgud: res.data,
            isLoaded:true
        }))
        .catch(err => console.log());
    } 

    render() {
          const { esagetstdgud, isLoaded} = this.state 
        if(isLoaded){ 
        return (
            <>
            
            <TopImgBanner 
               Headline={esagetstdgud.acf.gsgslider[0].gsgheading} 
               Images={esagetstdgud.acf.gsgslider[0].gsgimage} 
               BClr={esagetstdgud.acf.gsgslider[0].gsgbackgroundcolor}
               Txtcolor={esagetstdgud.acf.gsgslider[0].gsgtextcolor}
               overlaybg={esagetstdgud.acf.gsgslider[0].gsgoverlaybackground} />
               <AboutESAletter Aboutdata={esagetstdgud.acf.allabtesaletter[0]} />
               <HowToFlyVideo HTFVdata={esagetstdgud.acf.howtoflywithpet[0]} />
               <GuideWithFlyingPet />
              
            </>
        )
    }
         return (
            <> 
            </>
        )
    }
}
