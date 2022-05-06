import React, { useState, useEffect } from 'react';
// import { BrowserRouter,  Routes, Route } from 'react-router-dom';
// import  {useParams, Navigate, useNavigate, useLocation} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Container, Row, Col, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import {isWebpSupported} from 'react-image-webp/dist/utils';
import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClock, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from 'classnames'
import './Navigation.css';
import myapi from '../../api/myapi';
function Navigation() { 
    useEffect(() => { 
        getyDataa();
        getHeadData();
       
       
    }, [])

    // const [mymenu01, setmymenu01] = useState();
    const [mymenu02, setmymenu02] = useState();
    const [mymenu03, setmymenu03] = useState();
    const [mymenu04, setmymenu04] = useState();
    const [mymenu05, setmymenu05] = useState();
    const [mymenu06, setmymenu06] = useState();
    const [mymenu07, setmymenu07] = useState();
    const [mymenu08, setmymenu08] = useState();
    const [mymenu09, setmymenu09] = useState(); 
    const [mymenu010, setmymenu010] = useState();
    const [mymenu011, setmymenu011] = useState();
    const [mymenu012, setmymenu012] = useState();
    const [mymenu013, setmymenu013] = useState();
    const [mymenu014, setmymenu014] = useState();  
    const [mymenu015, setmymenu015] = useState(); 
    const [mymenu016, setmymenu016] = useState(); 

    const [mytitle00, setmytitle00] = useState(); 
    const [mytitle01, setmytitle01] = useState();
    const [mytitle02, setmytitle02] = useState();
    const [mytitle03, setmytitle03] = useState();
    const [mytitle04, setmytitle04] = useState();
    const [mytitle05, setmytitle05] = useState();
    const [mytitle06, setmytitle06] = useState();
    const [mytitle07, setmytitle07] = useState();
    const [mytitle08, setmytitle08] = useState();
    const [mytitle09, setmytitle09] = useState();
    const [mytitle010, setmytitle010] = useState();
    const [mytitle011, setmytitle011] = useState();
    const [mytitle012, setmytitle012] = useState();
    const [mytitle013, setmytitle013] = useState();
    const [mytitle014, setmytitle014] = useState();
    const [mytitle015, setmytitle015] = useState();
    const [mytitle016, setmytitle016] = useState();


    // const [loading, setLoading] = useState(false);
    const [flag, setflag] = useState(true); 


    const [myHeader01, setmyHeader01] = useState([]);
    const [myHeader02, setmyHeader02] = useState([]);
    const [myHeader03, setmyHeader03] = useState([]);
    const [myHeader04, setmyHeader04] = useState([]);
    const [myHeader05, setmyHeader05] = useState([]);
    const [myHeader06, setmyHeader06] = useState([]);
    const [myHeader07, setmyHeader07] = useState([]);

  


function doSomethingg(){
    setflag({flag: !flag})     
}
// function  disableul(e){
//     e.preventDefault(); 
// }
var classes = classNames( {
      'hide': flag === true,
      'nothide':flag===false
    })
 function handleClick(e) {
    e.preventDefault();
    //console.log(e.target.className);
  }
// if(isMobile) 



  const getyDataa = async () => { 
      try {
          const res = await myapi.get("/menu");
        //   setmymenu01(res.data[0].url.split('/')[3])   
          setmymenu02(res.data[1].url.split('/')[3])  
          setmymenu03(res.data[2].url.split('/')[3])  
          setmymenu04(res.data[3].url.split('/')[3])    
          setmymenu05(res.data[5].url.split('/')[3])      
          setmymenu06(res.data[6].url.split('/')[3])  
          setmymenu07(res.data[7].url.split('/')[3])   
          setmymenu08(res.data[8].url.split('/')[3]) 
          setmymenu09(res.data[9].url.split('/')[3]);  
          setmymenu010(res.data[10].url.split('/')[3]);   
          setmymenu011(res.data[11].url.split('/')[3]);  
          setmymenu012(res.data[12].url.split('/')[3]);    
          setmymenu013(res.data[13].url.split('/')[3]);    
          setmymenu014(res.data[14].url.split('/')[3]);  
          setmymenu015(res.data[15].url.split('/')[3]);  
          setmymenu016(res.data[16].url.split('/')[3]);      
        //   setLoading(true);    
           
        setmytitle00(res.data[0].title);  
        setmytitle01(res.data[1].title);
        setmytitle02(res.data[2].title);
        setmytitle03(res.data[3].title);
        setmytitle04(res.data[4].title);
        setmytitle05(res.data[5].title);
        setmytitle06(res.data[6].title);
        setmytitle07(res.data[7].title);
        setmytitle08(res.data[8].title);
        setmytitle09(res.data[9].title);
        setmytitle010(res.data[10].title);
        setmytitle011(res.data[11].title);
        setmytitle012(res.data[12].title);
        setmytitle013(res.data[13].title);
        setmytitle014(res.data[14].title);
        setmytitle015(res.data[15].title);
        setmytitle016(res.data[16].title);
        
        
         
           
        
      } catch (err) { 
          alert(err.message);    
      }

  }; 
  
  const getHeadData = async () => { 
      try {
        const res = await myapi.get("/topheader");
        setmyHeader01(res.data[0].acf.esa_location); 
        setmyHeader02(res.data[0].acf.esa_phone_number_link); 
        setmyHeader03(res.data[0].acf.esa_phone_numer); 
        setmyHeader04(res.data[0].acf.esa_time); 
        setmyHeader05(res.data[0].acf.pre_qualify_now_button_link); 
        setmyHeader06(res.data[0].acf.pre_qualify_now_button_text); 
        setmyHeader07(res.data[0].acf.esa_top_logo); 

         
  
    } catch (err) { 
          alert(err.message);  
      }

  }; 

return ( 
        <>
         
    {isMobile ? (
        <> </>   
    ) : (
        <header className='headerFixed'> 
               
        
            <Container>
                
                    
                <Row>
                    
                   
                    <Col xs={12} md={6}>
                        <Row className='HeaderLeftTxt'>
                            <Col xs={12} md={8}> 
                            {
                            myHeader01  
                            ? <Button className="link"> <FontAwesomeIcon icon={faLocationArrow} /> &nbsp; {myHeader01} </Button> 
                            : <Skeleton count={1} width={340} height={26}  />
                            }
                            </Col>
                            <Col xs={12} md={4}> 
                            {
                            myHeader03  
                            ? <Button className="link" href={`tel:${myHeader02}`}><FontAwesomeIcon icon={faMobileAlt} /> &nbsp; {myHeader03}  </Button> 
                            : <Skeleton count={1} width={180} height={26}  />
                            }
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className='HeaderLeftTxt hright'>
                            <Col xs={12} md={8} className='px-0'> 
                            {
                            myHeader04  
                            ?<span className="RightTopLink"> <FontAwesomeIcon icon={faClock} />  {myHeader04} </span>
                            : <Skeleton count={1} width={180} height={26}  />
                            }
                               
                            </Col>
                            <Col xs={12} md={4}>  
                            {
                            myHeader04 
                            ? <Button href="#" className="bbbRating">  
                                    {
                                        isWebpSupported()
                                    ? <img src='images/bbb_a_rating.webp' width="162" height="61" className="d-inline-block" alt="BBB logo" />
                                    : <img src='images/bbb_a_rating.png' width="162" height="61" className="d-inline-block" alt="BBB logo" />
                                    }
                                </Button> 
                            : <Skeleton count={1} width={142} height={53}  />
                            }

                                
                            </Col>
                        </Row>
                        
                        
                    </Col>


                </Row>
           
            </Container>
        </header> 
  )} 

        <Navbar collapseOnSelect expand="lg"  variant="light" sticky="top" id="myHeader">
            <Container>
                {
                    
                myHeader07 !== ' ' 
                ? <Navbar.Brand as={Link} to={"/"}>
                {
                    isWebpSupported() 
                ? <img src={myHeader07} width="140" height="60" className="d-inline-block" alt="logo" />
                : <img src={myHeader07} width="140" height="60" className="d-inline-block" alt="logo" />
                }
                 </Navbar.Brand>    
                : <Navbar.Brand as={Link} to={"/"}><Skeleton count={1} width={140} height={60}  /></Navbar.Brand>
                }

            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick} />
            
            {
            mymenu02
            ? <Navbar.Collapse id="responsive-navbar-nav">     
                <Nav className="ms-auto">
                <Nav.Item><NavLink  className='nav-link' to={"/"} >{mytitle00}</NavLink></Nav.Item>
                <Nav.Item><NavLink className='nav-link' to={`/${mymenu02}`} >{mytitle01}</NavLink></Nav.Item>
                <Nav.Item><NavLink className='nav-link' to={`/${mymenu03}`} >{mytitle02}</NavLink></Nav.Item> 
                <Nav.Item><NavLink className='nav-link' to={`/${mymenu04}`} >{mytitle03}</NavLink></Nav.Item>
                <Nav.Item  className= { classes}  onClick={doSomethingg}>
                    <NavDropdown title={mytitle04} id="basic-nav-dropdown"  renderMenuOnMount={true}>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu05}`}>{mytitle05}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu06}`}>{mytitle06}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu07}`}>{mytitle07}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu08}`}>{mytitle08}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu09}`}>{mytitle09}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu010}`}>{mytitle010}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu011}`}>{mytitle011}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu012}`}>{mytitle012}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu013}`}>{mytitle013}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu014}`}>{mytitle014}</NavLink></Nav.Item>
                        <Nav.Item><NavLink className='dropdown-item' to={`/${mymenu015}`}>{mytitle015}</NavLink></Nav.Item>
                    </NavDropdown>  
                </Nav.Item>
                <Nav.Item> <NavLink className='nav-link' to={`/${mymenu016}`}>{mytitle016}</NavLink></Nav.Item>
                <Nav.Item> <NavLink className='nav-link' to={"/shop"}>Shop</NavLink></Nav.Item>
                </Nav>
                <Nav className="ms-3">  
                <a href={`${myHeader05}`} target="_blank" rel="noreferrer" variant="danger" className="applyonline btn btn-danger">{myHeader06}</a>
                 
                </Nav> 
            </Navbar.Collapse>  
            : <Skeleton count={6} width={100} height={26}  />
            }
              {
                myHeader05 
                ? ' '
                : <Skeleton count={1} width={140} height={46}  />
                }

            </Container> 
                
            </Navbar>
        </>
    );

 



}

export default Navigation;