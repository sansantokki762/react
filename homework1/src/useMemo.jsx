import { createRoot } from "react-dom/client";
import { useState } from "react";
import { useMemo } from "react";


const heavyCalculation = (num) => {
  console.log("계산중")
  for(let i = 0; i<3000000000; i++) {
    num += 1; 
  }

  return num;
};

function App13() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([])

  const calculation = useMemo( () =>heavyCalculation(count), [count]); 
  //카운트 값이 병랬을 때만 이거 사용// 

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "새로운 할 일"]) 
  }; 

  return (
    <div>
      <div>
        <h2>나의 할 일 (usememo 사용X)</h2>
        {todos.map((todo, index) => { 
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>할 일 추가</button>
      </div>
      <hr />
      <div>
        count: {count} <button onClick={increment}>+</button>
      </div>
    </div>  
  )
}




createRoot(document.getElementById('root')).render (
 <App13/>
);