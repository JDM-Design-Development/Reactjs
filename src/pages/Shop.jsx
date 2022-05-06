import React, { Component } from 'react';
import TopImgBanner from '../components/TopImgBanner/TopImgBanner';
import ProductCat from '../components/ProductCat/ProductCat';
import ProductWrapper from '../components/ProductWrapper/ProductWrapper';
export default class Shop extends Component {
    render() {
        return (
            <>
                <TopImgBanner 
                    Headline="Shop" 
                    Images="" 
                    Content="Home / Products"
                    BClr="#44dca6" 
                    Txtcolor="#025a3b" 
                    overlaybg="overlaybg-X" />
                <ProductCat />
                <ProductWrapper />
            </>
        )
    }
}
