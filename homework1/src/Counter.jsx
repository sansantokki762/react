import React, { useEffect } from "react";

const Counter = (props) => {
    useEffect(() =>{
        const counter = setInterval(() =>{
            console.log("counter 동작")
        }, 1000)

        return () => {
            clearInterval(counter)
            console.log("카운터 멈춤")
        }

    },[]) //이거 안하면 매번 호출 됨.//

    return (
        <div>
            <p>카운터 동작</p>
        </div>
    )

}

export default Counter;