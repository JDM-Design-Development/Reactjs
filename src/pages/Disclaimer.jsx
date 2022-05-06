import React, { Component } from 'react';
import DisclaimerContent from '../components/DisclaimerContent/DisclaimerContent';
import TopInnerBanner from '../components/TopInnerBanner/TopInnerBanner';



export default class Disclaimer extends Component {
    render() {
        return (
            <>
                <TopInnerBanner 
                    Headline="Disclaimer" 
                    Paragraphtext=""
                    Paragraph="hide"
                    Images="trust-1.jpg" 
                    BClr="#303346" 
                    Txtcolor="#000"
                    Buttontxt=""
                    Buttonsh='hide'
                    Txtalign="text-left"
                    Bheight="auto" />
                <DisclaimerContent />
            </>
        )
    }
}
