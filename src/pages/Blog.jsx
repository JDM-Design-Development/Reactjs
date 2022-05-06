import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from '../components/BlogPost/BlogPost'
import Pagination from '../components/Pagination/PaginationComp'
import {Row, Col, Container} from 'react-bootstrap';
import BlogSidebar from '../components/BlogSidebar/BlogSidebar';
import './Blog.css';
const Blog = () => { 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); 
    const [postsPerPage, setPostPerPage] = useState(9);
    //  const [postsPerPagee, setPostPerPagee] = useState(77);
    const [commentsDataa, setcommentsData] = useState('');
    //  const [search, setSearch] = useState("");
  //  const [loader, showLoader, hideLoader] = useFullPageLoader();

  
//  const commentsData = useMemo(() =>{
//     let computedComments = posts;
//     if(search){
//         computedComments = computedComments.filter(
        
//       mypost =>    
//           mypost.title.rendered.toLowerCase().includes(search.toLowerCase())  
         
//         )
//     }   
// return computedComments;
//  },[posts,search])

 
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

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
const Paginate =(pageNumber) => setCurrentPage(pageNumber);
return (
            <>
            <div className='BlogHeader'>
                <Container>
                    <Col xs={12}>
                        
                    </Col>
                </Container>
            </div>
            <div className='TopHeading'>
                <Container>
                    <Col xs={12} className="PageName">
                        <h2 className='h2'>Most Popular ESA Posts</h2>
                    </Col>
                </Container> 
            </div> 
            <article className="BlogPage">    
                <Container>  
                    <Row className='py-5'>
                        <Col xs={12} lg={9} className='LeftSide'> 
                            <div className="BlogPost">
                                <Row className='px-0'>  
                             
                                    <BlogPost posts={currentPosts} allPost={posts} cPage={currentPage} loading={loading} ppPage={postsPerPage} commentsDat={commentsDataa} />    
                                    <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={Paginate} currentPage={currentPage} onPageChange={page => setCurrentPage(page)} />                                 
                                </Row>
                            </div> 
                            </Col>
                            <Col xs={12} lg={3} className='RightSide'> 
                                <div className="BlogSidebar">
                                    
                                    <BlogSidebar />   
                                </div> 
                            </Col>
                        </Row>
                    </Container>  
                </article>
                {/* <loader /> */}
            </>
        )}
export default Blog;