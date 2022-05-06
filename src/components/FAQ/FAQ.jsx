import React, { Component } from 'react';
import {AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; 
import DOMPurify from 'dompurify'; 
import './FAQ.css';

export default class FAQ extends Component {
    render() {
       
        return (
            <>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {this.props.title}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                             <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.props.desc)} }  />
                        </AccordionItemPanel>
                    </AccordionItem>
            </>
        )
    }
}
