function App(){
  // 建立物件變數
  // const person ={
  //   s1: {
  //     name:"同學1",
  //     age:10
  //   },
  //   s2: {
  //     name:"同學2",
  //     age:11
  //   },
  //   s3:{
  //     name:"同學3",
  //     age:12
  //   }
  // }

  /* 多筆資料的物件解構方法1：一般寫法 */
  // const { s1 , s2 ,s3 } = person;

  /* 多筆資料的物件解構方法2：解構+展開...（其餘運算子） */
  // 資料很多筆時，只想要先看其中某項資料的時候可以使用
  // 解構s1，展開s2,s3

  // const { s1 , ...other}= person
  // console.log(s1);
  // console.log(other.s3);

  const person = {
    name:"同學1",
    age:10,
  }

  // 一般寫法
  // function showName(obj){
  //   console.log(obj);
  //   console.log(obj.name);
  //   console.log(obj.age);
  // }
  // showName(person); // 將person物件丟入 showName function

  // 解構寫法
  function showName({name,age}){
    console.log(name);
    console.log(age);
  }
  showName(person);

  return(
  <>

  {/* <div>{`同學1 姓名：${s1.name}`}</div>
  <div>{`同學3 姓名：${other.s3.name}`}</div> */}

  {/* 方法1: 一般寫法 */}
  {/* <div>第一位同學姓名：{s1.name}</div>
  <div>第一位同學年齡：{s1.age}歲</div>
  <hr />
  <div>第二位同學姓名：{s2.name}</div>
  <div>第二位同學年齡：{s2.age}歲</div>
  <hr />
  <div>第三位同學姓名：{s3.name}</div>
  <div>第三位同學年齡：{s3.age}歲</div> */}

  </>
  )
}
export default App

