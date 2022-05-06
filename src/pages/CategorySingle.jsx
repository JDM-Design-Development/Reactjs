import React, { useState, useEffect } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import  {useParams, useNavigate} from "react-router-dom";
import DOMPurify from 'dompurify'; 
import axios from 'axios';
import  {Link} from "react-router-dom";
import BlogSocialIconFoter from '../components/BlogPost/BlogSocialIconFooter';
function CategorySingle (props){  
    const navigate = useNavigate();
    const params = useParams();
    const [Nposts, setNPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    // const user = {
    //     slug: params.slug  
    // };    
const fetchSingleTag = async () => {
        setLoading(true);
        const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?categories=${params.slug}&_embed&per_page=77`); 
        setNPosts(res.data);
        setLoading(false)      
    }
    useEffect(()=> {
        fetchSingleTag();
    },[]);
    function blogDataAdd(id, slug) {
        navigate(`/blog/${slug}`);
    }  
        
    return ( 
            <>
            <article className="BlogPage cat">
                <Container>
                    <Row className='py-5'>
                        <Col xs={12} lg={12} className='LeftSide'>
                                <div className="BlogPost">
                                    <Row className='px-0 justify-content-center'>
                                        {Nposts.map(singleblgtag =>   
                                        <Col sm={12} className="my-4 col-md-6 col-sm-6" key={singleblgtag.id}>
                                        <article className="LeftBlogBx">
                                            <figure className='EntryThumbnail'> 
                                                    <button onClick={()=>blogDataAdd(singleblgtag.id, singleblgtag.slug)} className='ThumbOverlay'> </button>
                                                <img src={singleblgtag._embedded['wp:featuredmedia'][0].source_url}  className='img-fluid' alt='image' />
                                            </figure>  
                                            <div className='BlogHeaderbX EntryHeader text-center'> 
                                                <h1 className='PostTitle'> {<button onClick={()=>blogDataAdd(singleblgtag.id, singleblgtag.slug)} dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(singleblgtag.title.rendered)} }  />  }</h1>
                                                <div className='MetaAuthorDate'>
                                                    <Link to='/' rel="author">{singleblgtag._embedded['author'][0].name} </Link>
                                                    <span className='DateBx'>&nbsp;/&nbsp;{<>{new Date(singleblgtag.date).toLocaleDateString()}</>}  </span>
                                                </div>
                                            </div>
                                            <div className="EntryContent"> 
                                                    <div dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(singleblgtag.excerpt.rendered.substring(0, 230)+'[...]')} }  /> 
                                                    <div className="ReadMore">
                                                    <button onClick={()=>blogDataAdd(singleblgtag.id, singleblgtag.slug)}>view post</button>     
                                                    </div>
                                            </div>
                                                <BlogSocialIconFoter />
                                        </article>
                                        </Col>
                                        )}
                                    </Row>
                                </div>
                        </Col>  
                    </Row> 
                </Container>
            </article>
        </>
)}

       export default CategorySingle;