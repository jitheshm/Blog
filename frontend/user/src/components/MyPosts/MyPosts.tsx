"use client"
import instance from '@/axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { PostResponse } from '../Post/Post';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function MyPosts() {
    const [posts, setPosts] = useState<PostResponse['data']>([])
    const router = useRouter()
    useEffect(() => {
        instance.get('api/posts/users/user', {
            headers: {
                Authorization: Cookies.get('token')
            }
        }).then((res) => {
            setPosts(res.data.data)
        }).catch((err) => {

            console.log(err);
            router.push('/signin')

        })
    }, [])

    const handleClick = (id: string) => {
        instance.delete(`api/posts/${id}`,{
            headers: {
                Authorization: Cookies.get('token')
            }
        }).then((res) => {
            console.log(res.data);
            setPosts(posts.filter((post) => post._id !== id))
        }).catch((err) => {
            console.log(err);
        
        })
    }

    return (
        <div className="banner-area banner-inner-1 mt-5" id="banner">

            <div className="container ">
                <h4>My Blogs</h4>
                <div className="row mt-4">
                    {
                        posts.map((postObj, index) => {
                            return (
                                <div key={postObj._id} className="col-lg-3 col-sm-6">
                                    <div className="single-post-wrap style-white ">
                                        <div className="thumb">
                                            <img src={postObj.thumbnail} alt="img" />
                                            <a className="tag-base tag-blue" href="#">Tech</a>
                                        </div>
                                        <div className="details row">
                                            <h6 className="title col-10"><Link href={`/post/${postObj._id}`}>{postObj.title}</Link></h6>
                                            <div className='col-1'>
                                                {/* <i className="fa-solid fa-ellipsis"></i> */}
                                                <div className="">
                                                    <button className="btn btn-outline-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                                        <i className="fa-solid fa-ellipsis" style={{ color: "#000" }} />
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <button className="dropdown-item btn" onClick={() => handleClick(postObj._id)}> Delete</button>

                                                    </div>
                                                </div>


                                            </div>
                                            {/* <div className="post-meta-single mt-3">
                                                <ul>
                                                    <li><i className="fa fa-clock-o" />{postObj.dateOfPost}</li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-post-wrap style-white">
                            <div className="thumb">
                                <img src="assets/img/post/2.png" alt="img" />
                                <a className="tag-base tag-orange" href="#">Food</a>
                            </div>
                            <div className="details">
                                <h6 className="title"><a href="#">Rocket Lab will resume launches no sooner than August 27th</a></h6>
                                <div className="post-meta-single mt-3">
                                    <ul>
                                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-post-wrap style-white">
                            <div className="thumb">
                                <img src="assets/img/post/3.png" alt="img" />
                                <a className="tag-base tag-blue" href="#">Tech</a>
                            </div>
                            <div className="details">
                                <h6 className="title"><a href="#">Google Drive flaw may attackers fool you into install malware</a></h6>
                                <div className="post-meta-single mt-3">
                                    <ul>
                                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-post-wrap style-white">
                            <div className="thumb">
                                <img src="assets/img/post/4.png" alt="img" />
                                <a className="tag-base tag-orange" href="#">Food</a>
                            </div>
                            <div className="details">
                                <h6 className="title"><a href="#">TikTok will sue the US over threatened ban</a></h6>
                                <div className="post-meta-single mt-3">
                                    <ul>
                                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyPosts