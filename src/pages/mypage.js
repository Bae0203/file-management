import { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { Introduce } from "../styles/mypageStyle";
import axios from "axios";

// const baseUrl = "https://jsonplaceholder.typicode.com";

const popupMessege = (messege) => {
  alert(messege);
};

const Mypage = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("", popupMessege);
  // const [inputValue2, handleChange2] = useInput("123");

  // let [data, setData] = useState([]);

  // const axiosUrl = (type) => {
  //   axios
  //     .get(baseUrl + "/" + type)
  //     .then((e) => {
  //       let a = [...e.data];
  //       console.log(a);
  //       setData([...a]);
  //       console.log("data : ", data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {
  //   axiosUrl("users");
  // }, []);

  return (
    <>
      <Introduce></Introduce>
      <div>mypage</div>
      <h2>useInput</h2>
      <input type={"text"} value={inputValue} onChange={handleChange} />
      {/* <input type={"text"} value={inputValue2} onChange={handleChange2} /> */}
      <button onClick={handleSubmit}>ddd</button>
      <br />
      {/* <h2>useAxios</h2>
      <button
        onClick={() => {
          axiosUrl("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          axiosUrl("posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          axiosUrl("todos");
        }}
      >
        Todos
      </button>
      <pre>{data}</pre> */}
    </>
  );
};

export default Mypage;
