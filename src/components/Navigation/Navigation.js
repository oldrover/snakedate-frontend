import React from 'react';
import pic from '../../assets/images/cham.jpg';

const Navigation = (props) => {    
        return (
            <div className="Navigation">
                <div className="Snake">
                    <img src={pic} alt="chameleon" />
                    {props.user.snakes[0].name}                    
                </div>                
                <div className="User">
                {props.user.name}
                    <div className="UserIcon"></div> 
                    
                    
                </div>
            </div>
        ); 

}

export default Navigation;