import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import ListPage from './pages/ListPage/index'
// import ViewPage from './pages/ViewPage/index'

/**
 * Code Splitting은 코드를 분할하는 것을 말한다.
 * 페이지 별, 모듈 별로 코드를 분할하는 방법이 있고 적절하게 혼용해서 분할하기도 한다.
 * 중요한 것은 Code Splitting 의 역할은 불필요한 코드 또는 중복되는 코드가 없이 적절한 사이즈의 코드가 적절한 타이밍에 로드 되도록 하는 것이다.
 * React의 lazy는 모듈이 동적으로 로딩될 수 있도록 도와준다. Suspense는 해당 컴포넌트가 제대로 로드되지 않았을 경우 대체하여 보여줄 컴포넌트를 말한다.
 */

const ListPage = lazy(() => import("./pages/ListPage/index"));
const ViewPage = lazy(() => import("./pages/ViewPage/index"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
