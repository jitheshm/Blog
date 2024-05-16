import React from 'react'

function PostForm() {
    return (
        <div className='container-fluid'>
            <div className='col-8 m-auto pt-4'>
                <section className="">
                    <div className="container py-1 ">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 ">
                                <div className="card" style={{ borderRadius: '1rem' }}>


                                    <div className="card-body ">
                                        <div className="mb-md-5 mt-md-4 pb-2">
                                            <div className='text-center'>
                                                <h4><b>Create a New Post</b></h4>
                                            </div>
                                            <div data-mdb-input-init className="form-outline form-white mt-5 mb-2">
                                                <label className="form-label" htmlFor="text">Title</label>
                                                <input type="text" id="text" className="form-control form-control-lg" />

                                            </div>
                                            <div data-mdb-input-init className="form-outline form-white mb-2">
                                                <label className="form-label" htmlFor="text">Tag</label>
                                                <input type="text" id="text" className="form-control form-control-lg" />

                                            </div>
                                            <div data-mdb-input-init className="form-outline form-white mb-2">
                                                <label className="form-label" htmlFor="">Description</label>
                                                <textarea name="" id="" className='col-12' style={{ height: '200px' }}></textarea>

                                            </div>
                                            <div>
                                                <button className='btn btn-dark'> Post </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >


                
            </div>
        </div>
    )
}

export default PostForm