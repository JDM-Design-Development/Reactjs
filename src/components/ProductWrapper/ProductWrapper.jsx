import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import './ProductWrapper.css';
import ProductSidebar from '../ProductSidebar/ProductSidebar';
import ProductItems from '../ProductItems/ProductItems';
export default class ProductWrapper extends Component {
    
    render() {
        return (
            <>
                <section className='ProductWrapperWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12} md={3}> 
                                <ProductSidebar /> 
                            </Col>
                            <Col xs={12} md={9}>
                               <ProductItems /> 
                            </Col>
                        </Row>
                        
                        
                    </Container>                        
                </section>
            </>
        )
    }
}
