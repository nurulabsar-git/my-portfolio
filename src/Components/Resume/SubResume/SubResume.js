import React from 'react';

const SubResume = (props) => {
    const {img, name} = props.datum;
    return (
        <div className="sub-resume">
            <div>
            <img src={img} alt="" style={{width: '30%', borderRadius: '50%'}}/>
             <h6>{name}</h6>
            </div>
        </div>
    );
};

export default SubResume;