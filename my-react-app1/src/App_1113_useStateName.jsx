import { useState } from "react"

function App() {
  // 定義變數name與setName
  const [name, setName] = useState("王小明");
  const [name2, setName2] = useState("");

  function changeName(e){
    setName2(e.target.value);
  }

  return (
    <>
      <h2>設計一個輸入名字的欄位，並且即時顯示出來</h2>
      <hr />
      <h3>目前文字方塊的內容：{name}</h3>
      {/* value={name} 把預設值顯示在input標籤上  */}
      {/* value 跟onChange 必須要同時存在 */}
      {/* e => event 事件觸發參數 */}
      請輸入姓名1:<input type="text" value={name} onChange={(e) => {
        // console.log(e);
        setName(e.target.value);
      }} />

      <br />

      請輸入姓名2:<input type="text" value={name2} onChange={changeName}/>
      {name2}
    </>
  )
}
export default App

