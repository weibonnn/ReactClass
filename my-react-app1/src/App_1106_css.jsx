// 導入外部CSS檔案
import "./App.css"


// 建立新的元件
function MyComponent() {
    return (
        // 空標籤:Fragment 不會佔有實際的標籤
        <>
            <h1>React</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum unde doloremque vero nobis? Cum, quos in reiciendis commodi, soluta nisi modi possimus obcaecati minima quis consectetur totam nostrum magni!</p>
        </>
    )
}

function App() {

    // 建立變數
    const strName = "boni";
    return (
        <div>
            {/* jsx中使用javascript變數，前後加大括號{變數名稱} */}
            <h1 className="underLineColor" style={{
                color: "red",
                background: "pink",
                width: '300px',
            }}>{strName.toLocaleUpperCase()}, 午安!</h1> {/* 屬性中使用變數 */}
            
            {/* label標籤名稱對應input id效果為點擊label就會跳入輸入匡 */}
            <label className="underLineColor" htmlFor="userName">請輸入姓名：</label>
            
            {/* placeholder => 提示字 */}
            <input type="text" id="userName" placeholder={strName} />
            {/* <MyComponent /> */}
        </div>
    )
}

export default App
