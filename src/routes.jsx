import App from "./App";
import ExampleRoute from "./ExampleRoute";
import Default from "./Default";
import Child1 from "./Child1";
import Child2 from "./Child2";
import DynamicSegment from "./DynamicSegment";
import ErrorPage from "./ErrorPage";
import ErrorPage2 from "./ErrorPage2";

// create the configuration for the router
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dynamic-segment/:segmentId",
    element: <DynamicSegment />,
  },

  {
    path: "example-route",
    element: <ExampleRoute />,
    errorElement: <ErrorPage2 />,
    // children rendered as nested components e.g. example-route/child1
    children: [
      // renders when there are no children
      { index: true, element: <Default /> },
      {
        path: "child1",
        element: <Child1 />,
      },
      {
        path: "child2",
        element: <Child2 />,
      },
    ],
  },
];

export default routes;
