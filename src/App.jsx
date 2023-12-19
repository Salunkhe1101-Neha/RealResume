import Navbar from "./CSS/Navbar/Navbar";
import Header from "./CSS/Header/Header";
import Section from "./CSS/Section/Section";
import Section2 from "./CSS/Section2/Section2";





import React from "react";

function App()
{
  return(
   
    // React.createElement("div", {id:"App"},React.createElement("h1", {},<h1>Hello</h1>))
    <>
    
   <Navbar/>
   <Header/>
   <Section/>
   <Section2/>
   
   
   
    </>
  )
 
}

export default App;