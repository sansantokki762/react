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
import { useState } from 'react'

function Flowers() {
  return(
    <Box> {/*이렇게 안에다 뭘 넣을 수 있음*/} 
      <Rose rose ="장미"/>
      <Violet violet = "바이올렛" color = "보라" />
      <WhiteFlowers  kind2 ="큰개별" kind3 ="매화" />
    </Box>
  )
}

/////////////////////////////////////////////////////////////////////////////////

//숙 5 //
function sayHelo(name) {
  alert(`${name}님, "안녕하세요"`);
}
                                      //둘은 같음//
function App() {
  const sayHi = (name, e) => {
    alert(`${name}님, "안녕하세요`)  // `로 감싸고 ${}을 해서 매개변수로 넣은 거 갇자 쓸 수 있는 거 같음.
    alert(`발생한 이벤트는 ${e.type}`)
  }

  return(
    <button onDoubleClick={(a /*얘는 이름 아무거나 하도 됨*/) => sayHi("산토끼",a)}>인사 버튼</button>
  )
}

function Apps() {
  return(
    <>
      <App/>
    </>
  )
}

//조건문//

function AdminPanel() {
  return(
    <p>관리자 페이지</p>
  )
}

function UserPanel() {
  return(
    <p>유저 페이지</p>
  )
}

 //안에서 다 정리
function Dist() {
  const isAdmin = false      //이거 일반 js라서 {}필요가 없어
                            // 틀리면 아랫쪽(else) 맞으면 윗쪽(if)
  if (isAdmin) {      
    return <AdminPanel/>
  } else {
    return <UserPanel/>
  }
}

// if문
function Dist1({isAdmin}) {
                            // 틀리면 아랫쪽(else) 맞으면 윗쪽(if)
  if (isAdmin) {      
    return <AdminPanel/>
  } else {
    return <UserPanel/>
  }
}

//삼항
function Dist2({isAdmin}) {
  return(
    <>
      { isAdmin ? <AdminPanel/> : <UserPanel/>}
    </>
  )    
  
}

//재밋는 거
function Dist3(props) {
  return(
    <>
      {props.kind && /*props.kind안에 값이 있을때만 작동*/ <p>나는 {props.kind}토끼입니다</p> }
    </>
  )
}

function DistAll() {
  return(
    <>
      <Dist/>
      <Dist1 isAdmin = {false}/>    {/*이거 jsx이라서 {}필요*/}
      <Dist2 isAdmin = {false}/>
      <Dist3 kind = "산산"/>
    </>
  )
}         


/////////////////////////////////////////////////////////////////////////////////

//숙6//

function Fllower() {

  const flowers = ["장미" , '백장미' , "바이올렛"]
//배열, 번지를 키값으로//

  const flowers1 = [
    {id:1, kind: "장미"},
    {id:22, kind: "백장미"},
    {id:333, kind: "바이올렛"},
//객체+ 키값 추가//

  ]
  return(
    <>
      <ul>
        {flowers.map( (flowers , index)=> <li key = {index}>
          {index}.나는 {flowers}입니다
        </li> )}
      </ul>
      <ul>
        {flowers1.map( (flowers1)=> <li key={flowers1.id}>나는 {flowers1.kind}입니다 </li> )}
      </ul>   
    </>
  )
}

//form1



function App1() {

  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value);
  }

  return(
    <form>
      <label>이름 입력해요:</label>
      <input type="text"
      value = {name} 
      onChange = {handleChange}  //입력할 때마다 핸들체인지 함수 실행.
      />
      <p>입력한 값:{name}</p>
    </form>
  )
}

///////////////////////////////////////////////////////////////////

//숙7//

//submit

function App2() {

  const [name , setName] = useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(name)
  }

  return(
    <form onSubmit={handleSubmit}> {/*submit 눌렀을 때 함수 호출*/}
      <label>이름 입력:</label>
      <input 
      type="text"
      value={name}
      onChange={handleChange} 
      />
      <input 
      type="submit" 
      />
    </form>
  )
}

//text area//

function App3() {

const [mytext , setMytext] = useState("")

function handleChange(e) {
  setMytext(e.target.value)
}

 return(
  <form>
    <label>갑을 입력:</label>
    <textarea                  //여기서 특이하게 textarea 하나만 씀//
      value={mytext}
      onChange={handleChange} 
    />
    <p>입력한 거:{mytext}</p>
  </form>
 )
}

///////////////////////////////////////////////////////////////

//숙8//

function App4() {
  const [flower, setFlower] = useState("rose") //초기값 지정

  function handleChange(e) {
    setFlower(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let result = `flower you chose is ${flower}`
    alert(result)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>pick a flower you like</label>
      <br />
      <label>
        <input type="radio" 
              name='flower'    //flower이라는 그룹에 속함, 체크를 하면 다른 게 체크 해제시켜줌//
              value="rose"
              checked={flower == "rose"} onChange={handleChange}/>rose         {/*체크 함으로 vlue값이 이동*/}
      </label>
      <label>
        <input type="radio" 
              name='flower'
              value="white rose"
              checked={flower == "white rose"} onChange={handleChange}/>white rose
      </label>
      <label>
        <input type="radio" 
              name='flower'
              value="violet"
              checked={flower == "violet"} onChange={handleChange}/> violet
      </label>
      <button>submit</button>
    </form>
  )
}

import Modal from './Modal.jsx'

function App5() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={ () => setOpen(true)}>Open Modal</button> {/*클릭하면 true로 바뀜*/}

      { open && /*open이 참이라면*/(
         <Modal>
          <h2>안녕하세용!</h2>
          <button onClick={ () => setOpen(false) }>Close Modal</button>
         </Modal> 
      )
    }
    </div>
  )
}


////////////////////////////////////////////////////////////
//숙9//

import Greeting from './assets/Greeting.jsx'
import { Suspense } from 'react'

function App6 () {
  return(
    <div>
      <Suspense fallback={ <div>잠시만요...</div> }> {/*딜레이가 될때 이게 뜸*/}
        <Greeting/>
      </Suspense>
    </div>
  )
}




//css//

//import "./style1.css"; // 스타일 자체를 불러 옴//
import style from "./style1.module.css"

function Style() {

  const style1 = {
    color: "#fff",
    backgroundColor: "#f00",   //밖에서 객체를 만들어서 불러도 됨//
    padding: "10px"
  }

  return(
    <>
      <h1 style={{color:'pink', backgroundColor: 'gray'}}>나는 문어</h1>  { /*객체 집어넣기*/}
      <h1 className={style.title} >sytle</h1> 
    </>
  )
}

///////////////////////////////////////////////////////////////////

//숙10//

import styles from "./button.module.css"

function Btn() {
  return(
    <>
    <button className={styles.btn}>
      sub button
    </button>
    <button className={`${styles.btn} ${styles.primary}`}> {/*이러면 살짝 복잡함*/}
      subsub buttton
    </button>
    <button className={styles.secondary}> {/*하나의 이름으로 두 개 호출*/}
      subjun button
    </button>
    <h1 className='myheader'>타이틀</h1> {/*글로벌은 이렇게 불러옴*/}
    </>
  )
}


createRoot(document.getElementById('root')).render/* body를 랜더함*/ (
    <Btn/>
)