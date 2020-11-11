import React, { Component } from 'react';
// import Surveyclass from './surveyclass';
import '../style/surveyformat.css';

class surveyformat extends Component {


    state={
        sel:0,
    }
    // state={
    //     name:"",
    //     age:0,
    //     gender:0,
    // // }
    // namchin:0,
    // rock:0,
    // luxury:0,
    // ameca:0,
    // casual:0,
    // street:0,
     qlist=[[],["나와 어울리는 음식은?", "마라탕, 마라샹궈", "국밥", "햄버거", "단식"],
     ["내가 젤 좋아하는 음식?","1", "2", "3", "4"]];

    qlistval= [ 
            [ 
                {namchin:5 , rock:1, luxury:2, ameca:3, casual:4,street:4},
                {namchin:2 , rock:3, luxury:0, ameca:2, casual:5,street:3},
                {namchin:1 , rock:4, luxury:3, ameca:5, casual:4,street:4},
                {namchin:3 , rock:5, luxury:4, ameca:1, casual:0, street:2} 
            ],
            [

            ]  
              ];
    handleSubmit = (qnum,sel) => {
        console.log("qlistval[qnum-1][sel] is   "+ this.qlistval[0][0].namchin);
        this.props.onCreate(this.qlistval[qnum-1][sel]);
        this.props.onChange();
    }


    render() {

        const qlist=this.qlist; 
        let qnum=this.props.qnum;


        return ( 
            <div className="surveyformat">
            <div className="qcontentcontainer"><p className="qcontent">{qlist[qnum][0]}</p></div>
            <div className="buttons">
            <button className="choice" onClick={()=>{this.handleSubmit(qnum,0)}}>{qlist[qnum][1]}</button>
            <button className="choice" onClick={()=>{this.handleSubmit(qnum,1)}}>{qlist[qnum][2]}</button>
            <button className="choice" onClick={()=>{this.handleSubmit(qnum,2)}}>{qlist[qnum][3]}</button>
            <button className="choice" onClick={()=>{this.handleSubmit(qnum,3)}}>{qlist[qnum][4]}</button>
            </div>
            </div>
        ) ;
    }
}

export default surveyformat;    