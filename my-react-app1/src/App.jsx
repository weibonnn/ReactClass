import "./App.css"
import ShowClass from "./ShowClass"
import ShowContent from "./ShowContent"

function App() {


  return (
    <>
      <header>
        <div id="banner">
          <img src="./images/banner.jpg" alt="頁首廣告" />
        </div>
      </header>
      <main>
        <section id="feature">
          <ShowContent />
        </section>

        <div id="mainTitle">
          <h2>讓學習成為一種習慣</h2>
        </div>

        <section id="recommendClass">
          <h2 className="rec">推薦課程</h2>
          <div id="recommend">

            <ShowClass />

          </div>
        </section>
      </main>
      <footer><h2>尤御維</h2></footer>

    </>
  )
}
export default App

