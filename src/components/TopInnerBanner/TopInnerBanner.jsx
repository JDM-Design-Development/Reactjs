import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './TopInnerBanner.css';
const TopInnerBanner = (props) => {
    let Hline = props.Headline;
    let BannerImg = props.Images;
    let Paragraphtext = props.Paragraphtext;
    let Paragraphhideshow = props.Paragraph;
    let Buttontext = props.Buttontxt;
    let Buttonhideshow = props.ButtonHide;
    let Bannerclr = props.BClr;
    let BannerTextclr = props.Txtcolor;
    let Txtalign = props.Txtalign;
    let Overlaybg = props.overlaybg;
    let btnLink = props.btnlinks
    
    let Bheight = props.Bheight
    let bgImgStyle = {
          backgroundImage: 'url(' + BannerImg + ')',
          backgroundColor: Bannerclr,
          height:Bheight
    };
    let bgheadtxtStyle = {
          color:  BannerTextclr
    };
    const biddd = window.location.pathname;
    let partsss = biddd.split("/");
    let clsBannerr = partsss[1];
        return (
            <>
                <section className={`TopInnerBannerWrap ${clsBannerr} ${Overlaybg}`} style={ bgImgStyle }>   
                     <Container className=""> 
                        <Row className={`${Txtalign} align-items-center`}>
                            <Col xs={12}> 
                                <h2 className={`${Txtalign} h2 pb-2`} style={ bgheadtxtStyle }>{Hline}</h2> 
                                <p className={`${Paragraphhideshow} ${Txtalign}`}>{Paragraphtext}</p>
                                <a href={btnLink} variant="primary" size="sm" className={`${Buttonhideshow} ${Txtalign} btn`}>{Buttontext} </a>
                            </Col>
                        </Row>
                     </Container>                        
                </section>
            </>
        )
}
export default TopInnerBanner;