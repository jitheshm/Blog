"use client"
import instance from '@/axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { PostResponse } from '../Post/Post';
import { useRouter } from 'next/navigation';

function MyPosts() {
    const [posts, setPosts] = useState<PostResponse['data']>([])
    const router=useRouter()
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

    return (
        <div className="banner-area banner-inner-1 mt-5" id="banner">

            <div className="container ">
                <h4>My Blogs</h4>
                <div className="row mt-4">
                    {
                        posts.map((postObj, index) => {
                            return (
                                <div key={postObj._id} className="col-lg-3 col-sm-6">
                                    <div className="single-post-wrap style-white">
                                        <div className="thumb">
                                            <img src={postObj.thumbnail} alt="img" />
                                            <a className="tag-base tag-blue" href="#">Tech</a>
                                        </div>
                                        <div className="details">
                                            <h6 className="title"><a href="#">{postObj.title}</a></h6>
                                            <div className="post-meta-single mt-3">
                                                <ul>
                                                    <li><i className="fa fa-clock-o" />{postObj.dateOfPost}</li>
                                                </ul>
                                            </div>
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