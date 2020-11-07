import React, { Component } from 'react';

class surveyclass extends Component 
{
    // state={
    //     name:"",
    //     age:0,
    //     gender:0,
    //     namchin:0,
    //     rock:0,
    //     luxury:0,
    //     ameca:0,
    //     casual:0,
    //     street:0,
    // }
    name="";
    age=0;
    gender=0;
    namchin=0;
    rock=0;
    luxury=0;
    ameca=0;
    casual=0;
    street=0;
    surveyclass(s, k, a)
    {
this.name=s;
this.age=k;
this.gender=a;
    }

    render() {
        return (
            <div>
                s
            </div>
        );
    }
}

export default surveyclass;