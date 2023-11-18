# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Tips

type rfce enter in a component to set up function

### Casing Error when changing file name
Make sure that you have a TypeScript file open, press Ctrl+Shift+P (or Cmd+Shift+P on macOS) to open the Command Palette and type restart, then select the command "TypeScript: Restart TS server".


### Most Used Shortcuts
alt + Z - brings all characters within view
Shift+alt+down arrow - drops highlighted text down
ctrl+shift=e - show explorer / side bar of directory

### Replace Routes with outdated 'Switch'

You need to use Routes rather than Switch for react-router-dom@6. Something like this:

<!-- <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
    </Routes>
  </BrowserRouter> -->


  ### Package JSON
  <!-- "scripts": 
    "dev": "webpack --config=Scripts/config/webpack.dev.js --watch",
    "start": "react-scripts start",
    "build": "react-scripts build webpack --config=Scripts/config/webpack.prod.js",
    "test": "react-scripts test",
    "eject": "react-scripts eject" -->
    
    
### Routing issues after changing file name casing

delete 'default-development' file in node_modules>.cache
 
 ### Netlify Deploy Routing 404 Error Issue
 Add _redirects file in your public folder Write down inside file: /* /index.html 200 in my case I have no issues with my builder adding .txt extension, i'm using CRA (create react app)
 
 /* /index.html 200 