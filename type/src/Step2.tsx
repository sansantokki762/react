type StringProps /*이거 이름 아무거나 상관X*/ = {
  name: string; // 이렇게해서 데이터 타입 지정.//
};

function Step2({ name }: StringProps) {
  return <h2>안녕하세요 {name} 님</h2>;
}

export default Step2;
