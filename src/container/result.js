import React, { Component } from 'react';

class result extends Component {




    render() {




          const {name,age,gender,namchin,rock,luxury,ameca,casual,street}=this.props.value;
         console.log(this.props.value);
        return (
            <div>
                결과페이지
                <p>{name}</p>
                <p>{age}</p>
                <p>{gender}</p>                
                <p>{namchin}</p>
                <p>{rock}</p>              
                <p>{luxury}</p>                
                <p>{ameca}</p>               
                <p>{casual}</p>                
                <p>{street}</p>                
            </div>
        );
    }
}

export default result;