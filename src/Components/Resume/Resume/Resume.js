import React from 'react';
import reactJs from '../../../images/reactjs.png';
import JavaScript from '../../../images/javaScript.png';
import ReactRouter from '../../../images/reactRouter.png';
import ReactBootstrap from '../../../images/reactBootstrap.png';
import Bootstrap from '../../../images/Bootstrap.png';
import NodeJs from '../../../images/nodejs.png';
import MaterialUI from '../../../images/materialUI.png';
import firebase from '../../../images/firebase.png';
import github from '../../../images/github.png';
import netlify from '../../../images/netlify.png';
import SubResume from '../SubResume/SubResume';
import SkillBar from 'react-skillbars';
import './Resume.css';
const resumeData = [
    {
        img: reactJs,
        name: 'React Js',
        id: 0
    },
    {
        img: JavaScript,
        name: 'Java Script',
        id: 1
    },
    {
        img: ReactRouter,
        name: 'React Router',
        id: 2
    },
    {
        img: ReactBootstrap,
        name: 'ReactBootstrap',
        id: 3
    },
    {
        img: Bootstrap,
        name: 'Bootstrap',
        id: 4
    },
    {
        img: MaterialUI,
        name: 'Material UI',
        id: 5
    },
    {
        img: NodeJs,
        name: 'Node Js',
        id: 6
    },
    
    {
        img: firebase,
        name: 'Firebase',
        id: 7
    },
    {
        img: github,
        name: 'Github',
        id: 9
    },
    {
        img: netlify,
        name: 'Netlify',
        id: 10
    },
]

const skills = [
    {type: "Java Script", level: 75},
    {type: "React.Js", level: 60},
    {type: "React Router", level: 99},
    {type: "ReactBootstrap", level: 75},
    {type: "Bootstrap", level: 75},
    {type: "HTML", level: 95},

  ];

  const skill = [
    {type: "Node Js", level: 45},
    {type: "MongoDB", level: 40},
  ];

const Resume = () => {
    return (
        <main>
            
        <section>
        <div style={{margin: '30px'}}>
        <h4><span style={{borderBottom: 'solid red'}}>My Tools</span> and Technology</h4>
        </div>
        <div className="resume-style">
           {
               resumeData.map(datum=> <SubResume datum={datum}></SubResume>)
           }
           </div>
        </section>

        <section className="skills-container">
          <div>
          <h4><span style={{borderBottom: 'solid red'}}>My Front-end</span> Skills</h4>
          <p>
              <strong>Programming:</strong> Java Script <br/>
              <strong>Framework and Library:</strong> React.Js, Bootstrap, ReactBootstrap, Material UI. <br/>
              <strong>Hosting Side:</strong> Firebase, Netlify, Github. <br/>
              <strong>Tools:</strong> Visual Studio Code, WebStorm.
          </p>
          <span>
               <SkillBar skills={skills} height={14} />
           </span>
         </div>
         

          <div style={{marginLeft: '14px'}}>
          <h4><span style={{borderBottom: 'solid red'}}>My Backend-end</span> Skills</h4>
          <p>
              framework: Node.js <br/>
              DataBase: Mongodb 
          </p>
          <span>
          <SkillBar skills={skill} height={14} />
          </span>
          </div>
         

       </section>
          
        </main>
    );
};

export default Resume;