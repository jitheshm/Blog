"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { logout, verify } from '@/features/user/userSlice';
import instance from '@/axios';
function Auth({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const router = useRouter();
    const { verified, name } = useSelector((state) => state.user)

    useEffect(() => {
        if (verified) {
            setLoading(false)
        } else {
            if (Cookies.get('token')) {
                instance.get('/api/users/token/verify', {
                    headers: {
                        Authorization: Cookies.get('token')
                    }
                }).then((res) => {
                    if (res.data.success) {
                        dispatch(verify({ name: res.data.data.name }))
                        setLoading(false)
                    }
                }).catch((err) => {
                    dispatch(logout())
                    Cookies.remove('token')
                    router.push('/signin')
                })
            } else {
                dispatch(logout())
                Cookies.remove('token')
                router.push('/signin')

            }
        }
    }, [])
    return (
        <>
            {
                loading ? <div className="loader">Loading...</div> : children
            }
        </>
    )   
}

export default Auth