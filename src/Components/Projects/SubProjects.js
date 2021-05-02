import React from 'react';

const SubProjects = (props) => {
    const {img} = props.datum;
    return (
        <div>
            <img src={img} alt="" style={{width: '90%', margin: '30px'}}/>
        </div>
    );
};

export default SubProjects;