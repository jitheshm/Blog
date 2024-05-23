"use client"
import React, { useEffect, useState } from 'react';
import CommentForm from '../CommentForm/Comments';
import CommentsList from '../CommentsList/CommentsList';
import instance from '@/axios';
import { PostResponse } from '../Post/Post';
import parse from 'html-react-parser';

function PostDetails({ postId }: { postId: string }) {
    const [post, setPost] = useState<PostResponse['data'][0] | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [fetch, setFetch] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        instance.get(`/api/posts/${postId}`).then((res) => {
            setPost(res.data.data);
        });
    }, [postId]);

    return (
        <div className='container'>
            <div className='col-md-10 m-auto pt-4'>
                <div>
                    <h3><b>{post?.title}</b></h3>
                    <p className='mt-5'>
                        <>
                            {isMounted && post?.content ? (
                                parse(post.content)
                            ) : (
                                <span>No content available.</span>
                            )}
                        </>
                    </p>
                    <hr style={{ color: '#656565', border: 'solid', borderWidth: '1px' }} />
                </div>
                <CommentForm postId={postId} setFetch={setFetch} />
                <CommentsList postId={postId} fetch={fetch} />
            </div>
        </div>
    );
}

export default PostDetails;
