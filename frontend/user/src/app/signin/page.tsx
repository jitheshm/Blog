"use client"
import Signin from '@/components/Signin/Signin'
import React, { useEffect, useState } from 'react'
import instance from '../../axios'
import Cookies from 'js-cookie';
import { verify } from '@/features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';


function page() {

   const [loading, setLoading] = useState(true)
   const dispatch = useDispatch()
   const router = useRouter();
   useEffect(() => {
      instance.get('/api/users/token/verify', {
         headers: {
            Authorization: Cookies.get('token')
         }
      }).then((res) => {
         console.log(res);
         
         if (res.data.success) {
            console.log("success");
            
            dispatch(verify({ name: res.data.data.name }))
           router.replace('/')
         } else {
           Cookies.remove('token')
           console.log("fail");
            setLoading(false)
         }
      }).catch((err) => {
         Cookies.remove('token')
         console.log(err);
         setLoading(false)
      })
   }, [])

   return (
      <>
         {
            loading ? <div className="loader">Loading...</div> : <Signin />
         }

      </>
   )


}

export default page