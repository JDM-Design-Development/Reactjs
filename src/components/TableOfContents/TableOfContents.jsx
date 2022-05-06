
import React, { useState,useEffect } from 'react'

const TableOfContents = () => {
const [nestedHeadings, setNestedHeadings] = useState([]);
 
useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3,h4,h5,h6")
    );

    setNestedHeadings(headingElements)
    
    console.log(nestedHeadings) 
  }, []);


  return (
    <nav className='TableOfContents' aria-label="Table of contents">
      <h5> Table Of Content</h5>
      <ul className='ToC'>
 {nestedHeadings.map((headng, index) =>   
    <>
    {/* {console.log(nestedHeadings)}  */}
    
    {
      headng.id ? (
        <li className='ToClist'><a href={`#${headng.id}`}> {headng.innerText} </a></li>
      ) : (
        ''
      )  
    }
    </>
 )}
 </ul>
    </nav>
  );
};



export default TableOfContents;