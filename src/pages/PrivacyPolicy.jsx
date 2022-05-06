import React, { Component } from 'react';
import TopInnerBanner from '../components/TopInnerBanner/TopInnerBanner';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent/PrivacyPolicyContent';


export default class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <TopInnerBanner 
                    Headline="Privacy Policy" 
                    Paragraphtext=""
                    Paragraph="hide"
                    Images="trust-1.jpg" 
                    BClr="#303346" 
                    Txtcolor="#000"
                    Buttontxt=""
                    Buttonsh='hide'
                    Txtalign="text-left"
                    Bheight="auto" />
                <PrivacyPolicyContent />
            </>
        )
    }
}
