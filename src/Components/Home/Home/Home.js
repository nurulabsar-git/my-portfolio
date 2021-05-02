import React from 'react';
import {Col, Image } from 'react-bootstrap';
import picture from '../../../images/IMG_20210430_143426.JPG'
import Typical from 'react-typical'
import './Home.css';
const Home = () => {
    
    return (
        <div className='m-5 home-page-style'>
         <div>
              <Image src={picture} rounded style={{width: '30%', border: '4px solid green'}}/>
          </div>
     
          <div>
            <h6>Hello, <br/> I Am Mohammad Nurul Absar <br/> 
            <Typical
                    steps={[
                        'Frontend Web Developer', 3000, 'Hard Worker', 4000
                    ]}
                    loop={Infinity}
                    wrapper="h6"
              />
            </h6>
           <p>I am a javaScript Developer. and Passionate about building excellent website application via using
            JavaScript, React.js, Node.js, MongoDB, React Router, ReactBootstrap, Material UI and many more.
            </p>
            <div>
           <button style={{borderRadius: '5px'}}><a style={{textDecoration: 'none', color: 'black'}} href="https://drive.google.com/file/d/1hbZR6Zy5Bg5REUz6jRLTeWnSulS4Y5eP/view?usp=sharing" download> Download My Resume</a></button>
            </div>
            
         </div>
        </div>
    );
};

export default Home;