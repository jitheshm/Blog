"use client"
import React, { useEffect, useState } from 'react'
import CommentForm from '../CommentForm/Comments'
import CommentsList from '../CommentsList/CommentsList'
import instance from '@/axios'
import { PostResponse } from '../Post/Post'
import parse from 'html-react-parser';
function PostDetails({ postId }: { postId: string }) {
    const [post, setPost] = useState<PostResponse['data'][0]>()
    useEffect(() => {
        instance.get(`/api/posts/${postId}`).then((res) => {
            console.log(res)
            setPost(res.data.data)

        })  
    }, [])

    return (
        <div className='container'>
            <div className='col-md-10 m-auto pt-4'>
                <div>     
                    <h3><b>{post?.title}</b></h3>
                    {/* <p>By Jithesh M</p> */}
                    {/* <div className='d-flex justify-content-center pt-3'>
                        <img src="http://localhost:3000/assets/img/post/1.png" alt="" />
                    </div> */}
                    <p className='mt-5'>
                        {post?.content ? (
                            parse(post.content)
                        ) : (
                            <p>No content available.</p>
                        )}
                    </p>
                    <hr style={{ color: '#656565', border: 'solid', borderWidth: '1px' }} />
                </div>
                <CommentForm />
                <CommentsList />
            </div>
        </div>
    )
}

export default PostDetails