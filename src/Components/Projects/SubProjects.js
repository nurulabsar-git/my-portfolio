import React from 'react';

const SubProjects = (props) => {
    const {img} = props.datum;
    return (
        <div>
            <img src={img} alt="" className="m-4" style={{width: '90%'}}/>
        </div>
    );
};

export default SubProjects;