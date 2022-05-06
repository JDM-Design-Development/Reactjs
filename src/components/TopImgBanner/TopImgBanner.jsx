import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './TopImgBanner.css';




const TopImgBanner = (props) => {
    let Hline = props.Headline;
    let BannerImg = props.Images;
    let Bannerclr = props.BClr;
    let BannerContent = props.Paragraphtext;
    let BannerTextclr = props.Txtcolor;
    let Overlaybg = props.overlaybg;
    let bgImgStyle = {
          backgroundImage: 'url(' + BannerImg + ')',
          backgroundColor: Bannerclr
    };
    let bgheadtxtStyle = {
          color:  BannerTextclr
    };
    const bidd = window.location.pathname;
    let partss = bidd.split("/");
    let clsBanner = partss[1];
        return (
            <>
                <section className={`TopImgBannerWrap ${clsBanner} ${Overlaybg}`} style={ bgImgStyle }>   
                     <Container className=""> 
                        <Row className="align-items-center">
                            <Col xs={12} md={6}> 
                                <h2 className="h2 pb-2" style={ bgheadtxtStyle }>{Hline}</h2> 
                                <p style={ bgheadtxtStyle }>{BannerContent}</p>
                            </Col>
                            
                        </Row>
                     </Container>                        
                </section>
            </>
        )
}


export default TopImgBanner;