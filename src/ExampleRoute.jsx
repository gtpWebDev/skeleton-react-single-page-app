import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ExampleRoute = () => {
  return (
    <div>
      <h1>Example route page</h1>
      {/* The Outlet component renders any defined children in the route */}
      <Outlet />
      <hr />
      <p>
        <Link to="./child1">Child 1 Page</Link>
      </p>
      <p>
        <Link to="./child2">Child 2 Page</Link>
      </p>
      <p>
        <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default ExampleRoute;
