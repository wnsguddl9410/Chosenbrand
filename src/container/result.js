import React, { Component } from 'react';
import '../style/Result.css';
import Pointify from './pointify';
class result extends Component {

state={
    on:true,
    first:"",
    second:"",
}

    resultify=(s1,s2)=>
    {
      let  brandlist=
    [ 
/*namchin*/ [{name:"훈훈한하고 다정다감한"},{name:"Tonywack"},{name:"Ami"},{name:"커버낫"},{name:"MMLG"},{name:"아이앱 스튜디오"},{name: "Acne Studios"}],
/*rock*/    [{name:"벨리에"},{name:"시크하고 강렬한"},{name:"셀린느"},{name:"벌스데이수트"},{name:"withlaugher"},{name:"롤링 스튜디오"},{name: "XCX-Main"}], 
/*luxury*/  [{name:"Gucci"},{name:"Saint Laurent"},{name:"고급스럽고 럭셔리한"},{name:"Needles"},{name:"Moschino"},{name:"Off-White"},{name: "Maison Margiela"}],
/*ameca*/   [{name:"Polo Ralph Lauren"},{name:"Art if Acts"},{name:"Visvim"},{name:"푸근하고 지적인"},{name:"캉골"},{name:"비슬로우 퍼플"},{name: "농담"}],   //비즈빔 엔가 텐더로인
/*casual*/  [{name:"무신사 스탠다드"},{name:"ZARA"},{name:"COS"},{name:"비슬로우 스탠다드"},{name:"편안하고 나대지않는"},{name:"휠라"},{name: "랩101"}],   
/*street*/  [{name:"알렌느"},{name:"메종미네드"},{name:"BAPE"},{name:"블라인드파일즈"},{name:"LMC"},{name:"힙하고 트렌디한"},{name: "해피피플갤러리"}],    
/*funky*/   [{name:"앤더슨벨"},{name: "Vivienne Westwood"},{name: "Martine Rose"},{name: "리트"},{name:"로맨틱크라운"},{name: "SKOOT APPAREL"},{name:"톡톡튀는 4차원의"}],
    //인스타 젠더리스 섹시 펑키 스포티           
    /*  
        블라인드파일즈 스틸휠즈 아이사피 퍼즈 라이풀
        MMIC 해피피플갤러리 차이나타운마켓 스   투시 예스아이씨 the museum visitor youthbath 
        withlaugher addoff 피스마이너스원
        오베이 반스 챔피온 나이키 
        벌스데이수트 마르지엘라 로맨틱크라운 아크네스튜디오 앤더슨벨 알렌느샵 리트
        랄프로렌 포터리 MNEME 론트 ATE studios 벨리에 아영상사 태우샵 애스파이벗 아트이프액츠 메종미네드
        캉골 와일드브릭스 스페로네 디그레 비슬로우
        디벨 농담
        무신사 스탠다드 유핑 아이앱스튜디오 
        프레드페리  애프터프레이 요위 
        랩101  기명  anglan  
        노앙 컨버스 비바스튜디오
         르꼬끄 코스
        JW Anderson Jilsander Martin Rose 질스튜어트 캘빈클라인 JEEP
        우영미 APC
    */ 
    ];
    var k=["",0,0];
    if(s1.name==='namchin'){
        k[0]=0;

        if(s2.name==='rock') k[1]=1;
        else if(s2.name==='luxury') k[1]=2;
        else if(s2.name==='ameca') k[1]=3;
        else if(s2.name==='casual') k[1]=4;
        else if(s2.name==='street') k[1]=5;
        else if(s2.name==='funky') k[1]=6;

    }
    else if(s1.name==='rock'){
        k[0]=1;

        if(s2.name==='namchin') k[1]=0;
        else if(s2.name==='luxury') k[1]=2;
        else if(s2.name==='ameca') k[1]=3;
        else if(s2.name==='casual') k[1]=4;
        else if(s2.name==='street') k[1]=5;
        else if(s2.name==='funky') k[1]=6;

    }
    else if(s1.name==='luxury'){
        k[0]=2;

        if(s2.name==='namchin') k[1]=0;
        else if(s2.name==='rock') k[1]=1;
        else if(s2.name==='ameca') k[1]=3;
        else if(s2.name==='casual') k[1]=4;
        else if(s2.name==='street') k[1]=5;
        else if(s2.name==='funky') k[1]=6;

    }
    else if(s1.name==='ameca'){
        k[0]=3;

        if(s2.name==='namchin') k[1]=0;
        else if(s2.name==='rock') k[1]=1;
        else if(s2.name==='luxury') k[1]=2;
        else if(s2.name==='casual') k[1]=4;
        else if(s2.name==='street') k[1]=5;
        else if(s2.name==='funky') k[1]=6;

    }
    else if(s1.name==='casual'){
        k[0]=4;

        if(s2.name==='namchin') k[1]=0;
        else if(s2.name==='rock') k[1]=1;
        else if(s2.name==='luxury') k[1]=2;
        else if(s2.name==='ameca') k[1]=3;
        else if(s2.name==='street') k[1]=5;
        else if(s2.name==='funky') k[1]=6;

    }
    else if(s1.name==='street'){
        k[0]=5;

        if(s2.name==='namchin') k[1]=0;
        else if(s2.name==='rock') k[1]=1;
        else if(s2.name==='luxury') k[1]=2;
        else if(s2.name==='ameca') k[1]=3;
        else if(s2.name==='casual') k[1]=4;
        else if(s2.name==='funky') k[1]=6;
    }
    else if(s1.name==='funky'){
        k[0]=6;
        if(s2.name==='namchin') k[1]=0;
        else if(s2.name==='rock') k[1]=1;
        else if(s2.name==='luxury') k[1]=2;
        else if(s2.name==='ameca') k[1]=3;
        else if(s2.name==='casual') k[1]=4;
        else if(s2.name==='street') k[1]=5;
    }
    switch (k[1])
    {
        case 0: {k[2]="타인에게 매력적인 사람이네요.";break;}
        case 1: {k[2]="시크하지만 강렬한 사람이기도 하네요.";break;}
        case 2: {k[2]="고급스러운 사람이기도 한 것 같아요." ;break;}
        case 3: {k[2]="자연과 역사를 중시하는 사람일 것 같아요.";break;}
        case 4: {k[2]="주위사람을 편안하게 만드는 사람이네요.";break;}
        case 5: {k[2]="힙하고 트렌디한 면모가 있네요.";break;}
        case 6: {k[2]="통통튀는 4차원의 사람이네요.";break;}
        default: {k[2]="오류가 떠서 어떤사람인지 당최 모르겠네요ㅠㅠ";break;}
    }
return <div className="resultified"><div>{brandlist[(k[0])][(k[0])].name} 성향을 가진 당신,<br/> {k[2]}</div><div className="resultified2"><div>당신에게 어울리는 브랜드는</div><div className="brand">"{(brandlist[k[0]][k[1]]).name}"</div><div> 입니다.</div></div></div>

    }
    
PrintResult=()=>
    {
        let {namchin,rock,luxury,ameca,casual,street,funky}=this.props.value;
        function compare(a,b){
            return (a.value-b.value);
        }
        let obj= [{name: 'namchin',value:namchin},{name: 'rock',value:rock},{name: 'luxury',value:luxury},{name: 'ameca',value:ameca},{name: 'casual',value:casual},{name: 'street',value:street},{name: 'funky',value:funky}]
        obj.sort(compare).reverse();

        const print=this.resultify(obj[0],obj[1]); 

        return print;
    
    }

showresult=()=>{
    this.setState({on:!this.state.on});
}

    render() {
        const {on} =this.state;
          
        console.log(this.props.value);
        

        return (
            <div className="Results2">
            { 
            (on)?
            (
                <div className="noton" onClick={this.showresult}><p>결과를 보려면 클릭하세요</p></div>
            )
                :
            (<div className="Results">
                {/* <Pointify points={this.props.value}/> */}
                {this.PrintResult()}
            </div>)
            }
            </div>
        );
    }
}

export default result;