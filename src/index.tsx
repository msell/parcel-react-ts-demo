import React from "react";
import { render } from "react-dom";
const Foo = React.lazy(() => import("./Foo"));

const App: React.FC = (): JSX.Element => {
  return (
    <React.Suspense fallback={<></>}>
      <div>
        <h1>Hi Parcel 📦</h1>
        <p>this was easy</p>
        <Foo />
      </div>
    </React.Suspense>
  );
};

render(<App />, document.getElementById("app"));
