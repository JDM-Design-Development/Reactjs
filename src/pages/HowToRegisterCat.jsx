import React, { Component } from 'react';
import HowToRegisterCats from '../components/HowToRegisterCats/HowToRegisterCats';
import KnowHowsOfESC from '../components/KnowHowsOfESC/KnowHowsOfESC';
import PerksOfESC from '../components/PerksOfESC/PerksOfESC';
import TopInnerBanner from '../components/TopInnerBanner/TopInnerBanner';
import WhatStudiesSayCat from '../components/WhatStudiesSayCat/WhatStudiesSayCat';
import axios from 'axios';
import myapi from '../api/myapi';
export default class HowToRegisterCat extends Component {
     signal = axios.CancelToken.source();
     state ={
        HTRC:[],
        isLoaded: false
    }
   _isMounted = false
    componentDidMount(){
         this.onLoadUser();
    }
     componentWillUnmount() {
        this.signal.cancel('Api HTRC is being canceled');
    }
    onLoadUser = async () => { 
       myapi.get('/pages/258', {
        cancelToken: this.signal.token,
      })  
        .then(res => this.setState({
            HTRC: res.data, 
            isLoaded:true
        })) 
        .catch(err => console.log());
    } 
    render() { 
        const { HTRC, isLoaded} = this.state 
        if(isLoaded){  
        return (
            <>
                <TopInnerBanner 
                Headline={HTRC.acf.htrdbanner[0].htrdbannertxt} 
                Paragraphtext={HTRC.acf.htrdbanner[0].htrdparagraph}
                Paragraph={HTRC.acf.htrdbanner[0].htrdparagraphshowhide}
                Images={HTRC.acf.htrdbanner[0].htrdbannerbgimg} 
                BClr={HTRC.acf.htrdbanner[0].htrdbgcolor} 
                Txtcolor={HTRC.acf.htrdbanner[0].htrdtxtcolor}
                Buttontxt={HTRC.acf.htrdbanner[0].htrdbuttontext}
                ButtonHide={HTRC.acf.htrdbanner[0].htrdbuttonhideshow}
                btnlinks={HTRC.acf.htrdbanner[0].htrdbuttonlink}
                Txtalign={HTRC.acf.htrdbanner[0].htrdtextalign}
                Bheight={HTRC.acf.htrdbanner[0].htrdbannerheight}
                overlaybg={HTRC.acf.htrdbanner[0].htrdoverlaybg}
                />
                <HowToRegisterCats htrcs={HTRC.acf.htrdsectionone[0]} myloading={isLoaded} /> 
                <KnowHowsOfESC khoe={HTRC.acf.htrdsectiontwo[0]} myloading={isLoaded} />
                <WhatStudiesSayCat wssc={HTRC.acf.htrdsectionthree[0]} myloading={isLoaded} />
                <PerksOfESC poec={HTRC.acf.htrdsectionfour[0]} myloading={isLoaded} />
            </>
        )
    }
         return (
            <> 
                
            </>
        )
    }
}