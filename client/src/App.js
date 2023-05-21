
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
  const [breedInfo, setBreedInfo] = useState('')
  const [pictureInfo, setPictureInfo] = useState('')
  const [dogInfo, setDogInfo] = useState('')
  const [ownerInfo, setOwnerInfo] = useState('')

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

  const getBreedInfo = (e) => {
    e.preventDefault()
    const payLoad = {
      originated: breedOriginRef.current.value,
      picture: pictureRef.current.value,
      name: nameRef.current.value
    }
    setBreedInfo(payLoad)
  }
  const getPictureInfo = (e) => {
    e.preventDefault()
    const payLoad = {
      subjectId: subjectRef.current.value,
      path: pathRef.current.value
    }
    setPictureInfo(payLoad)
  }
  const getDogInfo = (e) => {
    e.preventDefault()
    const payLoad = {
      breed: dogBreedRef.current.value,
      picture: dogPictureRef.current.value,
      owner: dogOwnerRef.current.value
    }
    setDogInfo(payLoad)
  }
  const getOwnerInfo = (e) => {
    e.preventDefault()
    const payLoad = {
      picture: ownerPictureRef.current.value,
      dogs: dogRef.current.value
    }
    setOwnerInfo(payLoad)
  }

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
      <Header></Header>
      <div className='topBar row'>
        <button className='btn btn-dark btn-sm col-3' onClick={showForm}>Create</button>
      </div>

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
