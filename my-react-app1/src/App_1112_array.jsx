// 陣列解構

// 建立陣列
const arr1 = ["p1","p2","p3"]


function App(){
  
  return(
  <>
  {/* 一般寫法 */}
  <p>陣列值1:{arr1[0]}</p>
  <p>陣列值2:{arr1[1]}</p>
  <p>陣列值3:{arr1[2]}</p>
  <hr />
  {/* 解構寫法 */}
  <div>解構後的陣列值1：{[0]}</div>
  <div>解構後的陣列值2：{[1]}</div>
  <div>解構後的陣列值3：{[2]}</div>
  </>
  )
}
export default App
