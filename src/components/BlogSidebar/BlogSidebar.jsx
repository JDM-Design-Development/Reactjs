import React, { useState,useMemo,useEffect } from 'react'
import './BlogSidebar.css';
import axios from 'axios';
import DOMPurify from 'dompurify'; 
import {  useNavigate  } from "react-router-dom";
import Search from '../Search/Search';
export default function BlogSidebar (){ 
    const [Nposts, setNPosts] = useState([]);
    const [NCat, setNCat] = useState([]);
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");


useEffect(()=> {

    const AllPosts = async () => {
       // setLoading(true);
        const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?_embed&per_page=77`); 
        setPosts(res.data);

        // hideLoader();
    }
    AllPosts(); 


    const fetchPosts = async () => {
        const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?_embed&per_page=5`); 
        setNPosts(res.data);
    }
    fetchPosts(); 
    const fetchCat = async () => {
        const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/categories`); 
        setNCat(res.data);
    }
    fetchCat(); 
    // const fetchSearchTerm  = async () => {
    //     const apiUrl = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/`); 
    //     const params = ''
    // }
    //fetchSearchTerm(); 
},[]);
const navigate = useNavigate();
function recentpost(id,slug){
    navigate(`/blog/${slug}`); 
}
// function searchQuery(key){
// }
// function blogCat(id){
//     navigate(`category/${id}`);  
// }
function blogTag(id,slug){
    navigate(`/tag/${id}`);  
}
function blogCat(id, slug){
    navigate(`/category/${id}`);  
// console.log(res.data); 
} 

 const commentsData = useMemo(() =>{
    let computedComments = posts;
    if(search){
        computedComments = computedComments.filter(
        
      mypost =>    
          mypost.title.rendered.toLowerCase().includes(search.toLowerCase())  
         
        )
    }   
return computedComments;
 },[posts,search])


return (
    <>
    <div className="main-sidebar">
        {/* <Search onSearch={(value)=>{
            setSearch(value);
              console.log(search)
            //setCurrentPage(1);
        }} /> */} 
         <Search /> 
        <div id="categorybx">
            <div className="title">
                <h3 className='h3'>Recent Post</h3>
            </div>
            <ul>
            {Nposts.map((Rpost, index) =>  
                <li key={index}><button onClick={()=>recentpost(Rpost.id, Rpost.slug)}> <span  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(Rpost.title.rendered)} }  />   </button></li>
            )}

{/* {commentsData.map((mypost, index) =>  
                <>
                <h1 className='PostTitle'>  
                        {<button   dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(mypost.title.rendered)} }  />  }
                    </h1>
                 </>
)} */}
            </ul>
        </div>
        <div id="categorybx">
            <div className="title">
                <h3 className='h3'>CATEGORIES</h3>
            </div>
            <ul> 
            {NCat.map((Catmy , index) => 
                <li key={index}> <button onClick={()=>blogCat(Catmy.id, Catmy.slug)} rel='category' className="cat-item"> {Catmy.name} <span>({Catmy.count})</span> </button> </li>
            )}
            </ul>
        </div>
        <div id="bannerad" className="mb-5"> 
            <button href="#"> <img alt="banner ad" title="" src={`${process.env.PUBLIC_URL}/images/ad.png`} /></button> 
        </div>
        <div id="tagbx">
            <div className="title">
                <h3 className='h3'>TAG CLOUD</h3>
            </div>
            <div className="tagcloud">
                <div className="tags"> 
                {Nposts.map((blogtag,index )=> 
                    <div key={index}>
                        {blogtag._embedded['wp:term'][1].map((tagmy , index) =>  <button key={index} onClick={()=>blogTag(tagmy.id, tagmy.slug)} rel='category tag'> {tagmy.name} </button>)}
                    </div>
                )}          
                </div>
            </div>
        </div> 
    </div>
            </>
        )
    
}

