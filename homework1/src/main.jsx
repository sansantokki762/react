import { createRoot } from 'react-dom/client'

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



createRoot(document.getElementById('root')).render/* body를 랜더함*/ (
    <Human/>
)
