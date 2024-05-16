import React from 'react'

function CommentForm() {
    return (
        <div>
            

            <div className='col-10'>
                <div className="container py-1 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 ">
                            <div className="card" style={{ borderRadius: '1rem' }}>


                                <div className="card-body ">
                                    <div className="mb-md-5 mt-md-4 pb-2">
                                        <div className='text-center'>
                                            <h4><b>Add Comment</b></h4>
                                        </div>


                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor=""></label>
                                            <textarea name="" id="" className='col-12' style={{ height: '100px' }}></textarea>

                                        </div>
                                        <div>
                                            <button className='btn btn-dark'> Comment </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CommentForm