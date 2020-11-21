import React, { Component } from 'react';
import '../style/Result.css';
class result extends Component {

    resultify=(s1,s2)=>
    {
      let  brandlist=
    [ 
            [{},{name:"Tonywack"},{name:"Ami"},{name:"커버낫"},{name:"MMLG"},{name:"인사일런스"}]   ,
            [{name:"페이탈리즘"},{},{name:"셀린느"},{name:"벌스데이수트"},{name:"XCX-Main"},{name:"Vivienne Westwood"}]   ,
            [{name:"Gucci"},{name:"Saint Laurent"},{},{name:"Needles"},{name:"Moschino"},{name:"Off-White"}]   ,
            [{name:"유니폼브릿지"},{name:"엔지니어드 가먼츠"},{name:"비즈빔"},{},{name:"비슬로우"},{name:"비슬로우 퍼플"}],   //비즈빔 엔가 텐더로인
            [{name:""},{name:"ZARA"},{name:""},{name:""},{},{name:""}],   
            [{name:""},{name:"SKOOT"},{name:""},{name:""},{name:""},{}],      //차이나타운 마켓 

    ];
    var k=[];
    if(s1.name==='namchin'){
        if(s2.name==='rock') k.push(brandlist[0][1].name);
        else if(s2.name==='luxury') k.push(brandlist[0][2].name);
        else if(s2.name==='ameca') k.push(brandlist[0][3].name);
        else if(s2.name==='casual') k.push(brandlist[0][4].name);
        else if(s2.name==='street') k.push(brandlist[0][5].name);
    }
    else if(s1.name==='rock'){
        if(s2.name==='namchin') k.push(brandlist[1][0].name);
        else if(s2.name==='luxury') k.push(brandlist[1][2].name);
        else if(s2.name==='ameca') k.push(brandlist[1][3].name);
        else if(s2.name==='casual') k.push(brandlist[1][4].name);
        else if(s2.name==='street') k.push(brandlist[1][5].name);
    }
    else if(s1.name==='luxury'){
        if(s2.name==='namchin') k.push(brandlist[2][0].name);
        else if(s2.name==='rock') k.push(brandlist[2][1].name);
        else if(s2.name==='ameca') k.push(brandlist[2][3].name);
        else if(s2.name==='casual') k.push(brandlist[2][4].name);
        else if(s2.name==='street') k.push(brandlist[2][5].name);
    }
    else if(s1.name==='ameca'){
        if(s2.name==='namchin') k.push(brandlist[3][0].name);
        else if(s2.name==='rock') k.push(brandlist[3][1].name);
        else if(s2.name==='luxury') k.push(brandlist[3][2].name);
        else if(s2.name==='casual') k.push(brandlist[3][4].name);
        else if(s2.name==='street') k.push(brandlist[3][5].name);
    }
    else if(s1.name==='casual'){
        if(s2.name==='namchin') k.push(brandlist[4][0].name);
        else if(s2.name==='rock') k.push(brandlist[4][1].name);
        else if(s2.name==='luxury') k.push(brandlist[4][2].name);
        else if(s2.name==='ameca') k.push(brandlist[4][3].name);
        else if(s2.name==='street') k.push(brandlist[4][5].name);
    }
    else if(s1.name==='street'){
        if(s2.name==='namchin') k.push(brandlist[5][0].name);
        else if(s2.name==='rock') k.push(brandlist[5][1].name);
        else if(s2.name==='luxury') k.push(brandlist[5][2].name);
        else if(s2.name==='ameca') k.push(brandlist[5][3].name);
        else if(s2.name==='casual') k.push(brandlist[5][4].name);
    }
         
    return <div><div>축하드립니다. 당신에게 어울리는 브랜드는 {k[0]}입니다.</div><div>이 외에 추천하는 브랜드는</div></div>
    }
    
    PrintResult=()=>
    {
        let {name,age,gender,namchin,rock,luxury,ameca,casual,street}=this.props.value;
        function compare(a,b){
            return (a.value-b.value);
        }
        let obj= [{name: 'namchin',value:namchin},{name: 'rock',value:rock},{name: 'luxury',value:luxury},{name: 'ameca',value:ameca},{name: 'casual',value:casual},{name: 'street',value:street}]
        obj.sort(compare).reverse();

        const print=this.resultify(obj[0],obj[1]); 
        return print;
    
    }

    render() {




          const {name,age,gender,namchin,rock,luxury,ameca,casual,street}=this.props.value;
         console.log(this.props.value);
        return (
            <div className="Points">
                {this.PrintResult()}
                <p>name={name}</p>
                <p>age={age}</p>
                <p>gender={gender}</p>                
                <p>namchin={namchin}</p>
                <p>rock={rock}</p>              
                <p>luxury={luxury}</p>                
                <p>ameca={ameca}</p>               
                <p>casual={casual}</p>                
                <p>street={street}</p>                
                
            </div>
        );
    }
}

export default result;