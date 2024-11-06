
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

  return (
    <div>
      <MyComponent />
      <MyComponent />
    </div>
  )
}

export default App
