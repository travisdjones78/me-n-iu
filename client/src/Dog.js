const Dog = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h3 className="text-center">Dog Name</h3>
                </div>
                <div className="row">
                    <img
                        alt="no img"
                        src="/breedPics/french.jpg"
                        className="col-md-2"
                        style={{
                            border: '1px black solid',
                            width: '30rem',
                            height: '40%'
                        }} />
                </div>
            </div>
        </>
    )
}

export default Dog