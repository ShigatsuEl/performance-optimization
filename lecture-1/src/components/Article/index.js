import React from "react";

import "./index.css";

function zeroPad(value, len) {
  const str = "0000000000" + value.toString();
  return str.substring(str.length - len);
}

/* 파라미터 참고: https://unsplash.com/documentation#supported-parameters */
function getParametersForUnsplash({ width, height, quality, format }) {
  return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
}

/*
 * 파라미터로 넘어온 문자열에서 일부 특수문자를 제거하는 함수
 * (Markdown으로 된 문자열의 특수문자를 제거하기 위함)
 * */
function removeSpecialCharacter(str) {
  const removeCharacters = [
    "#",
    "_",
    "*",
    "~",
    "&",
    ";",
    "!",
    "[",
    "]",
    "`",
    ">",
    "\n",
    "=",
    "-",
  ];
  let _str = str;
  let i = 0,
    j = 0;

  for (i = 0; i < removeCharacters.length; i++) {
    j = 0;
    while (j < _str.length) {
      if (_str[j] === removeCharacters[i]) {
        _str = _str.substring(0, j).concat(_str.substring(j + 1));
        continue;
      }
      j++;
    }
  }

  return _str;
}

function Article(props) {
  const createdTime = new Date(props.createdTime);
  return (
    <div className={"Article"}>
      <div className={"Article__summary"}>
        <div className={"Article__summary__title"}>{props.title}</div>
        <div className={"Article__summary__desc"}>
          {removeSpecialCharacter(props.content)}
        </div>
        <div className={"Article__summary__etc"}>
          {createdTime.getFullYear() +
            "." +
            zeroPad(createdTime.getMonth() + 1, 2) +
            "." +
            zeroPad(createdTime.getDate(), 2)}
        </div>
      </div>
      <div className={"Article__thumbnail"}>
        {/**
         * 이미지 사이즈 최적화 -> CDN을 이용한다.
         * CDN = 물리적 거리의 한계를 극복하기 위해 사용자와 가까운 곳에 컨텐츠 서버를 두는 기술
         * 예를 들어 미국에 있는 서버에서 이미지를 다운받으려 하면 한국까지의 거리 때문에 다운로드하는 시간이 매우 길어질 것이다.
         * 여기서 미국에 있는 서버를 미리 한국에 서버를 복사해 한국에 있는 사용자들이 이미지를 다운받을 때 한국에 있는 서버로부터 다운받을 수 있도록 한다.
         * Image CDN은 일반 CDN과는 조금 다른데 사용자에게 이미지를 전송하기 전에 특정 형태로 가공하여 사용자에게 전달하게 된다.
         * 이 강의에서는 CDN을 직접 구축하지 않고 미리 구축되어 있는 CDN 서버 중 하나인 Unsplash로부터 API를 이용하여 사용한다.
         */}
        {/* <img src={props.image + getParametersForUnsplash({width: 1200, height: 1200, quality: 80, format: 'jpg'})} alt="thumbnail" /> */}
        <img
          src={
            props.image +
            getParametersForUnsplash({
              width: 240,
              height: 240,
              quality: 80,
              format: "jpg",
            })
          }
          alt="thumbnail"
        />
      </div>
    </div>
  );
}

export default Article;
