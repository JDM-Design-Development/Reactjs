import React, { useState, useEffect } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import  {useParams, useNavigate} from "react-router-dom";
import axios from 'axios';
import DOMPurify from 'dompurify'; 
function RandomBlogPost (props){   

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false); 

 

useEffect(()=> {   
    const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(`https://test.davis420doctor.com/wp-json/wp/v2/posts?_embed&per_page=100`); 
        setPosts(res.data);
        setLoading(false)
        // hideLoader();
    }
    fetchPosts();  

},[]); 

    const navigate = useNavigate();          
    function blogDataAdd(id,slug) {
        navigate(`/blog/${slug}`);
    }
    
let n=3;
// Shuffle array
const shuffled = posts.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, n);

    

 
    return (   
        <>
    <article className="RandomPosts">  
        <Container> 
            <Row className='py-5'>
                <Col xs={12} lg={12} className='RelatedPostsHeading'> 
                    <div class="RelatedPostsTitle">
                        <h3>Random Posts</h3>
                    </div>
                </Col>
                      {selected.map((Rpost, index) =>         
                <Col xs={12} lg={4} className='RelatedPosts'> 
                
                    <figure className="EntryThumbnail"> 
                        <button onClick={()=>blogDataAdd(Rpost.id, Rpost.slug)} className='ThumbOverlay'> </button>
                        <img src={Rpost._embedded['wp:featuredmedia'][0].source_url} className='img-fluid postImage' alt='' />
                    </figure>  
                    <h4>
                         {<button onClick={()=>blogDataAdd(Rpost.id, Rpost.slug)}   dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(Rpost.title.rendered)} }  />  }
                    </h4>
                    
                    <span className='DateBx'>&nbsp; &nbsp;{<>{new Date(Rpost.date).toLocaleDateString()}</>}  </span>
                </Col>
                      )}
            </Row>
        </Container>  
    </article>
    </>
)}
export default RandomBlogPost;