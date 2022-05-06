import React, { useState,useMemo , useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css';
const PaginationComp = ({totalPosts, postPerPage ,currentPage, onPageChange,  paginate}) => {
const [totalPages, setTotalPages] = useState(0)
    useEffect(()=>{ 
       if(totalPosts>0 && postPerPage > 0) 
       setTotalPages(Math.ceil(totalPosts / postPerPage));
   }, [ totalPosts, postPerPage]);
   const paginationItems = useMemo(()=> {
       const pages= [];
       for(let i=1; i <= totalPages; i++){
         pages.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => onPageChange(i)}> 
            {i}
        </Pagination.Item>);  
       }
       return pages;
   }, [totalPages, currentPage])
if(totalPages === 0) return null;
   return (
        <> 
            <Pagination>
                <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {paginationItems}
                <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />     
            </Pagination>
        </>
    ) 
}
export default PaginationComp;