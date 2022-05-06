import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductCat.css';
export default class ProductCat extends Component {
    
    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
            };
        return (
            <>
                <section className='ProductCatWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">Product Category</h2> 
                            </Col>
                        </Row>
                        
                        <Row className='align-items-center justify-content-center'>
                            <Carousel swipeable={true}
                                        draggable={false}
                                        showDots={false}
                                        responsive={responsive}
                                        ssr={true} // means to render carousel on server-side.
                                        infinite={true}
                                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                        autoPlaySpeed={6000}
                                        keyBoardControl={true}
                                        transitionDuration={500}
                                        containerclassName="carousel-container"
                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                        deviceType={this.props.deviceType}
                                        dotListclassName="custom-dot-list-style"
                                        itemclassName="carousel-item-padding-40-px">
                            <Col className='Product_Cat_Items'> 
                                <Link to={Link}> 
                                    {
                                        isWebpSupported()
                                        ? <img src='images/shop/carriers.webp' alt="carriers" width="300" height="250" />
                                        : <img src='images/shop/carriers.jpg' alt="carriers" width="300" height="250" />
                                    }
                                    <h3 className="category__title"> Carriers <mark className="count">(5)</mark> </h3>
                                </Link>
                            </Col>
                            <Col className='Product_Cat_Items'> 
                                <Link to={Link}> 
                                    {
                                        isWebpSupported()
                                        ? <img src='images/shop/cbd-pet-health.webp' alt="CBD Pet Health" width="300" height="250" />
                                        : <img src='images/shop/cbd-pet-health.jpg' alt="CBD Pet Health" width="300" height="250" />
                                    }
                                    <h3 className="category__title"> CBD Pet Health <mark className="count">(6)</mark> </h3>
                                </Link>
                            </Col>
                             <Col className='Product_Cat_Items'> 
                                <Link to={Link}> 
                                    {
                                        isWebpSupported()
                                        ? <img src='images/shop/esa-letter.webp' alt="esa-letter" width="300" height="250" />
                                        : <img src='images/shop/esa-letter.jpg' alt="esa-letter" width="300" height="250" />
                                    }
                                    <h3 className="category__title"> ESA Letter <mark className="count">(3)</mark> </h3>
                                </Link>
                            </Col>
                             <Col className='Product_Cat_Items'> 
                                <Link to={Link}> 
                                    {
                                        isWebpSupported()
                                        ? <img src='images/shop/harness.webp' alt="harness" width="300" height="250" />
                                        : <img src='images/shop/harness.jpg' alt="harness" width="300" height="250" />
                                    }
                                    <h3 className="category__title"> Harness <mark className="count">(5)</mark> </h3>
                                </Link>
                            </Col>
                             <Col className='Product_Cat_Items'> 
                                <Link to={Link}> 
                                    {
                                        isWebpSupported()
                                        ? <img src='images/shop/pet-supplies.webp' alt="pet-supplies" width="300" height="250" />
                                        : <img src='images/shop/pet-supplies.jpg' alt="pet-supplies" width="300" height="250" />
                                    }
                                    <h3 className="category__title"> Pet Supplies <mark className="count">(6)</mark> </h3>
                                </Link>
                            </Col>
                             <Col className='Product_Cat_Items'> 
                                <Link to={Link}> 
                                    {
                                        isWebpSupported()
                                        ? <img src='images/shop/tags.webp' alt="tags" width="300" height="250" />
                                        : <img src='images/shop/tags.jpg' alt="tags" width="300" height="250" />
                                    }
                                    <h3 className="category__title"> Tags <mark className="count">(3)</mark> </h3>
                                </Link>
                            </Col>
                             <Col className='Product_Cat_Items'> 
                                <Link to={Link}> 
                                    {
                                        isWebpSupported()
                                        ? <img src='images/shop/vest.webp' alt="vest" width="300" height="250" />
                                        : <img src='images/shop/vest.jpg' alt="vest" width="300" height="250" />
                                    }
                                    <h3 className="category__title"> Vest <mark className="count">(5)</mark> </h3>
                                </Link>
                            </Col>

                            </Carousel>
                        </Row>
                    </Container>                        
                </section>
            </>
        )
    }
}
