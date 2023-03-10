This is the website of game center that consist of 2 games that are sudiku and fou star (connect four). the website has 3 pages which are home, sudoku and four star page. 
- you can access the home page by only clicking the home menu on the header. 
- you can access the sudoku and four-star page by clicking their menu on the header and their picture on the home page.

on the sudoku page, it consists of 2 parts which is sudoku board and 5-button part. the 5 buttons are
  1. submit button: press it when finishing the sudoku board, the website will show valid or invalid of the sent board. if it's valid, the website will show the box for filling your name for saving your name and time and then sending to back-end part.
  2. restart button: press it for restarting the board (not to changing the pattern of initial board).
  3. hint button: it will add the exact number of initial number/box of the initial board when clicking. It means you can complete it easier.
  4. check button: it's realtime display when the button is activated (click again to deactivate). when it's activeted, it will show the green or red background on the boxes that have put number. the green means those boxed are right along with the sudoku conditions (it can turn to red if you put number on other boxes and they conflict with one another) and the red is otherwise.
  5. reset button: it's similar to restart button but this button will change the initial board by getting new api from the server.
  
Moreover, I integrate with back-end server (download on https://github.com/Yomost555/Game-center-backend.). there are 2 data-base files for the sudoku which are 
   1. list of full board and initial board of the sudoku.
   2. list of name and time of the player who can complete sudoku challenge.
and then I use the get request from the front-end website to get the data of the board. Plus, I use the put request to send the data of name and player to back-end part and storage them into the 2nd data-base file.



Note:
you must run the server of game-center-backend before run this game center files.\
you can access and download the server files on https://github.com/Yomost555/Game-center-backend.


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
