import React, { Component } from 'react';
import axios from 'axios';
import './BlogPost.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faYoutube, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
export default class BlogSocialIconFoter extends Component { 
     constructor(props) {
        super(props)
        this.state = {
            ftrsocial:[], 
            }
        }
        state = { isStart: 0 };

    
    signal = axios.CancelToken.source();
     
        _isMounted = false
        componentDidMount(){ 
            this.onLoadUser();
        }
        componentWillUnmount() {
            this.signal.cancel('mBK');
        }
        componentDidMount() {
            fetch('https://test.davis420doctor.com/wp-json/wp/v2/footer')
            .then(response => response.json())
            .then(ftrsocial => this.setState({ ftrsocial }))
        }

    render(){
         const {ftrsocial} = this.state  
    return ( 
    <> 
    <div className="EntryFooter">
        <div className="MetaShareWrap">
            <div className="MetaShare">
                 {ftrsocial.map((ftrsocialicon,index) => ( 
                     <div key={index}>
                <a className="FacebookShare" target="_blank" rel="noreferrer"  href={ftrsocialicon.acf.footersocialicons[0].SocialLinks}> 
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="share-info">Facebook</span>
                </a>
                <a className="TwitterShare" target="_blank" rel="noreferrer" href={ftrsocialicon.acf.footersocialicons[1].SocialLinks}>
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="share-info">Twitter</span>
                </a>
                <a className="YouTubeShare" target="_blank" rel="noreferrer" href={ftrsocialicon.acf.footersocialicons[2].SocialLinks}>
                    <FontAwesomeIcon icon={faYoutube} />
                    <span className="share-info">Youtube</span>
                </a>										
                <a className="InstagramShare" target="_blank" rel="noreferrer" href={ftrsocialicon.acf.footersocialicons[3].SocialLinks}>
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="share-info">Instagram</span>
                </a> 
                <a className="PinterestShare" target="_blank" rel="noreferrer" href={ftrsocialicon.acf.footersocialicons[4].SocialLinks}>
                    <FontAwesomeIcon icon={faPinterest} />
                    <span className="share-info">Pinterest</span>
                </a> 
                </div> 
                  ))}    
            </div>
        </div>      
    </div>
    </>
) }
}
