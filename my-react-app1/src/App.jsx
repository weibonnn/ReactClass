import { useEffect } from "react"
import axios from 'axios';
import "./App.css"
import { IoUmbrella } from "react-icons/io5";


function App() {

  useEffect(()=>{
    (async()=>{
      // 本地端要在web-serve伺服器下才可以執行
      // const data = await axios.get('./F-C0032-001.json');

      // json的連結必須是公開網址下的來源
      const data = await axios.get('https://weibonnn.github.io/ReactClass/F-C0032-001.json');
      //console.log(location);
      
      // locationName => 縣市名
      // elementName => Wx => 天氣概況
      // elementName => PoP => 降雨率

      // const {location} = data.data.cwaopendata.dataset;
    })()
  },[])

  return (
    <>

      <div className="wrap">
        <h2>36小時天氣預報</h2>
        {/* 一列兩欄 */}
        <div className="row">
          {/* 第一欄 */}
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">台北市</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 1列三欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="./images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="./images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="./images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* 第二欄 */}
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">台北市</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 1列三欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="./images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="./images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="./images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>



      {/* <section>
          <h2>36小時天氣預報</h2>
          <h3>三十六小時天氣預報</h3>

        <div className="content">
          <h3>臺北市</h3>
          <div>
            <p>2日</p>
            <p>上午6:00~下午6:00</p>
            <figure className="weather"><img src="./images/weatherIcon/晴時多雲.svg" alt="" /></figure>
            <p className="rains" ><img src="./images/weatherIcon/umbrella-solid.svg" alt="" />10%</p>


          </div>
        </div>
      </section> */}

    </>
  )
}
export default App

