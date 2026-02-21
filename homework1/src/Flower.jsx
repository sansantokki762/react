function Flower (props) { //props를 통해서 반칸에 원하는 거 넣을 수 있음.

  return(
<div>
    <p>나는 {props.color} 꽃이다</p>
    <p> {props.color} 꽃이 {props.amount}송이가 있다</p> {/*두 개 이상 넣어도 괜츈*/}

</div> 
   )
}

export default Flower; //내보냄