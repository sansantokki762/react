import { createRoot } from 'react-dom/client'

//숙 1//

function getMoney(won) {
  return (
    won * 1400
  )  
}

function Money() {
  const money = 5 * 1400
  return (
    <>
    <h1>there's</h1>
    <p> {money} {/*표현식*/}won in my wallet</p>
    </>
  )
}

function Money2() {
  const money = 5 * 1400
  return (
    <>
    <h1>theres</h1>
    <p> {getMoney(99)} {/*함수 호출 ㅆ가능*/}won in my wallet</p>
    </>
  )
}

function Human() {
  const person = {
    name : "lian", //아 쉼표있어야 하노//
    nickname : "sansasntokki",
    address : "incheon"
  }
  return(
    <h1>
      저는 {person.name}입니다. 별명은 {person.nickname}이고,
      {person.address}에 살고 있어용 {/*객체 속성 접근*/}
    </h1>
  );
}

/////////////////////////////////////////////////////////////

//숙 2//

function Intro/*함수 이름에는 무조건 대문자로 시작*/() {
  const a = "title"

  const myFunc = () => {
    alert("저는 인간입니다.")
  }
  const style1 = {    //스타일은 객체 생성해서 넣어주기 가능
    color: "pink",
    fontSize: "2rem",
    backgroundColor:"green"
  }  
    
  const age = 99
  let result; //사용하는 변수는 선언을 해야 한다.//
  if (age
     >= 30) {
    result
     = "섭섭하겠노" //if문은 result안에 사용할 수 없어서 밖에다 써서 이렇게 함//
  } else {
    result = "안 섭섭하겠노"
  }
  
  return(
   <div>
     <p className={a} onClick={myFunc}>저는 산산토끼입니다.</p>
                    {/*onclick(x) on-click(x)*/}

     <button onClick={myFunc} disabled={false}/*비활성화 속성*/>눌러</button>  

     <span style={style1}>나는 문어</span>        

    <p>당신은 {result}</p>
   </div>
                       
  ) 
}

///////////////////////////////////////////////////////////////////////

//숙 3//

import Flower from './Flower.jsx' //불러옴

function Garden() {
  return (
    <>
      <p>여기는 정원이다.</p>
      <Flower/> {/*여기 안에 다른 컴포넌트를 넣을 수 있음*/}
      <Flower color = "검은" amount={20}/> {/*props도 여기에 넣을 수 있음*/}
      <Flower1 color = {a} types = {b} /> {/*배열이나 객체에 접근시 이렇게 함*/}
    </>
  )
}

function Flower1(props) {
  return(
    <>
      <p>
        우리에게는 {props.color[0]} {props.color[1]} {props.color[2]} 장미가 
        있어용. 그리고 검은 {props.types.kind}가 {props.types.amount}송이가 있지요.
      </p>    
    </> 
   )
}

const a = ["빨간","노란", "검은"] //배열
const b = {kind: "장미", amount: 762} //객체



////////////////////////////////////////////////////////////////////////

//숙4 //

function Rose({rose}) /*rose만 사용 가능하도록 제한*/ {

  return(
    <>
      <p>예쁜 {rose}가 있어용</p>
    </>
  )
}

function Violet(props) {

  const {violet , color} = props //객체를 생성해서 제한 

  return(
    <>
      <p> 이쁜 {violet}이 있는데 {color}색이네 ㅎㅎ</p>
    </>
  )
}

function WhiteFlowers({kind1 ="남산제비" /*기본값으로 지정*/ ,kind2 , ...rest}) /*객체를 props자리에 넣어버림*/{
  return(
    <>
      <p>흰 꽃은 {kind1}, {kind2}, {rest.kind3}가 있지요</p>
    </>
  )
}

import Box from './Box.jsx'

function Flowers() {
  return(
    <Box> {/*이렇게 안에다 뭘 넣을 수 있음*/} 
      <Rose rose ="장미"/>
      <Violet violet = "바이올렛" color = "보라" />
      <WhiteFlowers  kind2 ="큰개별" kind3 ="매화" />
    </Box>
  )
}



createRoot(document.getElementById('root')).render/* body를 랜더함*/ (
    <Flowers/>
)