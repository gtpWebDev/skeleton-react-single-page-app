import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>
        <Link to="example-route">Example Route Page</Link>
      </p>
      <p>
        <Link to="dynamic-segment/1">Dynamic Segment/1 Page</Link>
      </p>
      <p>
        <Link to="dynamic-segment/2">Dynamic Segment/2 Page</Link>
      </p>
    </>
  );
}

export default App;
