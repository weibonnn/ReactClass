import "./App.css"
import ShowClass from "./ShowClass"
import ShowContent from "./ShowContent"

function ShowContent({ arrData }) {

  return (
    <>
      {arrData.map((item) => {
        return (
          <div className="featureList" key={item.id}>
            <h2><strong>{item.title}</strong></h2>
            <p>{item.desc}</p>
          </div>
        )
      })
      }
    </>
  )
}



// function ShowClass() {

//   // 推薦課程資料
//   // 把資料抽離搬進function裡面就不用傳遞資料

//   const classes = [
//     {
//       number: 1,
//       imageUrl: './images/unity.jpg',
//       title: "Unity 5",
//       detail: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
//       teacher: "王阿明",
//       hr: 4,
//       origprice: 1600,
//       price: 1200,

//     },
//     {
//       number: 2,
//       imageUrl: './images/gamesalad.jpg',
//       title: "GameSalad 2D遊戲製作",
//       detail: "GameSalad是一種國外盛行的2D遊戲引擎，不需要寫程式，輕鬆完成一款遊戲",
//       teacher: "黃阿明",
//       hr: 8,
//       origprice: 3200,
//       price: 1600,

//     },
//     {
//       number: 3,
//       imageUrl: './images/gwd.jpg',
//       title: "Google Web Design",
//       detail: "Google Web Designer是款透過整合式的圖形和程式碼介面來設計廣告",
//       teacher: "張阿明",
//       hr: 8,
//       origprice: 3200,
//       price: 1600,

//     }
//   ];

//   return (
//     <>
//       {classes.map((item) => {
//         return (
//           <div className="card" key={item.number}>
//             <img src={item.imageUrl} alt="" />
//             <h2>{item.title}</h2>
//             <p className="detail" >{item.detail}</p>
//             <p>講師：{item.teacher}</p>
//             <p>影音課程時數：{item.hr}</p>

//             <div className="price" >
//               <p><span>原價 {item.origprice}</span>NT{item.price}</p>
//               <button>付款上課去</button>
//             </div>
//           </div>
//         )
//       })
//       }
//     </>
//   )
// }


function App() {

  // 資料抽離
  // 特色區資料
  const contentData = [  /* 從{}改成[]，從物件改成陣列 */
    {
      id: 1,
      title: "教學影音",
      desc: "近期最新提供的是教師目前最需要的線上教學怎麼做。教育部邀請教師團隊共製作7支影片。"
    },
    {
      id: 2,
      title: "良性互動",
      desc: "近期最新提供的是教師目前最需要的線上教學怎麼做。教育部邀請教師團隊共製作7支影片。"
    },
    {
      id: 3,
      title: "趨勢分享",
      desc: "近期最新提供的是教師目前最需要的線上教學怎麼做。教育部邀請教師團隊共製作7支影片。"
    },
  ]
  return (
    <>
      <header>
        <div id="banner">
          <img src="./images/banner.jpg" alt="頁首廣告" />
        </div>
      </header>
      <main>
        <section id="feature">
          <ShowContent arrData={contentData} /> 
          {/* 把contentData資料傳遞去ShowContent */}

          {/* 陣列在JSX裡必須要有KEY(資料要編號) */}
          {
            // contentData.map((item) => {
            //   return (
            //     <>
            //       <div className="featureList" key={item.id}> 
            //         <h2><strong>{item.title}</strong></h2>
            //         <p>{item.desc}</p>
            //       </div>
            //     </>
            //   )
            // })
          }

          {/* <div className="featureList">
            <h2><strong>{contentData.data1.title}</strong></h2>
            <p>{contentData.data1.desc}</p>
          </div>
          <div className="featureList">
            <h2><strong>{contentData.data2.title}</strong></h2>
            <p>{contentData.data2.desc}</p>
          </div>
          <div className="featureList">
            <h2><strong>{contentData.data3.title}</strong></h2>
            <p>{contentData.data3.desc}</p>
          </div> */}
        </section>
        <div id="mainTitle">
          <h2>讓學習成為一種習慣</h2>
        </div>

        <section id="recommendClass">
          <h2 className="rec">推薦課程</h2>
          <div id="recommend">

            <ShowClass />

            {/* <div className="card">
              <img src={classes.class1.imageUrl} alt="" />
              <h2>{classes.class1.title}</h2>
              <p className="detail">{classes.class1.detail}</p>
              <p>講師：{classes.class1.teacher}</p>
              <p>影音課程時數：{classes.class1.hr}</p>

              <div className="price">
                <p><span>原價 {classes.class1.origprice}</span>NT{classes.class1.price}</p>
                <button>付款上課去</button>
              </div>
            </div>
            <div className="card">
              <img src={classes.class2.imageUrl} alt="" />
              <h2>{classes.class2.title}</h2>
              <p className="detail">{classes.class2.detail}</p>
              <p>講師：{classes.class2.teacher}</p>
              <p>影音課程時數：{classes.class2.hr}</p>

              <div className="price">
                <p><span>原價 {classes.class3.origprice}</span>NT{classes.class3.price}</p>
                <button>付款上課去</button>
              </div>
            </div>
            <div className="card">
              <img src={classes.class3.imageUrl} alt="" />
              <h2>{classes.class3.title}</h2>
              <p className="detail">{classes.class3.detail}</p>
              <p>講師：{classes.class3.teacher}</p>
              <p>影音課程時數：{classes.class3.hr}</p>

              <div className="price">
                <p><span>原價 {classes.class3.origprice}</span>NT{classes.class3.price}</p>
                <button>付款上課去</button>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      <footer><h2>尤御維</h2></footer>

    </>
  )
}
export default App

