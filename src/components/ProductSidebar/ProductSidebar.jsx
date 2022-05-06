import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import './ProductSidebar.css';
export default class ProductSidebar extends Component {
    
    render() {
        return (
            <>
                <section className='ProductSidebarWrap'> 
                    <Container fluid className='px-3 px-md-5'> 
                        <Row className='align-items-center justify-content-center'>
                            <Col xs={12}> 
                                <h2 className="h2 text-center text-uppercase pb-2">Product Sidebar</h2> 
                            </Col>
                        </Row>
                        
                        
                    </Container>                        
                </section>
            </>
        )
    }
}
