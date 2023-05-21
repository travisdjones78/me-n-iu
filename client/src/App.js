
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import "./App.css"
import { Row, Col, Container, Card } from "react-bootstrap";
import apis from "./api/index";
import api from "./api/apis";
import Forms from "./components/Form";
import Modal from "./components/Modal";

const App = () => {
  const [chosenForm, setChosenForm] = useState('')
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('')

  const ownerRef = useRef(null)
  const pictureRef = useRef(null)
  const dogBreedRef = useRef(null)
  const ownerPictureRef = useRef(null)
  const dogOwnerRef = useRef(null)
  const dogPictureRef = useRef(null)
  const nameRef = useRef(null)
  const breedOriginRef = useRef(null)
  const subjectRef = useRef(null)
  const pathRef = useRef(null)
  const selectRef = useRef(null)





  // const allBreeds = async () => {



  // }

  const getBreedInfo = async () => { }
  const getDogInfo = async () => { }
  const getPictureInfo = async () => { }
  const getOwnerInfo = async () => { }

  const showForm = () => {
    setShow(true)
  }

  const formChoice = (e) => {
    e.preventDefault()
    setChosenForm(selectRef.current.value)
  }

  useEffect(() => {
    // allBreeds()
  }, [])
  return (
    <>
      <h1>BUDS BREED</h1>
      <button className='btn btn-dark btn-sm' onClick={showForm}>Create</button>
      <Forms
        chosenForm={chosenForm}
        ownerRef={ownerRef}
        pictureRef={pictureRef}
        dogBreedRef={dogBreedRef}
        ownerPictureRef={ownerPictureRef}
        dogOwnerRef={dogOwnerRef}
        dogPictureRef={dogPictureRef}
        nameRef={nameRef}
        breedOriginRef={breedOriginRef}
        subjectRef={subjectRef}
        pathRef={pathRef}
        formChoice={formChoice}
        getBreedInfo={getBreedInfo}
        getDogInfo={getDogInfo}
        getOwnerInfo={getOwnerInfo}
        getPictureInfo={getPictureInfo}
      />
      {/* <div>

      <div className="card mb-3">
        <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <img src="..." className="card-img-bottom" alt="..."/>
      </div>
      </div> */}
      <div className='container'>
        <div className=' card mb-3 col-md-3 m-1' >
          <img src='' className="card-img-top" alt="..." />
          <div className='card'>
            <div className="card-body">
              <h5 className="info">title</h5>
              <p className="card-text">description</p>
              <p className="card-text"><small className="text-muted">price</small></p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={modalTitle}
        onClose={() => setShow(false)}
        show={show}
      >
        <select onChange={formChoice} className='form-control' ref={selectRef}>
          <option>Choose A Form</option>
          <option value='breed'>Breed Form</option>
          <option value='pic'>Picture Form</option>
          <option value='owner'>Owner Form</option>
          <option value='dog'>Dog Form</option>
        </select>
      </Modal>

      <p className='info'>Walk</p>
    </>
  )
}

export default App;
