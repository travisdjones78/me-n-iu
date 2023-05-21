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
}) => {

  return (<>
    {(chosenForm === 'breed')
      ? <form onsubmit={getBreedInfo}>
        <label></label>
        <input type="text" ref={breedOriginRef}></input>
        <label></label>
        <input type="text" ref={pictureRef}></input>
        <label></label>
        <input type="text" ref={nameRef}></input>
      </form>
      : (chosenForm === 'pic')
        ? <form onsubmit={getPictureInfo}>
          <label></label>
          <input type="text" ref={subjectRef}></input>
          <label></label>
          <input type="text" ref={pathRef}></input>
        </form>
        : (chosenForm === 'owner')
          ? <form onsubmit={getOwnerInfo}>
            <label></label>
            <input type="text" ref={ownerPictureRef}></input>
            <label></label>
            <input type="text" ref="dogs"></input>
          </form>
          : (chosenForm === 'dog')
            ? <form onsubmit={getDogInfo}>
              <label>Breed</label>
              <input type="text" ref={dogBreedRef}></input>
              <label>Pictures</label>
              <input type="text" ref={dogPictureRef}></input>
              <label>Owner</label>
              <input type="text" ref={dogOwnerRef}></input>
            </form>
            : ''
    }
  </>
  )
}

export default Forms;



