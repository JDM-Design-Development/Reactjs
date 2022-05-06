import React, { useState,useMemo } from 'react';
import {Col} from 'react-bootstrap';
import './BlogPost.css';
import {useNavigate} from "react-router-dom";
import DOMPurify from 'dompurify'; 
import  {Link} from "react-router-dom";
import BlogSocialIconFoter from './BlogSocialIconFooter';
import Search from '../Search/Search';
const BlogPost = ({posts,allPost, loading,cPage, ppPage}) => {
    const [search, setSearch] = useState("");
    const commentsData = useMemo(() =>{
   
    let computedComments = allPost;
    if(search){
        computedComments = computedComments.filter(
        
      carddata =>    
          carddata.title.rendered.toLowerCase().includes(search.toLowerCase()) ||
          carddata.excerpt.rendered.toLowerCase().includes(search.toLowerCase())  
         
        )
    }   
return computedComments;
 },[allPost,search]) 


    const navigate = useNavigate();          
    function blogDataAdd(id,slug) {
        navigate(`/blog/${slug}`);
    }  
    function blogTag(id,slug){
        navigate(`/tag/${id}`);  
    }
 
  

if(loading){  
    return <h2> Loading...</h2>; 
}   




if(search){





return ( 
    <> 
    <Search onSearch={(value)=>{
            setSearch(value);
             // console.log(search) 
            //setCurrentPage(1);
            
        }} />

      

    {commentsData.map((carddata, index) =>     
        <Col key={index} sm={12}  className={`my-4 nopagination ${index === 0 ? 'col-md-12 col-sm-12 fullblog' : 'col-md-6 col-sm-6 '} `}>
            
            <article className="LeftBlogBx">
                <figure className="EntryThumbnail">   
                    <button onClick={()=>blogDataAdd(carddata.id, carddata.slug)} className='ThumbOverlay'> </button>
                    <img src={carddata._embedded['wp:featuredmedia'][0].source_url} className='img-fluid' alt='' />
                </figure>  
                <div className='BlogHeaderbX EntryHeader text-center'>   
                    <div className='Metacategories'> 
                        {carddata._embedded['wp:term'][1].map((tagmy, index) =>  <button key={index} onClick={()=>blogTag(tagmy.id, tagmy.slug)} rel='category tag'> {`${tagmy.name}, `} </button>)}
                    </div>
                    <h1 className='PostTitle'>  
                        {<button onClick={()=>blogDataAdd(carddata.id, carddata.slug)}  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(carddata.title.rendered)} }  />  }
                    </h1>
                    <div className='MetaAuthorDate'>
                        <Link to='/' rel="author">{carddata._embedded['author'][0].name} </Link>
                        <span className='DateBx'>&nbsp;/&nbsp;{<>{new Date(carddata.date).toLocaleDateString()}</>}  </span>
                    </div>
                </div>
                <div className="EntryContent">
                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(carddata.excerpt.rendered.substring(0, 230)+'[...]')} }  /> 
                    <div className="ReadMore">
                        {/*<button onClick={blogDataAdd} >view</button> <a key={carddata.id} onClick={() => this.blogDataAdd(carddata.id , carddata.slug)} className="">view post</a> */}
                        <button onClick={()=>blogDataAdd(carddata.id, carddata.slug)}>view post</button> 
                    </div>
                </div>
                <BlogSocialIconFoter />
            </article>
        </Col>
        )}
    </>
)

}

else{
    return ( 
    <> 
    <Search onSearch={(value)=>{
            setSearch(value);
             // console.log(search) 
            //setCurrentPage(1);
            
        }} />



  

    {posts.map((carddata, index) =>     
        <Col key={index} sm={12}  className={`my-4 ${index === 0 ? 'col-md-12 col-sm-12 fullblog' : 'col-md-6 col-sm-6'} `}>
            
            <article className="LeftBlogBx">
                <figure className="EntryThumbnail">   
                    <button onClick={()=>blogDataAdd(carddata.id, carddata.slug)} className='ThumbOverlay'> </button>
                    <img src={carddata._embedded['wp:featuredmedia'][0].source_url} className='img-fluid' alt='' />
                </figure>  
                <div className='BlogHeaderbX EntryHeader text-center'>   
                    <div className='Metacategories'> 
                        {carddata._embedded['wp:term'][1].map((tagmy, index) =>  <button key={index} onClick={()=>blogTag(tagmy.id, tagmy.slug)} rel='category tag'> {`${tagmy.name}, `} </button>)}
                    </div>
                    <h1 className='PostTitle'>  
                        {<button onClick={()=>blogDataAdd(carddata.id, carddata.slug)}  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(carddata.title.rendered)} }  />  }
                    </h1>
                    <div className='MetaAuthorDate'>
                        <Link to='/' rel="author">{carddata._embedded['author'][0].name} </Link>
                        <span className='DateBx'>&nbsp;/&nbsp;{<>{new Date(carddata.date).toLocaleDateString()}</>}  </span>
                    </div>
                </div>
                <div className="EntryContent">
                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(carddata.excerpt.rendered.substring(0, 230)+'[...]')} }  /> 
                    <div className="ReadMore">
                        {/*<button onClick={blogDataAdd} >view</button> <a key={carddata.id} onClick={() => this.blogDataAdd(carddata.id , carddata.slug)} className="">view post</a> */}
                        <button onClick={()=>blogDataAdd(carddata.id, carddata.slug)}>view post</button> 
                    </div>
                </div>
                <BlogSocialIconFoter />
            </article>
        </Col>
        )}
    </>
)


}



}
 



export default BlogPost;