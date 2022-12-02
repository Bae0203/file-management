import React, { useState, useEffect } from "react";
import axios from "axios";
/*
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
*/
const Axios = () => {
  const [ad, bd] = useState([]);
  /*
  useEffect(() => {
    AxiosContext(bd);
  }, []);
  */
  return (
    <>
      <h2>Axios</h2>
      {/* {ad.map((e) => axiosData(e))} */}
    </>
  );
};

export default Axios;

const axiosData = (e) => {
  return (
    <>
      <h2>{e.name}</h2>
      <p>userE-mail : {e.email}</p>
      <p>userCompany : {e.company.name}</p>
    </>
  );
};
