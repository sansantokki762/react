  import { useState, useEffect } from "react";
 
  
const useFetch =(url) => {
    const [data, setData] = useState(null); //null은 데이터가 아직 없다는 뜻, 데이터가 들어오면 setData로 업데이트됨//

  useEffect(() => {
    fetch(url) //데이터 가져오기//
    .then((res) => res.json())//가져온 데이터를 json으로 변환//
    .then((data) => setData(data));//데이터 바꿔줌//
  }, [url]);

    return [data];
};

export default useFetch;
