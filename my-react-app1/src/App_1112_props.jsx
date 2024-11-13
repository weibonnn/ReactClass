// 子組件 props寫法
// function MyComponent(props){
//   console.log(props)
//   props.c(); // 呼叫c屬性
//   return <>
//   <div>我是子組件</div>
//   <div>{props.a}</div> {/* 用props. 帶出後面元素 */}
//   <div>{props.b}</div>
//   </> 
  
// }

// 子組件使用「物件解構賦值」寫法
// 解構賦值的名稱必須一樣，順序可以不同
function MyComponent({a,b="我是預設值b",c}){
  /* 已經被解構賦值就不需要打props. */
  c();
  return <>
  <div>我是子組件</div>
  <div>{a}</div> {/* 省略props. */}
  <div>{b}</div>
  
  </> 
}


// 父組件
function App() {
  return (
    <>
    {/* 回調函式 ＝ callback function */}
    {/* 傳遞屬性a給MyComponent */}
     <MyComponent 
     a="我是屬性a" 
     //b="我是屬性b" // 傳遞後就會蓋掉預設值
     c={()=>{console.log("我是方法c")}}/> 
     {/* 
     
     props = propties = 屬性 
     作用：從父組件傳遞資料到子組件（由上往下傳遞）

     撰寫React時，組件之間需要溝通時（也就是需要傳遞資料時）
     props就可以做到這件事
     */}
    </>
  )
}

export default App
