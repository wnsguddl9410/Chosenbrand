import React, {Fragment, Component } from 'react';
import '../style/question.css';
import Survey from './surveyformat';
import Surveyclass from './surveyclass';

class question extends Component {


    state={
        start:true,
        num:1,
        memberInfo:{},
    };

    handleCreate=(data)=>
       { 
        const {memberInfo}=this.state;
        this.setState({memberInfo:data
        ,});
        console.log(this.state.memberInfo);
    }
    


    startquiz=()=>{
        this.setState({start : !(this.state.start)});
        console.log("stqz");
    }

    nextq=()=>{
        this.setState({num:this.state.num+1});
    }

    render() 
    {


        const {start,num}=this.state
        const memberInfo=this.state.memberInfo
        return(
            
            <div className="question">
                
                {start?(
                <div className="firstq">
                <p>내 성향에 어울리는 <br/>패션브랜드 알아보기</p>
                <button onClick={this.startquiz} className="start">시작</button>
                </div>
                ):
                (
                <div className="surveycontainer">
                <Survey onCreate={this.handleCreate} qnum={num} />
                <button onClick={this.nextq} className="btnnext">Next</button>
                
                이게 받아온 값이다:{JSON.stringify(memberInfo)}
                </div>
                )}
                
            </div>
        );


    }
}

export default question;