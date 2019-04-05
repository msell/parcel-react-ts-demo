import * as React from "react";
import { render } from "react-dom";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>Hi Parcel 📦</h1>
      <p>this was easy</p>
    </div>
  );
};

render(<App />, document.getElementById("app"));
