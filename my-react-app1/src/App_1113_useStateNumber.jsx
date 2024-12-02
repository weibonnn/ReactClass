import { useState } from "react";
import "./App.css"


function App() {

  // 常數=> 不能變動的值
  // 在react 執行中若要改變const值，必須使用useState方法

  // const [變數名稱,更改變數的方法] = useState (初始值);
  const [num, setNum] = useState (0); // set後面加變數名稱，小駝峰命名方法（第二個字首大寫）

  function btnClick(){
    //修改num值
    setNum(num +5);
  }

  return (
    <>
      <h1>React狀態-useState方法</h1>
      {/* 在react 因為沒有下指令告訴瀏覽器這邊的『目前的值』已改變，所以才沒有變動 */}
      <h2>目前的值：{num}</h2> 
      {/* 事件綁定：使用箭頭函式 */}
      <button onClick={()=>{
        // num++;
        // 不能寫num++ 因為num++是 num=num+1 會覆蓋掉num
        setNum(num+1);

      }}>+1</button>

      {/* 事件綁定：呼叫函式 */}
      <button onClick={btnClick}>+5</button>


    </>
  )
}
export default App

