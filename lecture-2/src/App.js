import React, { lazy, Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import InfoTable from "./components/InfoTable";
import SurveyChart from "./components/SurveyChart";
import Footer from "./components/Footer";
// import ImageModal from './components/ImageModal'

function lazyWithPreload(importFunc) {
  const Component = lazy(importFunc);
  Component.preload = importFunc;
  return Component;
}

// Lazy Loading의 단점도 존재!
// -> 최초 페이지를 띄울 때는 속도가 빨라지지만 모달을 띄울 때는 오히려 성능이 더 느려진다.
// -> 컴포넌트 Preload를 사용하여 해결한다.
const LazyImageModel = lazyWithPreload(() => import("./components/ImageModal"));

function App() {
  const [showModal, setShowModal] = useState(false);

  // 2. 최초 페이지가 로드가 되고 모든 컴포넌트가 마운트가 끝났을 때 컴포넌트를 로딩한다.
  useEffect(() => {
    // const component = import("./components/ImageModal");
    LazyImageModel.preload();
    const img = new Image();
    img.src =
      "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800";
  }, []);

  // 1. 버튼 위에 마우스를 올려 놨을 때 컴포넌트를 로딩한다.
  //   const handleMouseEnter = () => {
  //     const component = import("./components/ImageModal");
  //   };

  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
        // onMouseEnter={handleMouseEnter}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModel
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
