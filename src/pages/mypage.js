import { useInput } from "../hooks/useInput";
import { Introduce } from "../styles/mypageStyle";

const popupMessege = (messege) => {
  alert(messege);
};

const Mypage = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("", popupMessege);

  return (
    <>
      <Introduce></Introduce>
      <div>mypage</div>
      <h2>useInput</h2>
      <input type={"text"} value={inputValue} onChange={handleChange} />
      {/* <input type={"text"} value={inputValue2} onChange={handleChange2} /> */}
      <button onClick={handleSubmit}>ddd</button>
      <br />
    </>
  );
};

export default Mypage;
