# skeleton-react-single-page-app

A template appropriate for publishing a react-based single page application.
Incorporates the following elements:

- Basic project set-up with Vite
- Testing environment for react
- Single page app router set-up
- JSON web token configuration to interact with a separate nodejs back-end

## Using the template

Clone this repository.

```git
git clone <SSH code>
```

Then install the dependencies.

```git
npm install
```

## Step-by-step guide of how this template was created

### Basic project set-up

From within the project folder, create a react app using Vite, and install the npm dependencies

```bash
npm create vite@latest ./ -- --template react
npm install
```

Update the title in index.html to the project name.

### Installing Prop-Types

Install the npm package

```bash
npm install --save prop-types
```

### Installing testing elements using Vitest

(Note: revisit this when more familiar with react testing)

These [instructions](https://www.robinwieruch.de/vitest-react-testing-library/) explain how to setup Vitest, the key stages summarised below.

1. Install vitest as a development dependency

```bash
npm install --save-dev vitest
```

2. Add a test script in **package.json**

```js
 "scripts": {
    "test": "vitest",
  },
```

3. Install jsdom to enable testing of HTML in Vitest.

```bash
npm install --save-dev jsdom
```

4. Include it in **vite.config.js**.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

5. Install the React Testing Library.

```bash
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

6. Add a test setup file in tests/setup.js with the following content:

```js
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

7. (CHECK THIS IS NECESSARY) Add the test setup in **vite.config.js**.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
```

8. A final install to enable simulating user interactions

```bash
npm install @testing-library/user-event --save-dev
```

### Tidying up main, index and css files from react start setup

Replace the **App.jsx** content with:

```js
import "./App.css";

function App() {
  return <>Hello World</>;
}

export default App;
```

Need to add: reducing styling to a start point for index.css and App.css

### Adding a basic react-router start point

Install the react-route package.

```git
npm install react-router-dom
```

This follows the [Odin Project react router guide](https://www.theodinproject.com/lessons/node-path-react-new-react-router).

Create **routes.jsx** (see content of src/routes.jsx) to define the routes array

Amend **main.jsx** to configure the routes.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Added a number of components which demonstrate the routing, with child components, dynamic segments, invalid route error pages:

- **ExampleRoute.jsx**
- **Default.jsx**
- **Child1.jsx**
- **Child2.jsx**
- **DynamicSegment.jsx**
- **ErrorPage1.jsx**
- **ErrorPage2.jsx**

Next: authorization
Next: useOutletContext to pass data from a parent to a component rendered by an outlet (child) (see shopping cart and odin guide)
Next: implementing protected / authorised routes using <Navigate />
