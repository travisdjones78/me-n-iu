
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import apis from "./api/index";
import Forms from "./components/Form";
import Modal from "./components/Modal";
import Header from "./components/header";

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
  const dogRef = useRef(null)

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
      {/* <h1>BUDS BREED</h1> */}
      <Header></Header>
      <button className='btn btn-dark btn-sm' onClick={showForm}>Create</button>

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
        show={show} >
        <select onChange={formChoice} className='form-control' ref={selectRef}>
          <option>Choose A Form</option>
          <option value='breed'>Breed Form</option>
          <option value='pic'>Picture Form</option>
          <option value='owner'>Owner Form</option>
          <option value='dog'>Dog Form</option>
        </select>

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
          dogRef={dogRef} />
      </Modal>
    </>
  )
}

export default App;
