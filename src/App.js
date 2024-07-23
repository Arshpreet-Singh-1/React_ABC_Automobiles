/*
create react app

npx create-react-app abc-automobiles
cd abc-automobiles
npm start

*/

/*

functional Components 
javascript functions that return jsx to render ui elements
simpler and easier to write as compared to class components
used when you dont need to manage state or lifecycle method



Class Component

extend from React.component 
can hold and manage sate and provide lifecycle methods
they are more powerful than functional components but also more complex

*/

/*
Routing 

1. Install React Router
npm install react-router-dom

2. Set Up Browser Router
update src/index.js to include BrowserRouter
update src/App.js to include routes
update src/Menu.js to provide navigation links 


*/


/*
JSON SERVER 

1. Install json-server
npm install -g json-server

2. Start the json-server
json-server --watch db.json --port 5000

*/


/*
Optimization techniques

to improve the performance and maintainability of application

1. Lazy Loading : Loading components only when they are needed 
2. Code Splitting : Breaking the application into smaller bundles that can be 
loaded on demand
3. Pure Components : Pure components render only when their props or state change , 
which can improve performance by avaoiding unnecessary renders.



*/


import { lazy, Suspense } from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { Route,Routes } from "react-router-dom";
const VehicleList = lazy(()=> import("./components/VehicleList"));
const AddVehicle = lazy(()=> import("./components/AddVehicle")) ;
const UpdateVehicle = lazy(()=> import("./components/UpdateVehicle")) ;
const About = lazy(()=> import("./components/About"));
const  Home = lazy(()=> import("./components/Home"));



function App(){
  return (
    <>
    <Menu/>
    <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicle-list" element={<VehicleList/>}/>
      <Route path="/add-vehicle" element={<AddVehicle/>}/>
      <Route path="/update-vehicle/:id" element={<UpdateVehicle/>}/>
    </Routes>
    </Suspense>
    <Footer/>
    </>
  )
}

export default App;