import{o as a,c as i,a as t,t as s,l as d,b as o,i as l}from"./index-BYzuish6.js";/* empty css                  */const p={class:"view-wrap"},u={class:"view-header"},_={className:"post-details"},v={__name:"BoardView",props:{title:String,writer:String,date:String,cnt:Number},setup(e){return(r,n)=>(a(),i("div",p,[t("div",u,[t("h2",null,s(e.title),1),t("div",_,[t("span",null,s(e.writer),1),t("span",null,s(e.date),1),t("span",null,"조회수 "+s(e.cnt),1)])]),n[0]||(n[0]=d('<div class="view-body board"><p>안녕하세요. 베터빌입니다.</p><p>벌써 23년도 4월이 시작되었습니다.^^</p><p>4월 1일 새롭게 오픈한 닥터빌 서비스 안내드립니다.</p><strong>베터빌 스터디룸</strong><p>시간, 장소에 제한없이 닥터빌 온라인 스터디룸에서 지식을 나누세요!</p><p>원하시는 날짜, 시간, 참여 인원을 설정 후 예약하시면 끝!</p><p>무료로 진행되는 닥터빌 온라인 스터디룸, 많은 이용 바랍니다.</p></div><div class="btn-group"><button>목록</button><button class="prev">이전글</button><button class="next">다음글</button></div>',2))]))}},m={class:"container",id:"content"},b={class:"contents"},h={__name:"FreeBoardView",setup(e){return(r,n)=>{const c=l("Aside");return a(),i("div",m,[t("div",b,[o(v,{title:"이미지 사이트 추천해주세요",writer:"김가영",date:"2022-10-12",cnt:5})]),o(c)])}}};export{h as default};