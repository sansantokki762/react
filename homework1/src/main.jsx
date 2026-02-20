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
  if (age >= 30) {
    result = "섭섭하겠노" //if문은 result안에 사용할 수 없어서 밖에다 써서 이렇게 함//
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


createRoot(document.getElementById('root')).render/* body를 랜더함*/ (
    <Intro/>
)
