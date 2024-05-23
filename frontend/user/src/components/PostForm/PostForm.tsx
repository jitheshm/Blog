"use client"

import instance from '@/axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Cookies from 'js-cookie';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

// Define the schema using Zod
const postSchema = z.object({
    title: z.string().min(1, "Title is required"),
    tag: z.string().min(1, "Tag is required"),
    content: z.string().min(1, "Content is required"),
    thumbnail: z.string().url("Invalid image URL").optional()
});

function PostForm() {
    const [editorContent, setEditorContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [errors, setErrors] = useState<{ title?: string, tag?: string, content?: string, thumbnail?: string }>({});
    const router=useRouter()

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'align': [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link']
        ]
    };

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    const handleImageInsert = () => {

        const newContent = `${editorContent}<img src="${imageUrl}" alt="Inserted Image" />`;
        setEditorContent(newContent);
    };

    const onSubmit = () => {
        let splitRes = editorContent.split('<img src="')[1];
        const imgUrl = splitRes ? splitRes.split('" alt="Inserted Image"')[0] : '';

        const postData = {
            title,
            tag,
            content: editorContent,
            thumbnail: imgUrl
        };

 
        const result = postSchema.safeParse(postData);
        if (!result.success) {
 
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                title: fieldErrors.title?.[0],
                tag: fieldErrors.tag?.[0],
                content: fieldErrors.content?.[0],
            });
            return;
        }


        setErrors({});
        instance.post('/api/posts', postData, {
            headers: {
                Authorization: Cookies.get('token')
            }
        }).then((res) => {
            console.log(res.data);
            router.push('/')
        }).catch((err) => {
            console.error(err);
        });
    };

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
                                                <input type="text" id="text" className="form-control form-control-lg" value={title} onChange={(e) => setTitle(e.target.value)} />
                                                {errors.title && <div className="text-danger">{errors.title}</div>}
                                            </div>
                                            <div data-mdb-input-init className="form-outline form-white mb-2">
                                                <label className="form-label" htmlFor="text">Tag</label>
                                                <input type="text" id="text" className="form-control form-control-lg" value={tag} onChange={(e) => setTag(e.target.value)} />
                                                {errors.tag && <div className="text-danger">{errors.tag}</div>}
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
                                                    {errors.content && <div className="text-danger">{errors.content}</div>}
                                                </div>
                                                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter image URL here..." />
                                                <button className='btn btn-success post-btn mx-2 btn-sm' onClick={handleImageInsert}>Insert Image</button>
                                            </div>
                                            <div>
                                                <button className='btn btn-dark btn-sm post-btn' onClick={onSubmit}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PostForm;
