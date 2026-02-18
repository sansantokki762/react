import { useState } from 'react'
import './App.css'

function App() {
  let post = "강남 우동 맛집"
  let [글제목,b] = useState("gay 안경 추천")
  let [logo,setLogo] = useState("react_blog")
  let [num,setNum] = useState([0, 0, 0, 0, 0, 0])

  function change따봉(n) {
    let copy = [...num];
    copy[n] = copy[n] + 1
    console.log(copy)
    setNum(copy)
  }

  return (
    <div className='App'>
      <Header logo={ logo } />
      {num.map((value, index) => {
        return <MyList 글제목={index} tap={() =>  { change따봉(index) } } num={value} />
      })}
    </div>
  )
}

function Header({logo}) {
  return (
    <div className='black-nav'>
      <h4>{logo}</h4>
    </div>
  )
}

function MyList({글제목, tap, num}) {
  return (
    <div className='list'>
      <h4>{글제목} <span onClick={ tap }>👍</span> {num} </h4> 
      <p>2월 17일 발행</p>
    </div>
  )
}

export default App
