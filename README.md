# skeleton-react-single-page-app

A template appropriate for publishing a react-based single page application.
Incorporates the following elements:

- Basic project set-up with Vite
- Testing environment for react
- Single page app router set-up
- JSON web token configuration to interact with a separate nodejs back-end

## Using the template

Clone this repository.

```bash
git clone <SSH code>
```

Then install the dependencies.

```bash
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

### Add some src sub-directories for project structure

**lib** - for all utility
**constants** - self explanatory

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

### Add basic routes using react-router

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

Add the components to correspond to the route structure:

- **Home.jsx**
- **Register.jsx**
- **Login.jsx**
- **Dashboard.jsx**
- **ErrorPage.jsx**
- **ScrollToTop.jsx** - a useful addition to ensure user scrolls to top on using a route

### Add front-end handling of authentication using JSON Web Token strategy

Enables the following fundamental elements:

1. registering a new user - adding them to the back-end user database
2. logging in a user - checking the credentials agains the back-end user database
3. storing JWT in local storage - used to authorize all requests to the backend

#### Install axios and add some basic axios functions

```bash
npm install axios
```

Added **lib/axiosUtility.js** with some generalised axios functionality - for gets, posts, etc. and also with interceptors - here, mainly pre-request functions to add the JSON Web Token to the request header.

#### Set-up handling of local storage with Auth Service class

Install moment, which manipulates dates (guide used this, no sense in changing)

```bash
npm install moment
```

Added **lib/AuthService.js** which adds and removes the JWT details to local storage, which then gets added to requests using the interceptors.

#### Streamline backend server requests

Approach to server requests:

1. Structured server responses with success: true/false and either data or an errorMsg
2. Axios request functions, using standard Axios structure to generate data and errors in a useful form.
3. Custom hook to deliver data, error and loaded state to component.
4. Component to use the data or error information.

Add **useGetBackendData.js**

## Possible additions to skeleton

- Would still benefit from a more consistent, structured approach across backend and frontend to the structure of http responses - successful and error
- Would like to add an example of useOutletContext to pass data from a parent to a component rendered by an outlet (child) (see shopping cart and odin guide)
- likely sensible to user a more general application of useContext
