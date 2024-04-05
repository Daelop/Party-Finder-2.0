## References to Dependencies for
# Party Finder

## Introduction

Party Finder uses a number of libraries, frameworks, and packages. This document lists all of these along with an explanation of how they are used and a link to their documentation.

## PfApi

### Dependencies
- [Axios](https://axios-http.com/docs/intro) - Axios is a promise-based HTTP client for the browser and Node.js. It provides a simple API for making HTTP requests and supports a wide range of features, including automatic transformation of JSON data, error handling, and protection against XSRF. PfApi uses Axios to perform complex backend operations that require multiple fetch requests.
- [Cookie-Parser](https://www.npmjs.com/package/cookie-parser) - Cookie-Parser is a middleware which parses cookies attached to the client request object. It allows you to access cookie data in a convenient way. PfApi uses Cookie-Parser to parse cookies attached to requests so their content can be used.
- [DotENV](https://www.npmjs.com/package/dotenv) - DotENV is a zero-dependency module that loads environment variables from a .env file into process.env. It helps in setting up environment-specific configurations. PfApi uses DotENV to safely store sensitive variables. 
- [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building web applications by providing a simple API for routing, middleware, and server-side rendering. Most parts of PfApi rely on Express in some capacity.
- [Mongoose](https://mongoosejs.com/docs/) - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straight-forward, schema-based solution to model your application data and includes built-in type casting, validation, query building, and business logic hooks. PfApi uses Mongoose to manage data in a MongoDB database.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Nodemon is a utility that monitors for any changes in your source code and automatically restarts your server. It's used during development to keep your server up-to-date with your code changes. PfApi uses Nodemon during development to save time on restarting the server.
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - Swagger UI Express creates a set of Swagger UI documentation pages from a Swagger JSON or YAML file. It allows you to visualize and interact with your API’s resources without having any of the implementation logic in place. PfApi uses Swagger UI Express for documentation.

## Party Finder

### Dependencies
- [Fontsource Roboto](https://www.npmjs.com/package/@fontsource/roboto) - Fontsource Roboto is a font. It is currently unused in Party Finder but may be used in the future.
- [Emotion](https://emotion.sh/docs/introduction) - Emotion is a library that allows users to write CSS styles in JavaScript. Party Finder uses it for this purpose.
- [MUI](https://mui.com/material-ui/getting-started/) - MUI is a component library that contains customizable UI components. Many UI components in Party Finder are sourced from MUI.
- [TanStack Form](https://tanstack.com/form/latest/docs/overview) - TanStack Form is a library that simplifies forms in React. It handles state changes and submissions for all of Party Finder's forms.
- [Next.JS](https://nextjs.org/docs) - Next.JS is a React frame work primarily used for it's ability to render components server-side. The entirety of Party Finder's front end is built using Next.JS
- [React/React-DOM](https://react.dev/) - React is a JavaScript library for building user interfaces, and React-DOM is a package that provides the integration between React and the browser's Document Object Model (DOM). React allows you to create reusable UI components and efficiently update and render them when the underlying data changes. React-DOM is responsible for rendering these components into the actual HTML elements in the browser. Party Finder is built in React using the Next.JS framework.
- [React-Cookie](https://www.npmjs.com/package/react-cookie) - React-Cookie is a package that provides a simple API for managing cookies in React applications. Cookies are small pieces of data stored on the client-side, typically used for session management, user authentication, and tracking user preferences. React-Cookie simplifies the process of setting, getting, and deleting cookies in a React application by providing convenient methods and hooks. Party finder uses React-Cookie to read the Discord Authentication token stored in the client's cookies.

### Dev Dependencies

- [ESLint](https://eslint.org/docs/latest/) - SLint is a popular JavaScript linter that helps developers identify and fix code errors, enforce coding conventions, and maintain consistent code quality. It analyzes your JavaScript code for potential issues, such as syntax errors, unused variables, and code style violations. Party Finder uses ESLint to catch errors during development.
- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript is a statically typed superset of JavaScript developed by Microsoft. It enhances JavaScript by adding static types and other features like interfaces, enums, and generics. Party Finder is written in typescript.

## External APIs

- [Discord](https://discord.com/developers/docs/intro) - The Discord API is used to authenticate users using OAuth2.
- [MongoDB Atlas](https://www.mongodb.com/docs/atlas/) - PfApi utilizes a MongoDB Atlas database to store all of it's data.