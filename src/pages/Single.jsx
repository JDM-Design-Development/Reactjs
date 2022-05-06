import React, { useState, useEffect } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import  {useParams, useNavigate} from "react-router-dom";
import DOMPurify from 'dompurify'; 
import axios from 'axios';
import  {Link} from "react-router-dom";
import BlogSocialIconFoter from '../components/BlogPost/BlogSocialIconFooter';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import RandomBlogPost from '../components/BlogPost/RandomBlogPost';

function Single (props){  
    
    const navigate = useNavigate();
    const params = useParams();
    const [posts, setPosts] = useState([]);
    const [Nposts, setNPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [Sposts, setSPosts] = useState([]);
    const [SCat, setSCat] = useState([]);
    const opath = window.location.pathname;
    let parts = opath.split("/");
    let sulgurl = (parts[2])
   // console.log(sulgurl)
       const user = {
    slug: params.slug  
    }; 
    let n=4;
// Shuffle array
const shuffled = posts.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, n);



const fetchSinglePost = async (id,slugg) => {
        if(slugg != ''){
            const paramss = {slug:slugg};
            //alert(paramss.slug)
            setLoading(true);
            const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?_embed&slug=${paramss.slug}`); 
            setNPosts(res.data);
            setLoading(false) 
            //alert(params.slug)
            window.scrollTo(0, 0)
        }else{
            setLoading(true);
            const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`); 
            setNPosts(res.data);
            setLoading(false) 
            window.scrollTo(0, 0)
        }
    }
    const fetchCat = async () => {
        setLoading(true);
        const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/categories`); 
        setSCat(res.data);
        setLoading(false)
    }
    const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?_embed&per_page=5`); 
        setSPosts(res.data);
        setLoading(false)
    }
    const asd = async ()=> {
        setLoading(true);
            const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`); 
            setNPosts(res.data);
            setLoading(false) 
    }
  
     const fetchRandomPosts = async () => {
        setLoading(true);
        const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?_embed&per_page=100`); 
        setPosts(res.data);
        setLoading(false)
        // hideLoader();
    }
 useEffect(()=> {
    asd();
    fetchPosts(); 
    fetchCat(); 
    fetchRandomPosts(); 
    

},[]);

function recentpost(id, slug){
    navigate(`/blog/${slug}`);
    
    }
function blogCat(id, slug){
    navigate(`/blog/category/${slug}`); 
    }
function blogTag(id, slug){
    navigate(`/tag/${id}`); 
    }
 function blogCat(id, slug){
    navigate(`/category/${id}`);  
    }
