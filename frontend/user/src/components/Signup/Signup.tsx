

function Signup() {


    return (
        <div className="" style={{ backgroundColor: "rgb(229 229 229 / 41%)" }}>
            <section className="vh-100 ">
                <div className="container py-1 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card" style={{ borderRadius: '1rem' }}>


                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-2">
                                        <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                                        <p className="text-white-50 mb-3">Please enter your Details</p>
                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="">Full Name</label>
                                            <input type="text" id="" className="form-control form-control-lg" />

                                        </div>
                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />

                                        </div>
                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />

                                        </div>
                                       
                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg px-5" type="submit">Create</button>

                                    </div>
                                    <div>
                                        <p className="mb-0">Have an account? <a href="#!" className="text-dark-50 fw-bold">Sign In</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Signup