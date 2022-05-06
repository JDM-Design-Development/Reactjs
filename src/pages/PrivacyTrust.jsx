import React, { Component } from 'react';
import TopInnerBanner from '../components/TopInnerBanner/TopInnerBanner';
import IntroOfCertification from '../components/IntroOfCertification/IntroOfCertification';
import ReviewsVariousPlatforms from '../components/ReviewsVariousPlatforms/ReviewsVariousPlatforms';

export default class PrivacyTrust extends Component {
    render() {
        return (
            <>
                <TopInnerBanner 
                    Headline="Privacy Trust" 
                    Paragraphtext=""
                    Paragraph="hide"
                    Images="trust-1.jpg" 
                    BClr="#303346" 
                    Txtcolor="#000"
                    Buttontxt=""
                    Buttonsh='hide'
                    Txtalign="text-left"
                    Bheight="auto" />
                <IntroOfCertification />
                <ReviewsVariousPlatforms />
            </>
        )
    }
}
