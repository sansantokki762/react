import { useState } from "react";

function Step4() {
  const [name, setName] = useState<string>(""); //데이터 타입을 usestate에서 지정.//

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 적어주세용"
        value={name}
        onChange={(e) => setName(e.target.value)} // e는 일어나는 모든 이벤트를 의미, target.value는 말 그대로 대상의 값으로 받음.
        //  만약 "안녕"이라고 치면 setName("안녕")이됨//
      />
      <p>당신의 이름은 {name}입니다.</p>
    </div>
  );
}

export default Step4;
