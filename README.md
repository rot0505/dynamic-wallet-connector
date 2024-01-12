# About this Project

Implemented the NFT gate in two methods. Can compare the pros and cons of each method.
- using Dynamic(https://www.dynamic.xyz/) module.
- using Web3.js, @web3-react/core module.
 

## Available Scripts

In the project directory, you can run:

### `npm start`

## Screenshot
![Screenshot](snapshot.gif)

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

## Technologies & Tools

- React
- Dynamic
- Web3.js

## How to run

- Install node modules: `yarn install`
- Replace github api key in the src/config with your own access key
- Start the project: `yarn start`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project structure

```
src
├── components
│   ├── ConnectWalletButton  # WalletConnectButton Components for Web3.js Mode
│   └── RoundButton          # RoundButton Component
│
├── config                   # Define config variables
├── abi                      # Define abi file for YatNFT
├── hooks                    # Define hooks
├── pages
│   ├── Dynamic              # Dynamic Mode page
│   └── Original             # Web3.js Mode page
├── services
│   ├── api                  # normal api service
│   └── blockchain           # Blockchain handle service
```
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).