function ShowContent() {

// 資料抽離
// 特色區資料
  const contentData = [  
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
        {contentData.map((item) => {
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

  export default ShowContent