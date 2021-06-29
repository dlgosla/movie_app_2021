import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// 컴포넌트 : html을 반환하는 함수

ReactDOM.render(
  //컴포넌트를 사용할 때 쓰는 방법
  //리액트는 컴포넌트를 사용해서  html처럼 작성하려는 경우에 팔요
  // 자바스크립트와 html 사이의 이런 조합을 jsx라고 부름

  //리액트 어플리케이션은 한번에 하나의 컴포넌트만 랜더링할 수 있음
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('potato')
);


