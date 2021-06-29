import React from "react";
//import PropTypes from "prop-types"
//컴포넌트 재사용가능
//컴포넌트로 정보를 보낼 수 있음
//jsx = html + js

class App extends React.Component{

  state = {
    isLoading : true
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000);
  }

  /*
  //데이터가 변하기 때문에
  // 바꾸고 싶은 데이터를 넣는 것
  state = {
    count : 0 

  };

  //setstate를 할 때 마다 새로운 스테이트와 함께 랜더 함수를 호출
  //매번 다시 랜더할 거얌 setstate를 했을 때만
  add = () => {
    this.setState(current => ({count: current.count + 1 }))
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1 }))
  };
  */

  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  
  }

  /*
  //자동실행
  //클래스 컴포넌트가 state를 가지기 땜에 좋음
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
  */

}
/*
function App() { //fuction component
  return (
      //dish는 오브젝트
    <div> 
      
    </div> //부모 컴포넌트에서 자식 컴포넌트로 많은 프로퍼티를 보낼 수 있음

  );
  }
  */
export default App;
