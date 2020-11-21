import React, { Component } from 'react';
// import Surveyclass from './surveyclass';
import '../style/surveyformat.css';

class surveyformat extends Component {


    state={
        sel:0,
    }
     qlist=
    [
    
    [],
    ["나와 어울리는 음식은?", "마라탕, 마라샹궈", "든든한 국밥", "햄버거", "단식. 먹는 거 딱히 안 좋아함"],
    
    ["좋아하는 영화 장르는?","멜로, 로맨스 : 어바웃타임, 노트북 등 ", "스릴러, 공포 : 식스센스, 셔터아일랜드 등", 
    "드라마: 리플리, 쇼생크 탈출 등", "공상과학: 아이언맨, 프로메테우스 등"],
    
    ["좋아하는 음악 장르는?","힙합 ","락","발라드","클래식"],
    
    ["바쁜 일상 중 24시간의 쉬는 시간이 주어진다면?", "집에서 넷플릭스 보면서 푹 쉰다", "친구들과 함께 술마시면서 떠든다", 
    "산책하다가 조용한 카페에 가서 여유로운 시간을 보낸다", "쇼핑을 하고 전시회를 보러다니며 바쁜 하루를 보낸다"],
    
    ["카페에 도착한 후 당신이 주로 시키는 음료는?","아이스 아메리카노","핫 아메리카노","시즌음료","음료는 모르겠고 디저트"],

    ["내 SNS 피드스타일에 가장 비슷한 것은?","친구들과의 모임사진 등 단체사진 위주의 피드 ","본인의 외모와 스타일이 가장 잘나온 사진 위주의 피드","풍경사진과 캠핑사진 등 자연친화적인 피드" , "범인은 이해하기 어려운 감성적인 사진과 글귀 위주의 피드"],

    ["내 MBTI의 앞 두글자는? ex. 내 MBTI가 INFP라면 IN", "IS : 내향적 / 현실적", "IN : 내향적 / 직관적","EN : 외향적 / 직관적","ES : 외향적 / 현실적"],
    ["내 MBTI의 앞 두글자는? ex. 내 MBTI가 INFP라면 FP", "TJ : 합리적 / 계획적", "TP : 합리적 / 즉흥적","FJ : 감정적 / 계획적","FP : 감정적 / 즉흥적"],

    ];

    qlistval= [ 
            [ 
                {namchin:5 , rock:1, luxury:2, ameca:3, casual:4, street:4},
                {namchin:2 , rock:2, luxury:0, ameca:2, casual:5, street:3},
                {namchin:1 , rock:4, luxury:1, ameca:5, casual:4, street:4},
                {namchin:3 , rock:5, luxury:4, ameca:1, casual:0, street:2} 
            ],//         11       12        7        11        13        13
            [  
                {namchin:5 , rock:1, luxury:4, ameca:2, casual:3, street:0}, 
                {namchin:1 , rock:4, luxury:3, ameca:3, casual:2, street:4}, 
                {namchin:3 , rock:4, luxury:5, ameca:3, casual:3, street:2}, 
                {namchin:1 , rock:2, luxury:1, ameca:1, casual:2, street:4} 
             //          10       11        13       9         10        10
            ],
            [
                {namchin:1 , rock:3, luxury:2, ameca:2, casual:3,street:5},
                {namchin:1 , rock:5, luxury:0, ameca:3, casual:1,street:3},
                {namchin:4 , rock:2, luxury:3, ameca:2, casual:3,street:1},
                {namchin:2 , rock:1, luxury:5, ameca:2, casual:2, street:1}
                //        8        11        10       9         9        10
            ],  //        29       34        30      29        32        33
        
            [
                {namchin: 1, rock:2, luxury:2, ameca:3, casual:4, street:2},
                {namchin: 2, rock:3, luxury:3, ameca:2, casual:5, street:4},
                {namchin: 4, rock:1, luxury:3, ameca:5, casual:3, street:2},
                {namchin: 4, rock:2, luxury:5, ameca:1, casual:2, street:4}
                //        11      8        13      11        14        12
            ],
                //        40      42       43      40        46        45
            //["카페에 도착한 후 당신이 주로 시키는 음료는?",
            //"아이스 아메리카노","핫 아메리카노","시즌음료","음료는 모르겠고 디저트"]

            [
                {namchin: 3, rock: 3, luxury: 2, ameca: 3, casual: 4, street:3},
                {namchin: 2, rock: 3, luxury: 2, ameca: 4, casual: 2, street:2},
                {namchin: 3, rock: 2, luxury: 4, ameca: 2, casual: 2, street:2},
                {namchin: 4, rock: 2, luxury: 4, ameca: 1, casual: 2, street:3},
            ],   //       52       52        55        50         56        55
    
    //            ["친구들과의 모임사진 등 단체사진 위주의 피드 ","본인의 외모와 스타일이 가장 잘나온 사진 위주의 피드",
    //             "풍경사진과 캠핑사진 등 자연친화적인 피드" , "범인은 이해하기 어려운 감성적인 사진과 글귀 위주의 피드"],
            
            [
                {namchin: 4, rock: 1, luxury: 3, ameca: 2, casual: 4, street:2},
                {namchin: 5, rock: 3, luxury: 4, ameca: 0, casual: 2, street:2},
                {namchin: 0, rock: 1, luxury: 3, ameca: 5, casual: 2, street:1},
                {namchin: 1, rock: 4, luxury: 1, ameca: 2, casual: 0, street:4},
            ],
                //        62      61         66       59          64        64 
//"IS : 내향적 / 현실적", "IN : 내향적 / 직관적","EN : 외향적 / 직관적","ES : 외향적 / 현실적"],
      [
                {namchin: 1, rock: 2, luxury: 1, ameca: 3, casual: 4, street:2},
                {namchin: 3, rock: 5, luxury: 3, ameca: 3, casual: 1, street:2},
                {namchin: 4, rock: 3, luxury: 4, ameca: 4, casual: 2, street:4},
                {namchin: 3, rock: 0, luxury: 1, ameca: 3, casual: 3, street:4},
    ],//                 73       71        75         72         74        76
//"TJ : 합리적 / 계획적", "TP : 합리적 / 즉흥적","FJ : 감정적 / 계획적","FP : 감정적 / 즉흥적"],       
    [
                {namchin: 3, rock: 1, luxury: 2, ameca: 1, casual: 3, street:1},
                {namchin: 4, rock: 2, luxury: 3, ameca: 2, casual: 3, street:4},
                {namchin: 2, rock: 3, luxury: 3, ameca: 4, casual: 3, street:2},
                {namchin: 4, rock: 4, luxury: 4, ameca: 3, casual: 3, street:3},
    ],//                 86       81         87        82         86         86

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