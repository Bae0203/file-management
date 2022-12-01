import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosContext = (set) => {
  const ServerUrl = "https://jsonplaceholder.typicode.com/users";
  axios
    .get(ServerUrl)
    .then((e) => {
      let a = e.data;
      console.log("a : ", a);
      set(a);
    })
    .catch((e) => {
      console.log("연결 실패", e);
    });
};

const Axios = () => {
  const [ad, bd] = useState([]);
  return (
    <>
      <button
        onClick={() => {
          AxiosContext(bd);
        }}
      >
        d
      </button>
    </>
  );
};

export default Axios;
