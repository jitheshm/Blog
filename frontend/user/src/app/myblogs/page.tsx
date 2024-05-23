import Auth from '@/components/Auth/Auth'
import MyPosts from '@/components/MyPosts/MyPosts'
import React from 'react'

function page() {
  return (
    <Auth>
      <MyPosts />
    </Auth>
  )
}

export default page