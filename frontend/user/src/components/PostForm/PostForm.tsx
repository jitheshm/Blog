"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

function PostForm() {

    const [editorContent, setEditorContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'align': [] }], ,
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link']
        ]
    };

    const handleEditorChange = (content) => {
        setEditorContent(content);

    };

    const handleImageInsert = () => {
        // Insert the image URL into the editor content
        const newContent = `${editorContent}<img src="${imageUrl}" alt="Inserted Image" />`;
        setEditorContent(newContent);
        //onContentChange(newContent); // Update the parent component with the new content
    };

    const onSubmit = () => {
        let splitRes = editorContent.split('<img src="')[1]
        const imgUrl = splitRes.split('" alt="Inserted Image"')[0]
        console.log(imgUrl);
        
        
    }


    return (
        <div className='container-fluid'>
            <div className='col-8 m-auto pt-4'>
                <section className="">
                    <div className="container py-1 ">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 ">
                                <div className="card" style={{ borderRadius: '1rem' }}>


                                    <div className="card-body ">
                                        <div className=" mt-md-4 pb-1">
                                            <div className='text-center'>
                                                <h4><b>Create a New Post</b></h4>
                                            </div>
                                            <div data-mdb-input-init className="form-outline form-white mb-2">
                                                <label className="form-label" htmlFor="text">Title</label>
                                                <input type="text" id="text" className="form-control form-control-lg" />

                                            </div>

                                            <div data-mdb-input-init className="form-outline form-white mb-2">
                                                <label className="form-label" htmlFor="text">Tag</label>
                                                <input type="text" id="text" className="form-control form-control-lg" />

                                            </div>
                                            <div data-mdb-input-init className="form-outline form-white mb-2">
                                                <label className="form-label" htmlFor="">Description</label>
                                                <div style={{ height: "300px" }}>
                                                    <ReactQuill
                                                        theme="snow"
                                                        modules={modules}
                                                        value={editorContent}
                                                        onChange={handleEditorChange}
                                                        placeholder="Compose an epic..."
                                                        style={{ height: "250px" }}
                                                    />


                                                </div>
                                                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter image URL here..." />
                                                <button className='btn btn-success post-btn mx-2 btn-sm' onClick={handleImageInsert}>  Insert Image </button>

                                            </div>
                                            <div>
                                                <button className='btn btn-dark btn-sm post-btn' onClick={onSubmit}> Submit </button>
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