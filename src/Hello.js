import React from "react";

function Hello(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>; //app에 있는 name 함수 가져오게하는 props
}

Hello.defaultProps = {
  name: "이름없음"
  // props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면
  //컴포넌트에 defaultProps 라는 값을 설정
};

export default Hello;
