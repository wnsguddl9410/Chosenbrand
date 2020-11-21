import React, { Component } from 'react';
import '../style/Result.css';
class result extends Component {

    resultify=(s1,s2)=>
    {
      let  brandlist=
    [ 
/*namchin*/ [{},{name:"Tonywack"},{name:"Ami"},{name:"커버낫"},{name:"MMLG"},{name:"인사일런스"}],
/*rock*/    [{name:"페이탈리즘"},{},{name:"셀린느"},{name:"벌스데이수트"},{name:"XCX-Main"},{name:"롤링 스튜디오"}], 
/*luxury*/  [{name:"Gucci"},{name:"Saint Laurent"},{},{name:"Needles"},{name:"Moschino"},{name:"Off-White"}],
/*ameca*/   [{name:"유니폼브릿지"},{name:"ArtifActs"},{name:"비즈빔"},{},{name:"캉골"},{name:"비슬로우 퍼플"}],   //비즈빔 엔가 텐더로인
/*casual*/  [{name:"무신사 스탠다드"},{name:"ZARA"},{name:"코스"},{name:"비슬로우 스탠다드"},{},{name:"휠라"}],   
/*street*/  [{name:"알렌느"},{name:"SKOOT APPAREL"},{name:"레이블리스"},{name:"블라인드파일즈"},{name:"LMC"},{}],    

    //인스타 젠더리스 섹시 펑키 스포티
    
    /*  
        MMIC 벌스데이수트 예스아이씨 해피피플갤러리 MNEME 차이나타운마켓 
        무신사 스탠다드 스투시 론트 로맨틱크라운 반스 마르지엘라
        아크네스튜디오 프레드페리 챔피온 나이키 애프터프레이 레이블리스
        디벨 알렌느샵 랩101 ATE studios 기명 the museum visitor anglan
        농담 디그레 addoff 포터리 withlaugher 비슬로우 youthbath 앤더슨벨
        아이앱스튜디오 와일드브릭스 캉골 유핑 스페로네 벨리에 태우샵 오베이 요위
        애스파이벗 리트 노앙 컨버스 아트이프액츠 메종미네드 비바스튜디오
        아이사피 퍼즈 블라인드파일즈 스틸휠즈 아영상사 라이풀 르꼬끄 코스
        랄프로렌 JW Anderson Jilsander Martin Rose 질스튜어트 캘빈클라인 JEEP
        우영미 APC
    */ 
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
         
    return <div className="resultified"><div>당신에게 어울리는 브랜드는</div><div className="brand">"{k[0]}"</div><div> 입니다.</div>
    </div>
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
            <div className="Results">
                {this.PrintResult()}
                <div className="Points">
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
            </div>
        );
    }
}

export default result;