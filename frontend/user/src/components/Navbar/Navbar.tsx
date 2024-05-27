"use client"
import instance from '@/axios'
import { logout, verify } from '@/features/user/userSlice'
import { AxiosResponse } from 'axios'
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import Link from 'next/link'

type verifyResponse = {
    message: string
    success: boolean
    data: {
        name: string
    }
}

function Navbar() {
    const dispatch = useDispatch()
    const { verified, name } = useSelector((state) => state.user)
    useEffect(() => {
        if (!verified) {
            if (Cookies.get('token')) {
                instance.get('/api/users/token/verify', {
                    headers: {
                        Authorization: Cookies.get('token')
                    }
                }).then((res: AxiosResponse<verifyResponse>) => {
                    if (res.data.success) {
                        dispatch(verify({ name: res.data.data.name }))
                    }
                }).catch((err) => {
                    dispatch(logout())
                    Cookies.remove('token')
                })
            }
        }
    }, [verified])

    return (
        <>
            <div className="navbar-area">
                <div className="adbar-area  d-none d-lg-block" style={{ backgroundColor: '#a10a0a' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 align-self-center">
                                <div className="logo text-md-left text-center" style={{ color: '#fff' }}>
                                    <h2>BLOG SPOT</h2>
                                    {/* <a className="main-logo" href="index.html"><img src="assets/img/logo.png" alt="img" /></a> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* adbar end*/}
                {/* navbar start */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <div className="logo d-lg-none d-block" style={{ color: '#fff' }}>
                                <h2>BLOG SPOT</h2>
                                {/* <a className="main-logo" href="index.html"><img src="assets/img/logo.png" alt="img" /></a> */}
                            </div>
                            <button className="menu toggle-btn d-block d-lg-none" data-target="#nextpage_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-left" />
                                <span className="icon-right" />
                            </button>
                        </div>
                        <div className="nav-right-part nav-right-part-mobile">
                            <a className="search header-search" href="#"><i className="fa fa-search" /></a>
                        </div>
                        <div className="collapse navbar-collapse" id="nextpage_main_menu">
                            <ul className="navbar-nav menu-open">
                                <li className="current-menu-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="current-menu-item">
                                    <a href="#trending">Trending Blogs</a>
                                </li>
                                <li className="current-menu-item">
                                    <a href="#latest">Latest Blogs</a>
                                </li>
                                <li className="">
                                    <div className="dropdown show">
                                        <a className="btndropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#fff' }}>
                                            {verified ? name : 'Account'}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                            {
                                                verified &&
                                                <>
                                                    <Link className="dropdown-item" href={'/post/create'}>Write New Blog</Link>
                                                    <Link className="dropdown-item" href="/myblogs">My Blogs</Link>
                                                </>
                                            }
                                            {
                                                !verified ? <Link className="dropdown-item" href="/signin" style={{ color: 'black' }}>Log In</Link> : <a className="dropdown-item" href="#">Logout</a>
                                            }
                                        </div>
                                    </div>

                                </li>

                            </ul>
                        </div>
                        <div className="nav-right-part nav-right-part-desktop">
                            <div className="menu-search-inner">
                                <input type="text" placeholder="Search For" />
                                <button type="submit" className="submit-btn"><i className="fa fa-search" /></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div style={{ height: "164px" }}>

            </div>
        </>

    )
}

export default Navbar