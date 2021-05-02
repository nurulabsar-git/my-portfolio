import React from 'react';
import Particles from 'react-particles-js';
const Particle = () => {
    return (
        <div>
          <Particles 
                params={{
                   "particles": {
                        "number": {
                            "value": 150
                        },
                        "size": {
                            "value": 5
                        }
                        
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />  
        </div>
    );
};

export default Particle;