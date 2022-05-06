import React, { Component } from 'react';
import HowToRegisterDogs from '../components/HowToRegisterDogs/HowToRegisterDogs';
import KnowHowsOfESD from '../components/KnowHowsOfESD/KnowHowsOfESD';
import PerksOfESD from '../components/PerksOfESD/PerksOfESD';
import TopInnerBanner from '../components/TopInnerBanner/TopInnerBanner';
import WhatStudiesSay from '../components/WhatStudiesSay/WhatStudiesSay';
import axios from 'axios';
import myapi from '../api/myapi';
export default class HowToRegisterDog extends Component {
    signal = axios.CancelToken.source();
     state ={
        HTRD:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api HTRD is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/256', {
        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            HTRD: res.data, 
            isLoaded:true
        })) 
        .catch(err => console.log());
    } 
    render() { 
        const { HTRD, isLoaded} = this.state 
        if(isLoaded){  
        return (
            <>
                <TopInnerBanner 
                Headline={HTRD.acf.htrdbanner[0].htrdbannertxt} 
                Paragraphtext={HTRD.acf.htrdbanner[0].htrdparagraph}
                Paragraph={HTRD.acf.htrdbanner[0].htrdparagraphshowhide}
                Images={HTRD.acf.htrdbanner[0].htrdbannerbgimg} 
                BClr={HTRD.acf.htrdbanner[0].htrdbgcolor} 
                Txtcolor={HTRD.acf.htrdbanner[0].htrdtxtcolor}
                Buttontxt={HTRD.acf.htrdbanner[0].htrdbuttontext}
                ButtonHide={HTRD.acf.htrdbanner[0].htrdbuttonhideshow}
                btnlinks={HTRD.acf.htrdbanner[0].htrdbuttonlink}
                Txtalign={HTRD.acf.htrdbanner[0].htrdtextalign}
                Bheight={HTRD.acf.htrdbanner[0].htrdbannerheight}
                overlaybg={HTRD.acf.htrdbanner[0].htrdoverlaybg}
                />
                <HowToRegisterDogs HTRDS={HTRD.acf.htrdsectionone[0]} myloading={isLoaded} />
                <KnowHowsOfESD KHOE={HTRD.acf.htrdsectiontwo[0]} myloading={isLoaded} />
                <WhatStudiesSay WSS={HTRD.acf.htrdsectionthree[0]} myloading={isLoaded} />
                <PerksOfESD POE={HTRD.acf.htrdsectionfour[0]} myloading={isLoaded} />
             </>
        )
    }
         return (
            <> 
                
            </>
        )
    }
}
