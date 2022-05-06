import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import './HappyPetOwners.css';
export default class HappyPetOwners extends Component {
    render() { 
        if(this.props.myloading){
        return (
            <>
                <section className='HappyPetOwnersWrap'> 
                     <Container className=""> 
                        <Row>
                            <Col xs={12}> 
                                <h3 className="h2 text-uppercase pb-2">{this.props.HappyPetOwnersdata.happypetownerheading}</h3> 
                                <p>{this.props.HappyPetOwnersdata.happypetownerparagraph}</p>
                            </Col>
                            <Col xs={12}> 
                                <div className='map_users'>
                                        {
                                            isWebpSupported()
                                            ? <img src={this.props.HappyPetOwnersdata.happypetownerwebp} alt="emotional support animal letter reddit" className='fluid' width="964" height="598" />
                                            : <img src={this.props.HappyPetOwnersdata.happypetownerjpg} alt="emotional support animal letter reddit" className='fluid' width="964" height="598" />
                                        }
                                </div>
                            </Col>
                        </Row>
                     </Container>                        
                </section> 
            </>
        )
        }
         return (
            <> 
      
            </>
        )
    }
}