function blogDataAdd(id,slug) {
    navigate(`/blog/${slug}`);
}   
        return ( 
            <>
           
            {Nposts.map(singleblg =>  
            <article className="BlogPage single" key={singleblg.id}> 
               <Container> 
                        <Row className='py-5'>
                           
                            <Col xs={12} lg={9} className='LeftSide'> 
                                <div className="BlogPost">
                                    <Row className='px-0'>
                                  <Col sm={12}  className="my-4 col-md-12 col-sm-12">
                                    <article className="LeftBlogBx">
                                        <figure className='EntryThumbnail'> 
                                            <button href="#" className='ThumbOverlay'> </button>
                                             <img src={singleblg._embedded['wp:featuredmedia'][0].source_url} className='img-fluid' alt='' />
                                        </figure>
                                        
                                        <div className='BlogHeaderbX EntryHeader text-center'> 
                                             <div className='Metacategories'>
                                                 {singleblg._embedded['wp:term'][1].map(tagmy =>  
                                        <>
                                        {/* <a href={`tag/${tagmy.slug}`} rel='category tag'> {`${tagmy.name}, `} </a>  */}
                                        <button onClick={()=>blogTag(tagmy.id, tagmy.slug)} rel='category tag'> {`${tagmy.name}, `} </button>
                                        </>
                                        
                                        )}
                                            </div>
                                            <h1 className='PostTitle'> 
                                                 {<button  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(singleblg.title.rendered)} }  />  }
                                            </h1>
                                             <div className='MetaAuthorDate'>
                                                <Link to='/' rel="author">{singleblg._embedded['author'][0].name} </Link>
                                                <span className='DateBx'>&nbsp;/&nbsp;{<>{new Date(singleblg.date).toLocaleDateString()}</>}  </span>
                                            </div>
                                        </div>
                                        <div>
                                             <TableOfContents />
                                        </div>
                                        <div className="EntryContent">
                                             <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(singleblg.content.rendered)} }  /> 
                                        </div>
                                        <BlogSocialIconFoter />
                                    </article>
                                </Col>
                                <Col xs={12} lg={12} className='nxtprvbtn'> 
                                    <button onClick={() => {
                                        navigate(-1)
                                    }}> Go Back </button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} lg={3} className='RightSide'> 
                        <div className="BlogSidebar">
                          


                            <div className="main-sidebar">
               
                    <div id="categorybx">
                        <div className="title">
                            <h3 className='h3'>Recent Post</h3>
                        </div>
                        <ul>
                            {Sposts.map((Rpost, index) =>  
                            <li key={index}>
                                <button onClick={()=>fetchSinglePost(Rpost.id, Rpost.slug)}> <span onClick={()=>recentpost(Rpost.id, Rpost.slug)}  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(Rpost.title.rendered)} }  />   </button>  
                            </li>
                             )}
                        </ul>
                    </div>
                    <div id="categorybx">
                        <div className="title">
                            <h3 className='h3'>CATEGORIES</h3>
                        </div>
                        <ul> 
                           
                             {SCat.map(Catmy =>  
                                <li> <button onClick={()=>blogCat(Catmy.id, Catmy.slug)} rel='category' className="cat-item"> {Catmy.name} <span>({Catmy.count})</span> </button> </li>
                            )}
                        </ul>
                    </div>
                    <div id="bannerad" className="mb-5"> 
                        <button> <img alt="banner ad" title="" src={`${process.env.PUBLIC_URL}/images/ad.png`} /></button> 
                        
                    </div>
                    <div id="tagbx">
                        <div className="title">
                            <h3 className='h3'>TAG CLOUD</h3>
                        </div>
                        <div className="tagcloud">
                            <div className="tags"> 


                                    {Sposts.map(blogtag =>  
                                        <>
                                         {blogtag._embedded['wp:term'][1].map(tagmy =>  
                                         <>
                                        
                                          <button onClick={()=>blogTag(tagmy.id, tagmy.slug)} rel='category tag'> {tagmy.name} </button> 
                                         </>
                                          )}
                                        </>
                                    )}
                            
                            </div>
                        </div>
                    </div>
                </div>



                        </div> 
                    </Col>
                </Row>
            </Container>  
                    
            </article>
            )}

        <article className="RandomPosts">  
        <Container> 
            <Row className='py-5'>
                <Col xs={12} lg={12} className='RelatedPostsHeading'> 
                    <div class="RelatedPostsTitle">
                        <h3>Random Posts</h3>
                    </div>
                </Col>
                      {selected.map((Rpost, index) =>         
                <Col xs={12} md={6} lg={3} className='RelatedPosts'> 
                
                    <figure className="EntryThumbnail"> 
                        <button onClick={()=>fetchSinglePost(Rpost.id, Rpost.slug)} className='ThumbOverlay'> </button>
                        <img span onClick={()=>recentpost(Rpost.id, Rpost.slug)} src={Rpost._embedded['wp:featuredmedia'][0].source_url} className='img-fluid postImage' alt='' />
                    </figure>  
                   {/* <span className='DateBx'>{<>{new Date(Rpost.date).toLocaleDateString()}</>}  </span> */}
                    <h4>
                         {<button onClick={()=>fetchSinglePost(Rpost.id, Rpost.slug)}>  <span onClick={()=>recentpost(Rpost.id, Rpost.slug)}  dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(Rpost.title.rendered)} }  /> </button> }
                    </h4>
                    
                    
                </Col>
                      )}
            </Row>
        </Container>  
    </article>
    </>
)
}

       export default Single;