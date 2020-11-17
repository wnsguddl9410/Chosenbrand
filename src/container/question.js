import React, {Fragment, Component } from 'react';
import '../style/question.css';
import Survey from './surveyformat';
import Result from './result'
class question extends Component {


    state={
        start:true,
        start2:true,
        num:0,
        name:"",
        age: '',
        gender:0,
        namchin:0,
        rock:0,
        luxury:0,
        ameca:0,
        casual:0,
        street:0,
    };

    handleCreate=(data)=>
       { 
        console.log(this.state.namchin);
        console.log(data.namchin);
        this.setState({namchin: this.state.namchin + data.namchin});
        console.log(this.state.namchin);
        this.setState({rock: this.state.rock + data.rock});
        this.setState({luxury: this.state.luxury + data.luxury});
        this.setState({ameca: this.state.ameca + data.ameca});
        this.setState({casual: this.state.casual + data.casual});
        this.setState({street: this.state.street + data.street});
    }
    


    startquiz=()=>{
        this.setState({start : !(this.state.start)});
    }
    handlePersonal=(e)=>{
        e.preventDefault();
        this.nextq();
    }

    handleChange= (e)=>
    {
        //    this.setState({[e.target.name]: e.target.value});
        this.setState((state)=> { 
            return {[e.target.name] : e.target.value} });
    }
    changegender=(e)=>{

        this.setState({gender : e.target.value});
    }

    nextq=()=>{
        // console.log(this.state);
        this.setState({num: this.state.num+1});
    }


    // showbutton=()=>{
    //      alert(this.state.num);
    //      if(this.state.num<2)
         
    //         return (<button onClick={this.nextq} className="btnnext">Next</button>);
    // }


    render() 
    {


        const {start,num,name,age,gender,namchin,rock,
            luxury,
            ameca,
            casual,
            street}=this.state
        


        return(
            
            <div className="question">
                
                {start?(
                <div className="firstq">
                <p>내 성향에 어울리는 <br/>패션브랜드 알아보기</p>
                <button onClick={this.startquiz} className="start">시작</button>
                </div>
                ):
                (num==0)?
                (<div className="Personal">
                <form className="personal" onSubmit={this.handlePersonal}>

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
                    
                Male<input type="radio" id="gender" name="gender" onClick={this.changegender} value='1'/>
                Female<input type="radio" id="gender" name="gender" onClick={this.changegender} value='0'/>
               
                {/* <input type="checkbox" 
                        id='gender' 
                        name='gender'
                        onChange={this.handleChange}
                        value={this.state.gender}/> */}
                </div>
                    <button type="submit" >등록</button>
                </form>
             
                </div>
        )
:(num<4)?
                (
                <div className="surveycontainer">
                <Survey onCreate={this.handleCreate} onChange={this.nextq} qnum={num} />
              
                {/* {num<1 && <button onClick={this.nextq} className="btnnext">Next</button> } */}
              
                
                이름 : {name}, 나이 : {age}, 성별 : {gender}, NUM : {num},
                남친 : {namchin}, 락 : {rock}, 럭셔리 : {luxury}, 아메카지 : {ameca}, 캐쥬얼 : {casual}, 스트릿 : {street}
                </div>
                )
            :(    
            <Result value={this.state}/>
            )
            }
                
            </div>
        );


    }
}

export default question;