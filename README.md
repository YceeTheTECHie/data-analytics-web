Hi, so lets start with the file structures.
On the left hand side, you have

the build folder
the node_modules
the public folder
the src folder (source folder)
the .gitignore file
the package-lock.json file
the package.json file
and the readme.md file

The build folder

the build folder contains the optimized build version of the app that would be uploaded to a web server. It is derived by running "npm run build" command

the node_modules folder
this contains the neccessary files and scripts needed to run the app. You can find out more by opening the folder. but remember that incorrect changes to any code in this folder could raise an error in your code.

the src folder
this houses our source codes for the app we are building.
read https://create-react-app.dev/docs/folder-structure/ to know more about folder structures in react

Now, lets open the src folder,
At the top, you wil see a components folder, i created this folder myself to put in related components together, In react.js, every part of a web app is a component, For example, assuming we decided to build our own facebook in react, we would have the user profile component, footer component, posts component,etc.

So click on the Components folder, you will see a folder named Layout and Pages.Now, My lAYOUT components consist of the header and footer. Now, One thing about this component style is that you do not need to write the code for a header or footer multiple times, just write it once, and then import the component to where ever you want to use it in another component.

Below the Layout Folder, you have the pages Folder, the pages folder contains  Article1.js up to Article8.js, these Article1.js till Article8.js contains our codes for the articles we have on the web app.










This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
