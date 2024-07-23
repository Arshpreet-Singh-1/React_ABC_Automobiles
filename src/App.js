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

import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route,Routes } from "react-router-dom";
import VehicleList from "./components/VehicleList";
import AddVehicle from "./components/AddVehicle";
import UpdateVehicle from "./components/UpdateVehicle";



function App(){
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicle-list" element={<VehicleList/>}/>
      <Route path="/add-vehicle" element={<AddVehicle/>}/>
      <Route path="/update-vehicle/:id" element={<UpdateVehicle/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;