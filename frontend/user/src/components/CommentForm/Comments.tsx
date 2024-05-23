import instance from '@/axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { z } from 'zod'


const commentSchema = z.object({
    comment: z.string().min(1, "Comment is required").max(500, "Comment must be less than 500 characters"),
})

function CommentForm({ postId, setFetch }: { postId: string, setFetch: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState<{ comment?: string }>({})
    const { verified } = useSelector((state: any) => state.user)
    const router = useRouter()

    const onSubmit = () => {
        const result = commentSchema.safeParse({ comment })
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors
            setErrors({
                comment: fieldErrors.comment?.[0],
            })
            return
        }


        setErrors({})

        if (verified) {
            instance.post(`/api/comments/posts/${postId}`, {
                comment
            }, {
                headers: {
                    Authorization: Cookies.get('token')
                }
            }
            ).then((res) => {
                console.log(res)
                setComment('')
                setFetch((prev) => !prev)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            router.push('/signin')
        }
    }

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
                                            <textarea name="" id="" className='col-12' style={{ height: '100px' }} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                            {errors.comment && <div className="text-danger">{errors.comment}</div>}
                                        </div>
                                        <div>
                                            <button className='btn btn-dark' onClick={onSubmit}> Comment </button>
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
