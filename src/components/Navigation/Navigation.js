import React from 'react';


const Navigation = (props) => {    
        return (
            <div className="Navigation">
                <div className="Snake">
                    <img src="images/cham.jpg" alt="chameleon" />
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