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



After the Pages folder, we have files like AboutUs.js,Articles.js, ContactUs.js, HomePage.js,Main.js,etc.

The AboutUs.js contains the codes neccessary to display the about us section on the hompage of our app.

The Articles.js contains the codes neccessary to display the collections of articles. You can see the file output after clicking resources on the nav or footer of the site

The ContactUs.js contains the codes neccessary to display the Contact US section on the hompage of our app.

The Main.js contains the codes necessary to display the first section you see when you go to the app

The HomePage.js is a file that houses AboutUs.js,Articles.js, ContactUs.js and main.js files

Below that you have an "images" folder which is responsible for the housing of all the images we used throughout the project.

After that, we have the App.css files, this file contains all our stylings (css) for the whole project.

Then we have App.js, this file is the root entry point in a react component, it houses all other components that are used in a react app. 

Then we have the Index.js file, this file renders out all the javascript codes we have written in the appication.

Then service workers,Service workers are scripts that are run by the browser of a client. They do not have any direct relationship with the DOM. They provide many out of the box network-related features. Service workers are the foundation of building an offline experience.
We dont need it here, its just part of the boilerplate code thats gets generated when you use "create react app" command to create a react app.

Then we have .gitignore files, this file consists of name of folders or files that we do not want to include in our github repo. when a file is added in the .gitignore file, whenever that project is been pushed to a github repo, such file wont be present in the github. One advantage of this is that, we can keep a file where we save some credentials for the app in a .gitignore, so that it doesnt go live on github.

Then, the package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.


Then the package.json is a file, that gives  us information about the project, like the name of the project,the version,the scripts runnable in the project and also mentions other libaries that are used in the project.



Now, lets dive into all the components in the src folder.

1. Navbar Component : 

On Line 1, we imported React from the 'react
 library. Now this import can be placed at any line as long as it is imported before you create a component declaratiom. but in most apps, it  is always imported as the first thing.

 On the second line, i imported "Link" from the 'react-router-dom' library. Now notice how it is been imported, Link is kept in curly braces because the "Link" we are importing is not the only toolkit present in the react-router-dodm libary, we have some other toolkits like BrowserRouter, Switch,etc present in the react-router-dom too and we used them in our App.js file. Now, the react-router-dom is a library that helps to to navigate between components in a react app. so instead of using the <a href="#"></a>
as we do in our traditional html file, we use <Link to =""></Link>

In Line 3 downward, we created a Navbar component with an arrow function and in the body of the function, we wrote  the codes for the navbar with semantic html (i mean the header and nav tahs i used) and some bootstrap grid system classes. Read more about bootstrap grid here https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp.
At the end of the component, i wrote "export default NavBar". I did that because I know I will have to import the NavBar file in other components. If you dont export your component before importing them, you'd get an error.


2. Footer component:

This component is identical to the navbar component, so I am going to skip that.

in Pages folder, we have
3. Articles.js - Article8.js :

On Line 1,I imported React,
On Line 2 , I imported the image related to the article from the images folder.
On lINE 3, I imported Link from react-router-dom, because I have a button that says "newer" which i want to take users to the article2 when clicked upon.
At the end of the file, its  been exported.


4. AboutUs.js

On Line 1, React was imported, then on Line 2, the image needed was imported from the images folder.

Then the component was created and exported at the end of the file.


5. ContactUs.js :
I imported react on Line 1 as usual, I didnt need any images here because this component displays the contact us form on the homepage of the site and  we did not need any image there.

Now, inside the Component, I created a function on line 4-7 named handleSubmit, this function is invoked when the send message button is clicked. The function when invoked creates an alert and it is shown on the page.

on Line 18, the form has a property named onSubmit and it is equated to the name of the function handleSubmit I created above. This is what makes the alert pop up when the button is clicked.

On line 52, i exported the component as I need to import it other components















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
