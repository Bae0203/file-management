import { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { Introduce } from "../styles/mypageStyle";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const popupMessege = (messege) => {
  alert(messege);
};

const Mypage = (type) => {
  const [inputValue, handleChange, handleSubmit] = useInput("", popupMessege);
  // const [inputValue2, handleChange2] = useInput("123");

  const [data, setData] = useState(null);

  const axiosUrl = () => {
    axios
      .get(baseUrl + "/" + type)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axiosUrl("users");
  }, []);

  return (
    <>
      <Introduce></Introduce>
      <div>mypage</div>
      <h2>useInput</h2>
      <input type={"text"} value={inputValue} onChange={handleChange} />
      {/* <input type={"text"} value={inputValue2} onChange={handleChange2} /> */}
      <button onClick={handleSubmit}>ddd</button>
      <br />
      <h2>useAxios</h2>
    </>
  );
};

export default Mypage;
