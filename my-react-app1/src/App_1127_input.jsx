import { useState } from "react"


function App() {

  // 使用者名稱
  const [inputUserName, setInputUserName] = useState("我是文字方塊");

  // 縣市名
  const [selCity, setSelCity] = useState("");

  // 建立陣列
  const arrCity = [
    {
      cityName: "台北市",
      id: 1,
    },
    {
      cityName: "桃園市",
      id: 2,
    },
    {
      cityName: "新北市",
      id: 3,
    },
    {
      cityName: "台中市",
      id: 4,
    },
    {
      cityName: "台南市",
      id: 5,
    },
    {
      cityName: "高雄市",
      id: 6,
    }
  ]

  const arrList = ['html', 'css', 'js']


  // 閱讀確認
  const [check, setCheck] = useState("");

  // 複選：多個核取方塊
  const [checklist, setCheckList] = useState([]);

  // 建立函式 處理被勾選的項目
  const handleCheckList = (e) => {
    // console.log(e.target.value);
    // 使用其餘運算子保留已經被勾選的項目+目前被勾選的項目
    // 檢查是否被勾選
    if (e.target.checked) {
      // 是 => 原本已經勾選的項目加上新勾選的項目
      setCheckList([...checklist, e.target.value]);
    } else {
      // 否 => 從原本被勾選的項目中，拿掉不要的 (透過filter做)
      setCheckList(
        checklist.filter((list) => {
          return list !== e.target.value
        })
      );

    }
  }

  // 選項按鈕
  const [q1Ans, setQ1Ans] = useState('');
  const [q2Ans, setQ2Ans] = useState('');


  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱：</label>
      <input type="text" id="" username
        value={inputUserName}
        onChange={(e) => {
          console.log(`更改前：${inputUserName}`);
          setInputUserName(e.target.value);
          console.log(`更改後：${inputUserName}`);
        }}
      />{inputUserName}
      <br />

      {/* select 讀取陣列寫法 */}

      <label htmlFor="city">縣市名</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}>

        <option value="" disabled >請選擇</option>
        {
          arrCity.map((city) => {
            return <option value={city.cityName} key={city.id}>{city.cityName}</option>
          })
        }
      </select>{selCity}

      <br />

      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" id="isCheck"
        value={check}
        onChange={(e) => {
          // 處理勾選值的變化
          setCheck(e.target.checked);
        }} /> {check.toString()} {/*把布林值轉換成字串才能顯示出來 */}

      <br />

      {/* 複選：多個核取方塊 */}
      {
        arrList.map((list) => {
          return <div key={list}>
            <input type="checkbox" id={list} name="like"
              value={list} onChange={handleCheckList}

            />
            <label htmlFor={list}>{list}</label>
          </div>
        })
      }


      {/* <input type="checkbox" id="checkList1" name="like" value="HTML" onChange={handleCheckList}/>
      <label htmlFor="checkList1">HTML</label>
      <input type="checkbox" id="checkList2" name="like" value="CSS" onChange={handleCheckList}/>
      <label htmlFor="checkList1">CSS</label>
      <input type="checkbox" id="checkList3" name="like" value="JS" onChange={handleCheckList}/>
      <label htmlFor="checkList1">JS</label> */}
      <br />
      {checklist}


      {/* select 逐行寫法*/}

      {/* <label htmlFor="city">縣市名</label>
    <select name="" id="city"
      value={selCity}
      onChange={(e)=>{
        setSelCity(e.target.value);
      }}
    >
      <option value="台北市">台北市</option>
      <option value="桃園市">桃園市</option>
      <option value="新北市">新北市</option>
      <option value="台中市">台中市</option>
      <option value="台南市">台南市</option>
      <option value="高雄市">高雄市</option>
    </select>{selCity} */}

      <br />
      {/* 選項按鈕 必須要用id 配合label for 才能點擊選到 */} 
      1.最喜歡的飲料：
      <input type="radio" name="Q1" value="美式咖啡" id="Q1-1" onChange={(e)=>{
        setQ1Ans(e.target.value);
      }}/>
      <label htmlFor="Q1-1">美式咖啡</label>

      <input type="radio" name="Q1" value="拿鐵咖啡" id="Q1-2" onChange={(e)=>{
        setQ1Ans(e.target.value);
      }}/>
      <label htmlFor="Q1-2">拿鐵咖啡</label>

      <input type="radio" name="Q1" value="紅茶" id="Q1-3" onChange={(e)=>{
        setQ1Ans(e.target.value);
      }}/>
      <label htmlFor="Q1-3">紅茶</label>

      <br /><br />
      你選擇的飲料是：{q1Ans}
      
     
      <br /><br />
      2.最討厭的食物：
      <input type="radio" name="Q2" value="苦瓜" id="Q2-1" onChange={(e)=>{
        setQ2Ans(e.target.value);
      }}/>
      <label htmlFor="Q2-1">苦瓜</label>

      <input type="radio" name="Q2" value="茄子" id="Q2-2" onChange={(e)=>{
        setQ2Ans(e.target.value);
      }}/>
      <label htmlFor="Q2-2">茄子</label>

      <input type="radio" name="Q2" value="番茄" id="Q2-3" onChange={(e)=>{
        setQ2Ans(e.target.value);
      }}/>
      <label htmlFor="Q2-3">番茄</label>

      <br /><br />
      你選擇的食物是：{q2Ans}

      <br /><br />
      <button onClick={()=>{
        // 將所有次數先歸零（設為0）
        setAns1Count(0);
        setAns2Count(0);
        setAns3Count(0);

        // 統計次數

      }}>送出統計結果</button>

      {/* 顯示統計次數：
      <p>選項1次數:{ans1Count}</p>
      <p>選項2次數:{ans2Count}</p>
      <p>選項3次數:{ans3Count}</p> */}
    </>
  )
}
export default App

