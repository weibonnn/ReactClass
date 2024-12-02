import { useEffect } from "react"
import axios from 'axios';
import "./App.css"


function App() {

  // useEffect(()=>{
  //   (async()=>{
  //     const data = await axios.get('./F-C0032-001.json');
  //     const {location} = data.data.cwaopendata.dataset;
  //     console.log(location);
  //   })
  // },[])

  return (
    <>

      <section>
          <h2>36小時天氣預報</h2>
          <h3>三十六小時天氣預報</h3>

        <div>
          <h3>臺北市</h3>
          <div>
            <p>2日</p>
            <p>上午6:00~下午6:00</p>
            <figure className="weather"><img src="./images/weatherIcon/晴時多雲.svg" alt="" /></figure>
            <p className="rains" ><img src="./images/weatherIcon/umbrella-solid.svg" alt="" />10%</p>


          </div>
        </div>
      </section>

    </>
  )
}
export default App

