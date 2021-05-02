import React from 'react';

import snapshot2 from '../../images/Screenshot 2021-05-02 045110.png';
import snapshot3 from '../../images/Screenshot 2021-05-02 045152.png';
import snapshot4 from '../../images/Screenshot 2021-05-02 045201.png';
import snapshot5 from '../../images/Screenshot 2021-05-02 045420.png';
import snapshot6 from '../../images/Screenshot 2021-05-02 045532.png';
import snapshot7 from '../../images/Screenshot 2021-05-02 045815.png';
import SubProjects from './SubProjects';

const projectsData = [
    {
    img: snapshot2,

}, 
{
    img: snapshot3
},
{
    img:snapshot5
},
{
    img:snapshot6
},
{
    img:snapshot7
}
]
const Projects = () => {
    return (
        <div style={{margin: '10px'}}>
            {
                projectsData.map(datum => <SubProjects datum={datum}></SubProjects>)
            }
        </div>
    );
};

export default Projects;