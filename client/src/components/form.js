
import '../App.css';

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
  dogRef,
  createBreedDb
}) => {

  return (<>
    {
      (chosenForm === 'breed')
        ? <form onSubmit={createBreedDb}>
          <div className="form-group">
            <label>Breed Origin</label>
            <input type="date" ref={breedOriginRef} className='form-control'></input>
          </div>
          <div className="form-group">
            <label>Picture</label>
            <input type="text" ref={pictureRef} className='form-control'></input>
          </div>
          <div className="form-group"></div>
          <label>Name</label>
          <input type="text" ref={nameRef} className='form-control'></input>
          <div className="btn-group">
            <button className="btn btn-primary my-2" type="submit">Submit Breed</button>
          </div>
        </form>
        : (chosenForm === 'pic')
          ? <div>
            <form onSubmit={getPictureInfo}>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" ref={subjectRef} className='form-control'></input>
              </div>
              <div className="form-group">
                <label>Path</label>
                <input type="text" ref={pathRef} className='form-control'></input>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary my-2" type="submit">Submit Picture</button>
              </div>
            </form>
          </div>
          : (chosenForm === 'owner')
            ? <div>
              <form onSubmit={getOwnerInfo}>
                <div className="form-group">
                  <label>Owner Picture</label>
                  <input type="text" ref={ownerPictureRef} className='form-control'></input>
                </div>
                <div className="form-group">
                  <label>Dog</label>
                  <input type="text" ref={dogRef} className='form-control'></input>
                </div>
                <div className="btn-group">
                  <button className="btn btn-primary my-2" type="submit">Submit Owner</button>
                </div>
              </form>
            </div>
            : (chosenForm === 'dog')
              ? <div>
                <form onSubmit={getDogInfo}>
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
                  <div className="btn-group">
                    <button className="btn btn-primary my-2" type="submit">Submit Dog</button>
                  </div>
                </form>
              </div>
              : ''
    }
  </>
  )
}

export default Forms;
