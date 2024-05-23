import instance from '@/axios'
import React, { useEffect, useState } from 'react'

function CommentsList({ postId, fetch }: { postId: string, fetch: boolean }) {
    const [comments, setComments] = useState<{ comment: string,_id:string }[]>([])
    useEffect(() => {
        instance.get(`/api/comments/posts/${postId}`).then((res) => {
            setComments(res.data.data)
        }).catch((err)=>{
            console.log(err);
            
        })
    }, [postId, fetch])

    return (
        <div className='mt-4 col-12'>
            <div className='my-3'>
                <h5>Comments</h5>
            </div>
            {
                comments.map((commentObj, index) => {
                    return (
                        <div key={commentObj._id} className="card my-2">
                            <div className="card-body">
                                <h5 className="card-title">{commentObj.comment} </h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Jithesh</h6> */}
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default CommentsList