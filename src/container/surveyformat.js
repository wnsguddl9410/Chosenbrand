import React, { Component } from 'react';
// import Surveyclass from './surveyclass';
import '../style/surveyformat.css';

class surveyformat extends Component {

    state={
        name:"",
        age:0,
        gender:0,
    }

     qlist=[[],["내 이름은?","전희연", "전정남", "신짱구", "참숯고깃간"],
     ["내가 젤 좋아하는 음식?","1", "2", "3", "4"]];
    

    handleChange= (e)=>
    {
           this.setState({
                    [e.target.name]: e.target.value
                });
        }
        handleSubmit = (e) => {
        const {name, age, gender} = this.state;
        e.preventDefault();
        this.props.onCreate({
              name: name,
              age: age,
              gender: gender,
            });
        
          };

    render() {

        const qlist=this.qlist; 
        let qnum=this.props.qnum;
        



        return ( (this.props.qnum-1==0)?(
        <div className="surveyformat2">
        <form className="personal" onSubmit={this.handleSubmit}>
            <div className="qcontentcontainer"><p className="qcontent">당신에 대해서 알려주세요</p></div>
        <div><label for="name"> 이름 : </label> 
        <input type="text" 
                id="name"  
                name='name'    
                onChange={this.handleChange}  
                value={this.state.name}/> 
        </div>
            <div><label for="age"> 나이 : </label> 
        <input type="text" 
                id='age' 
                name='age'  
                onChange={this.handleChange}  
                value={this.state.age}/>
        </div>
            <div><label for="gender"> 성별 : </label> 
        <input type="text" 
                id='gender' 
                name='gender'
                onChange={this.handleChange}
                value={this.state.gender}/>
        </div>
            <button type="sumbit">등록</button>
        </form>
            {/* <button type="submit" onclick={()=>{console.log(document.getElementById('name').text)}}/> 
        <button onclick={submitMe(document.getElementById('name').value,document.getElementById('age').value),document.getElementById('gender').value} id="testButton" >대답 제출</button>
    */}
        </div>
        )
        :(
            <div className="surveyformat">
            <div className="qcontentcontainer"><p className="qcontent">{qlist[qnum-1][0]}</p></div>
            <div className="buttons">
            <button className="choice">{qlist[qnum-1][1]}</button>
            <button className="choice">{qlist[qnum-1][2]}</button>
            <button className="choice">{qlist[qnum-1][3]}</button>
            <button className="choice">{qlist[qnum-1][4]}</button>
            </div>
            </div>
        ) );
    }
}

export default surveyformat;    