# skeleton-react-single-page-app

A template appropriate for publishing a react-based single page application.
Incorporates the following major elements:

- Basic project set-up with Vite
- Testing environment for react
- Single page app router set-up
- JSON web token configuration to interact with a separate nodejs back-end

## Using the template

Clone this repository, then install the dependencies.

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

NEED TO ADD - REDUCING STYLING FILES TO START POINT
