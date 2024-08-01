# Namste React

# parcel

-Dev Build
-Local Server
-HMR =Hot Module Replacement
-File Watching Algorithm-written in c++
-caching-faster builds
-Image Optimization
-minification of file
-bundling
-differential bundling --support older version browser
-compress
-tree shaking-remove unused code

# FooDWallah

/\*\*\*

-
- Header
- --Logo
- --NavItems
- Body
- --Search
- --RestaurantContainer
-     --RestaurantCard
-         --Img
-         --Name of res, star Rating,cuisine,delivery time
- Footer
- --Copyright
- --Links
- --Address
- --Contact
- \*/

 TWO TYPES OF IMPORT & EXPORT

 --Default Export/Import

 export default component;
 import component from "path";

 --Named Export/Import

 export const component
 import {component} from "path";

 # React hooks
 {Normal Javascript  utilities function }
  --useState() - SuperPowerful state variables in react
  --useEffect()

  # Redux Toolkit
  -Install @reduxjs/toolkit and react-redux
  -build our store
  -connect our store to our app
  -slice(cartSlice)
  --dispatch(action)


  # Types of Testing (developer)
  -unit testing
  -Integration testing
  -End to end testing (e2e testing)

  # setting up testing in our app

  -intall react testing libraray
  --install jest
  --intall babel dependencies
  --configure babel
  --configure parcel config to disable default babel transilation
  --jest configuration
  jest --npx jest --init
  instsll jsdom library
  install @babel.preset-react ---to make jsx work in test cases
  include @babel/preset-react inside my babel config
  install @testing-library/jest-dom