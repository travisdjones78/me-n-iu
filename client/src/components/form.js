const Forms = ({
  chosenForm,
  ownerRef,
  pictureRef,
  dogBreedRef,
  ownerPictureRef,
  dogOwnerRef,
  dogPictureRef,
  nameRef,
  breedOriginRef,
  subjectRef,
  pathRef,
  getBreedInfo,
  getDogInfo,
  getOwnerInfo,
  getPictureInfo,
  dogRef
}) => {

  return (<>
    {(chosenForm === 'breed')
      ? <form onsubmit={getBreedInfo}>
        <div className="form-group">
          <label>Breed Origin</label>
          <input type="text" ref={breedOriginRef} className='form-control'></input>
        </div>
        <div className="form-group">
          <label>Picture</label>
          <input type="text" ref={pictureRef} className='form-control'></input>
        </div>
        <div className="form-group"></div>
        <label>Name</label>
        <input type="text" ref={nameRef} className='form-control'></input>
      </form>
      : (chosenForm === 'pic')
        ? <div>
          <form onsubmit={getPictureInfo}>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" ref={subjectRef} className='form-control'></input>
            </div>
            <div className="form-group">
              <label>Path</label>
              <input type="text" ref={pathRef} className='form-control'></input>
            </div>

          </form>
        </div>
        : (chosenForm === 'owner')
          ? <div>
            <form onsubmit={getOwnerInfo}>
              <div className="form-group">
                <label>Owner Picture</label>
                <input type="text" ref={ownerPictureRef} className='form-control'></input>
              </div>
              <div className="form-group">
                <label>Dog</label>
                <input type="text" ref={dogRef} className='form-control'></input>
              </div>
            </form>
          </div>
          : (chosenForm === 'dog')
            ? <div>
              <form onsubmit={getDogInfo}>
                <div className="form-group">
                  <label>Breed</label>
                  <input type="text" ref={dogBreedRef} className='form-control'></input>
                </div>
                <div className="form-group">
                  <label>Pictures</label>
                  <input type="text" ref={dogPictureRef} className='form-control'></input>
                </div>
                <div className="form-group"></div>
                <label>Owner</label>
                <input type="text" ref={dogOwnerRef} className='form-control'></input>
              </form>
            </div>
            : ''
    }
  </>
  )
}

export default Forms;
