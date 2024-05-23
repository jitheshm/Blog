import PostDetails from '@/components/PostDetails/PostDetails'
import React from 'react'
import { string } from 'zod'

function page({ params }: { params: { postId: string } }) {
    return (
        <PostDetails postId={params.postId}/>
    )
}

export default page