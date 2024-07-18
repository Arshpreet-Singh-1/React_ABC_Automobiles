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

import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer";


function App(){
  return (
    <>
    <Menu/>
    <About/>
    <Footer/>
    </>
  )
}

export default App;