function ShowClass() {

    // 推薦課程資料
    // 把資料抽離過程搬進function裡面就不用傳遞資料
  
    const classes = [
      {
        number: 1,
        imageUrl: './images/unity.jpg',
        title: "Unity 5",
        detail: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
        teacher: "王阿明",
        hr: 4,
        origprice: 1600,
        price: 1200,
  
      },
      {
        number: 2,
        imageUrl: './images/gamesalad.jpg',
        title: "GameSalad 2D遊戲製作",
        detail: "GameSalad是一種國外盛行的2D遊戲引擎，不需要寫程式，輕鬆完成一款遊戲",
        teacher: "黃阿明",
        hr: 8,
        origprice: 3200,
        price: 1600,
  
      },
      {
        number: 3,
        imageUrl: './images/gwd.jpg',
        title: "Google Web Design",
        detail: "Google Web Designer是款透過整合式的圖形和程式碼介面來設計廣告",
        teacher: "張阿明",
        hr: 8,
        origprice: 3200,
        price: 1600,
  
      }
    ];
  
    return (
      <>
        {classes.map((item) => {
          return (
            <div className="card" key={item.number}>
              <img src={item.imageUrl} alt="" />
              <h2>{item.title}</h2>
              <p className="detail" >{item.detail}</p>
              <p>講師：{item.teacher}</p>
              <p>影音課程時數：{item.hr}</p>
  
              <div className="price" >
                <p><span>原價 {item.origprice}</span>NT{item.price}</p>
                <button>付款上課去</button>
              </div>
            </div>
          )
        })
        }
      </>
    )
  }

  export default ShowClass