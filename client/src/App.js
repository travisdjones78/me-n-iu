
import './App.css';
import React, { useEffect } from "react";
import apis from "./api/index";
import api from "./api/apis";

const App = () => {


  const allBreeds = async () => {
    // const breedInfo = await apis.allBreeds()
// const newCatalog = await api.makeit()
    console.log('new',newCatalog)
  }
  
  useEffect(() => {
    allBreeds()
  }, [])
  return (
    <>

    </>
  )
}

export default App;
