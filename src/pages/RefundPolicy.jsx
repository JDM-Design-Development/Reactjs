import React, { Component } from 'react';
import RefundPolicyContent from '../components/RefundPolicyContent/RefundPolicyContent';
import TopInnerBanner from '../components/TopInnerBanner/TopInnerBanner';



export default class RefundPolicy extends Component {
    render() {
        return (
            <>
                <TopInnerBanner 
                    Headline="Refund Policy" 
                    Paragraphtext=""
                    Paragraph="hide"
                    Images="trust-1.jpg" 
                    BClr="#303346" 
                    Txtcolor="#000"
                    Buttontxt=""
                    Buttonsh='hide'
                    Txtalign="text-left"
                    Bheight="auto" />
                <RefundPolicyContent />
            </>
        )
    }
}
