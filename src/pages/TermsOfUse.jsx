import React, { Component } from 'react';
import TopInnerBanner from '../components/TopInnerBanner/TopInnerBanner';
import TermsOfUseContent from '../components/TermsOfUseContent/TermsOfUseContent';


export default class TermsOfUse extends Component {
    render() {
        return (
            <>
                <TopInnerBanner 
                    Headline="Terms Of Use" 
                    Paragraphtext=""
                    Paragraph="hide"
                    Images="trust-1.jpg" 
                    BClr="#303346" 
                    Txtcolor="#000"
                    Buttontxt=""
                    Buttonsh='hide'
                    Txtalign="text-left"
                    Bheight="auto" />
                <TermsOfUseContent />
            </>
        )
    }
}
