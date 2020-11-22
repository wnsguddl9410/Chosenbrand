import React, { Component } from 'react';
import '../style/pointify.css'
class pointify extends Component {
    
    

    render(){
        const {name,age,gender,namchin,rock,luxury,ameca,casual,street,funky}=this.props.points;
    return (
        <div className="pointified">
            <div className="stats">
                <p>name={name}</p>
                <p>age={age}</p>
                <p>gender={gender}</p>                
                <p>namchin={namchin}</p>
                <p>rock={rock}</p>              
                <p>luxury={luxury}</p>                
                <p>ameca={ameca}</p>               
                <p>casual={casual}</p>                
                <p>street={street}</p>
                <p>funky={funky}</p>    
            </div>
        </div>
    );
    };
};

export default pointify;
