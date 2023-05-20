
import './App.css';
import  apis  from "./api/index";
import React, { useEffect } from "react";
function App() {


  const allBreeds = async () =>{
    const breedInfo = await apis.allBreeds()

    // console.log(allBreeds)
  }
  useEffect(()=>{
    allBreeds()
  },[])
  return (<>
  ;
  </>)
}

export default App;
